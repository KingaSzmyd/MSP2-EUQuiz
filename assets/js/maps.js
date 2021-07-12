let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.525961, lng: 15.255119 },
    zoom: 8,
  });
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 54.525961, lng: 15.255119 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  
  const locations = [
    { lat: 48.21184, lng: 16.37631 },
    { lat: 50.85425, lng: 4.35582 },
    { lat: 42.71156, lng: 23.32202 },
    { lat: 35.19669, lng: 33.35913 },
    { lat: 50.09324, lng: 14.44067 },
    { lat: 45.82003, lng: 15.98710 },
    { lat: 55.67453, lng: 12.58513 },
    { lat: 59.44340, lng: 24.75544 },
    { lat: 60.17363, lng: 24.86771 },
    { lat: 48.87649, lng: 2.39743 },
    { lat: 37.95640, lng: 23.79123 },
    { lat: 52.51640, lng: 13.46051 },
    { lat: 47.49677, lng: 19.06376 },
    { lat: 48.13857, lng: 17.10819 },
    { lat: 53.34271, lng: -6.24149 },
    { lat: 41.89562, lng: 12.51068 },
    { lat: 40.40669, lng: -3.70514 },
    { lat: 56.96205, lng: 24.11451 },
    { lat: 54.67895, lng: 25.32536 },
    { lat: 49.61504, lng: 6.12496 },
    { lat: 35.89955, lng: 14.51155 },
    { lat: 52.35979, lng: 4.91546 },
    { lat: 38.65211, lng: -9.10676 },
    { lat: 44.41744, lng: 26.11692 },
    { lat: 52.26014, lng: 20.99850 },
    { lat: 59.33692, lng: 18.06719 },
    { lat: 46.05997, lng: 14.52012 },
  ];