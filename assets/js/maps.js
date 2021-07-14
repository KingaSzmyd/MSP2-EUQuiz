let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.525961, lng: 15.255119 },
    zoom: 8,
  });
}
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 54.525961, lng: 15.255119 },
    });
    // Create an array of alphabetical characters used to label the markers.
    var labels = "";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    var markers = locations.map((location, i) => {
      const { lat, lng, title, description } = location;
      const contentString = `
        <h2>${title}</h2>
        <p>${description}</p>
      `
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: labels[i % labels.length],
    });

    marker.addListener("click", () =>
    {
      infowindow.open({
        anchor: marker,
        map
      });
    });
      return marker;
      });

      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
    }  
  
  var locations = [
    { description: "Vienna is the only capital city in the world, which produce significant quantities of wine within its city limits. It is a home to over 1,700 acres of vineyards and 320 vintners. The capital is often called the 'City of Music', or the 'World’s Capital of Music', as more famous composers have lived here than in any other city in the world, e.g.  Wolfgang Amadeus Mozart, Ludwig van Beethoven, Joseph Haydn, Franz Schubert, Johann Straus. Can be also called, the city of dreams. Sigmund Freud, the father of psychoanalysis, lived and worked in Vienna for much of his career. During this time, he had a significant impact on the city, causing it to be known as the birthplace of psychotherapy.", title: "Vienna", lat: 48.21184, lng: 16.37631 },
    { description: "description", title: "title", lat: 50.85425, lng: 4.35582 },
    { description: "description", title: "title", lat: 42.71156, lng: 23.32202 },
    { description: "description", title: "title", lat: 35.19669, lng: 33.35913 },
    { description: "description", title: "title", lat: 50.09324, lng: 14.44067 },
    { description: "description", title: "title", lat: 45.82003, lng: 15.98710 },
    { description: "description", title: "title", lat: 55.67453, lng: 12.58513 },
    { description: "description", title: "title", lat: 59.44340, lng: 24.75544 },
    { description: "description", title: "title", lat: 60.17363, lng: 24.86771 },
    { description: "description", title: "title", lat: 48.87649, lng: 2.39743 },
    { description: "description", title: "title", lat: 37.95640, lng: 23.79123 },
    { description: "description", title: "title", lat: 52.51640, lng: 13.46051 },
    { description: "description", title: "title", lat: 47.49677, lng: 19.06376 },
    { description: "description", title: "title", lat: 48.13857, lng: 17.10819 },
    { description: "description", title: "title", lat: 53.34271, lng: -6.24149 },
    { description: "description", title: "title", lat: 41.89562, lng: 12.51068 },
    { description: "description", title: "title", lat: 40.40669, lng: -3.70514 },
    { description: "description", title: "title", lat: 56.96205, lng: 24.11451 },
    { description: "description", title: "title", lat: 54.67895, lng: 25.32536 },
    { description: "description", title: "title", lat: 49.61504, lng: 6.12496 },
    { description: "description", title: "title", lat: 35.89955, lng: 14.51155 },
    { description: "description", title: "title", lat: 52.35979, lng: 4.91546 },
    { description: "description", title: "title", lat: 38.65211, lng: -9.10676 },
    { description: "description", title: "title", lat: 44.41744, lng: 26.11692 },
    { description: "description", title: "title", lat: 52.26014, lng: 20.99850 },
    { description: "description", title: "title", lat: 59.33692, lng: 18.06719 },
    { description: "description", title: "title", lat: 46.05997, lng: 14.52012 },
  ];

