export function parseDBTripsResponse(jsonTrips) {
    return jsonTrips.map((tripData) => ({
        id: tripData.id.toString(),
        name: tripData.name,
        author: tripData.author,
        lee: tripData.lee,
        start_date: tripData.start_date,
        end_date: tripData.end_date,
        markers: tripData.markers.map((marker) => ({
            author: marker.author[0],
            city: marker.city,
            state: marker.state || '',
            province: marker.province || '',
            country: marker.country,
            coordinates: marker.coordinates
              .replace('(', '')
              .replace(')', '')
              .split(',')
              .map((coord) => parseFloat(coord.trim())),
            date: marker.date,
            photo: marker.photoUrl,
            lee: marker.lee,
            streetview: marker.streetview || '',
            isOpen: marker.isOpen || false,
            wayPoint: marker.waypoint || false
        })),
        google_photos: tripData.google_photos
      })
    );
}