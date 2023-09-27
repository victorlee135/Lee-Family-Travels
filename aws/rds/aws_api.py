from io import BytesIO
import base64
import psycopg2
from psycopg2 import sql
from flask import Flask, request, jsonify
import boto3
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# AWS S3 configuration
bucket_name = 'leefamilytravels'
s3 = boto3.client('s3')

class DBUtils:
    def __init__(self, connection_params):
        self.connection_params = connection_params

    def connect(self):
        try:
            self.conn = psycopg2.connect(**self.connection_params)
            self.conn.autocommit = True
            self.cursor = self.conn.cursor()
        except psycopg2.Error as e:
            print("Error connecting to the database:", e)
            raise

    def disconnect(self):
        try:
            self.cursor.close()
            self.conn.close()
        except psycopg2.Error as e:
            print("Error disconnecting from the database:", e)
            raise

    def get_filtered_trips(self):
        filters = request.args.getlist('filters')
        start_date = request.args.get('startDate')
        end_date = request.args.get('endDate')

        # Build the SQL query dynamically based on filters and date range
        query = sql.SQL("SELECT * FROM {}").format(sql.Identifier('public', 'trips'))
        conditions = []

        if filters:
            conditions.append(sql.SQL("author IN ({})").format(
                sql.SQL(',').join(map(sql.Identifier, filters))))

        if start_date:
            conditions.append(sql.SQL("start_date >= %s"))

        if end_date:
            conditions.append(sql.SQL("end_date <= %s"))

        if conditions:
            query += sql.SQL(" WHERE ").join(conditions)

        try:
            if start_date and end_date:
                self.cursor.execute(query, (start_date, end_date))
            elif start_date:
                self.cursor.execute(query, (start_date,))
            elif end_date:
                self.cursor.execute(query, (end_date,))
            else:
                self.cursor.execute(query)
            return self.cursor.fetchall()
        except psycopg2.Error as e:
            print("Error executing query:", e)
            raise

    def get_all_markers(self):
        try:
            query = sql.SQL("SELECT * FROM {}").format(sql.Identifier('public', 'markers'))
            self.cursor.execute(query)
            markers = self.cursor.fetchall()
            return markers
        except psycopg2.Error as e:
            print("Error executing query:", e)
            raise

@app.route('/api/trips', methods=['GET'])
def get_trips():
    db_utils = DBUtils(connection_params)
    db_utils.connect()

    trips = db_utils.get_filtered_trips()

    db_utils.disconnect()

    response = []
    trip_dict = {}
    for trip in trips:
        trip_dict[trip[0]] = {
            "name": trip[1],
            "author": trip[2],
            "start_date": str(trip[3]),
            "end_date": str(trip[4]),
            "google_photos": trip[5],
            "lee": trip[6]
        }
    response.append(trip_dict)
    return jsonify({"trips": response})

@app.route('/api/trips/markers', methods=['GET'])
def get_markers():
    db_utils = DBUtils(connection_params)
    db_utils.connect()

    markers = db_utils.get_all_markers()
    trips = db_utils.get_filtered_trips()

    db_utils.disconnect()

    trip_dict = {}
    for trip in trips:
        trip_dict[trip[0]] = {
            "id": trip[0],
            "name": trip[1],
            "author": trip[2],
            "start_date": str(trip[3]),
            "end_date": str(trip[4]),
            "google_photos": trip[5],
            "lee": trip[6],
            "markers": []
        }

    response = []
    for marker in markers:
        marker_dict = {
            "id": marker[0],
            "author": marker[1],
            "city": marker[2],
            "state": marker[3],
            "province": marker[4],
            "country": marker[5],
            "coordinates": marker[6],
            "date": str(marker[7]),
            "photoUrl": marker[8],
            "lee": marker[9],
            "waypoint": marker[10]
        }
        tripId = marker[11]
        trip_dict[tripId]["markers"].append(marker_dict)

    for tripId, dict in trip_dict.items():
        response.append(trip_dict[tripId])

    return jsonify({"tripData": response})

@app.route('/api/trips/markers/get-object', methods=['GET'])
def get_object():
    try:
        trip = request.args.get('tripFolder')
        file_name = request.args.get('fileName')
        object_key = "images/" + trip + "/" + file_name
        response = s3.get_object(Bucket=bucket_name, Key=object_key)

        # Get the object data and content type
        object_data = response['Body'].read()
        content_type = response['ContentType']

        # Return the object data with the appropriate content type
        return object_data, 200, {'Content-Type': content_type}
    except Exception as e:
        return str(e), 500


@app.route('/api/trips/markers/get-images', methods=['GET'])
def get_objects():
    try:
        trip_folder = request.args.get('tripFolder')
        file_names = request.args.get('fileNames')
        file_name_list = file_names.split(',')  # Split comma-separated file names
        objects = []

        for file_name in file_name_list:
            object_key = f"images/{trip_folder}/{file_name}"
            print(object_key)
            response = s3.get_object(Bucket=bucket_name, Key=object_key)
            # Get the object data and content type
            object_data = response['Body'].read()
            content_type = response['ContentType']

            data_base64 = base64.b64encode(object_data).decode('utf-8')

            # Append the object data and content type to the list
            objects.append({
                'data': data_base64,
                'content_type': content_type
            })

        # Return the list of objects with the appropriate content types
        return jsonify(objects), 200
    # # Return the object data with the appropriate content type
    #     return object_data, 200, {'Content-Type': content_type}
    except Exception as e:
        return str(e), 500

    

if __name__ == '__main__':
    connection_params = {
        "dbname": "sampleDB",
        "user": "bigvic",
        "password": "Hongshin9384!",
        "host": "leefamily.ct2rvxfsqv5v.us-east-2.rds.amazonaws.com",
        "port": "5432",  # Default PostgreSQL port
    }
    app.run(debug=True, port=5000)
