import requests

# Replace with your actual API key
api_key = "AIzaSyAUkmQPL6Ff34l8TNPV9XrrEoDFYSNrCTQ"

# Define the API endpoint
api_url = 'https://maps.googleapis.com/maps/api/directions/json'

# Define the origin and destination for the directions
# origin = 'Ann Arbor, MI'
# destination = 'Carlsbad, CA'

state_to_abbreviation = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
}

# Function to get abbreviation from state name
def get_abbreviation(state_name):
    return state_to_abbreviation.get(state_name, "Not Found")

locations = [
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Ann Arbor",
        "state": "Michigan",
        "country": "United States of America",
        "coordinates": [42.2808, -83.7430],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Des Moines",
        "state": "Iowa",
        "country": "United States of America",
        "coordinates": [41.5868, -93.6250],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Denver",
        "state": "Colorado",
        "country": "United States of America",
        "coordinates": [39.7392, -104.9903],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Boulder",
        "state": "Colorado",
        "country": "United States of America",
        "coordinates": [40.0150, -105.2705],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Moab",
        "state": "Utah",
        "country": "United States of America",
        "coordinates": [38.5733, -109.5498],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Arches National Park",
        "state": "Utah",
        "country": "United States of America",
        "coordinates": [38.7331, -109.5925],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Bryce Canyon National Park",
        "state": "Utah",
        "country": "United States of America",
        "coordinates": [37.5930, -112.1871],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Horseshoe Bend",
        "state": "Arizona",
        "country": "United States of America",
        "coordinates": [36.8750, -111.5100],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Antelope Canyon",
        "state": "Arizona",
        "country": "United States of America",
        "coordinates": [36.8619, -111.3743],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Lake Powell",
        "state": "Arizona",
        "country": "United States of America",
        "coordinates": [37.0683, -111.2433],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Zion National Park",
        "state": "Utah",
        "country": "United States of America",
        "coordinates": [37.2982, -113.0263],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Las Vegas",
        "state": "Nevada",
        "country": "United States of America",
        "coordinates": [36.1699, -115.1398],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    },
    {
        "author": "Victor Lee",
        "lee": ["Lee.Victor"],
        "city": "Carlsbad",
        "state": "California",
        "country": "United States of America",
        "coordinates": [33.1581, -117.3506],
        "date": "2023-08-20",
        "photo": "/images/porto.jpeg"
    }
]



output = []
for i in range(1, len(locations)):
  origin = locations[i - 1].get("city") + ", " + state_to_abbreviation[locations[i - 1].get("state")]
  destination = locations[i].get("city") + ", " + state_to_abbreviation[locations[i].get("state")]
  params = {
      'origin': origin,
      'destination': destination,
      'key': api_key,
      'mode': 'driving',  # You can change the mode of transportation if needed
  }
  # Check if the request was successful (status code 200)
  response = requests.get(api_url, params=params)
  if response.status_code == 200:
      data = response.json()
      # Extract and print the optimal route information
      routes = data.get('routes', [])
      if routes:
          print("Optimal Route Coordinates:")
          
          for step in routes[0]['legs'][0]['steps']:
              # Extract latitude and longitude for each step
              start = [step['start_location']['lat'], step['start_location']['lng']]
              # start_lat = step['start_location']['lat']
              # start_lng = step['start_location']['lng']
              end = [step['end_location']['lat'], step['end_location']['lng']]

              output.append(start)
              output.append(end)
          
      else:
          print("No routes found.")
  else:
      print("Error:", response.status_code)

print(output)