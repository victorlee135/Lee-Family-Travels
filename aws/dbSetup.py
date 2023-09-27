import psycopg2

# RDS connection parameters
host = "leefamily.ct2rvxfsqv5v.us-east-2.rds.amazonaws.com"
dbname = "sampleDB"
user = "bigvic"
password = "Hongshin9384!"

# Connect to the RDS instance
connection = psycopg2.connect(host=host, dbname=dbname, user=user, password=password)

# Create a cursor object to execute SQL statements
cursor = connection.cursor()

# Define SQL statements to create tables
create_pins_table = """
CREATE TABLE Markers (
  id serial PRIMARY KEY,
  author text[],
  city text,
  state text,
  province text,
  country text,
  coordinates point,
  date date,
  photo text,
  lee text[],
  streetview text,
  is_open boolean,
  way_point boolean,
  trip_id integer,
  FOREIGN KEY (trip_id) REFERENCES Trips (id)
);
"""

create_trips_table = """
CREATE TABLE Trips (
  id serial PRIMARY KEY,
  trip_name text,
  author text,
  start_date date,
  end_date date,
  google_photos text
);
"""

# Execute the SQL statements
cursor.execute(create_trips_table)
cursor.execute(create_pins_table)


# Commit the changes and close the cursor and connection
connection.commit()
cursor.close()
connection.close()
