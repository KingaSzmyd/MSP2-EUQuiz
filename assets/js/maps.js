  /*jshint esversion: 6 */
let map;

/* exported initMap */
function initMap() { 
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.525961, lng: 15.255119 },
    zoom: 8,
  });
}
function initMap() { 
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 54.525961, lng: 15.255119 },
    });
    // Create an array of alphabetical characters used to label the markers.
    var labels = "";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    // Add Info Windows conected with the markers
    var markers = locations.map((location, i) => {
      const { lat, lng, title, description } = location;
      const contentString = `
        <h2>${title}</h2>
        <p>${description}</p>
      `;
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
    { description: "Brussels is the city famous from its: beer, waffles, french fries and chocolate! Well known also as the capital of Europe, EU institutions like the European Commission, the European Council, Council of the European Union and European Parliament call it 'home'", title: "Brussels", lat: 50.85425, lng: 4.35582 },
    { description: "City was founded 7000B.C by the Thracian tribes and was ruled and occupied by many different superpowers, such as the Romans and the Ottomans. Today, is a modern city where the history of this place could be seen everywhere, from the ground floor of a hotel to the subway stations. For example, the first subway station took 30 years to build. This city is built on top of Roman ruins. ", title: "Sofia", lat: 42.71156, lng: 23.32202 },
    { description: "Nicosia is the only divided capital city in the world. That’s the home to the Oldest Wine Brand in the world and the Oldest Perfume Bottle in the world. The official language is Greek.", title: "Nicosia", lat: 35.19669, lng: 33.35913 },
    { description: "The city is famous from its beer SPA and pork knuckle. The locals consume the most beer per capita in the world. It’s a home for the largest castle in the world. There is a graffiti wall devoted to John Lennon. Since 1980, it’s been repainted numerous times and is laced in graffiti lyrics from Lennon and The Beatles.", title: "Prague", lat: 50.09324, lng: 14.44067 },
    { description: "Over 200 old-school gas lamps have lit up the city each night since their installation in 1863. Many places here are named after bears (medvjedi) - Mount Medvednica, Medvedgrad Castle, pub Mali Medo. The city has the world's shortest public transport vehicle and very own solar system, built around the sculpture of the Grounded Sun on Bogovićeva street.", title: "Zagreb", lat: 45.82003, lng: 15.98710 },
    { description: "The capital is called the 'Happiest City' in the world. The city is full of liquorices sweet and 'wienerbrød' and famous from its dark bread sandwiches – 'smørrebrød' and fairy-tales. It’s a home to a Little Mermaid, 'HYGGE' and Carlsberg", title: "Copenhagen", lat: 55.67453, lng: 12.58513 },
    { description: "The city of secret passages, under the Old Town is a labyrinth of 17th century tunnels. The favorite local drink is a sweet liqueur, invented in the 60’s. It is tasty whether you drink it hot or cold, straight, in a cocktail or coffee. With the use of natural ingredients, it presents a smooth but bitter flavor, with aromas of cinnamon, toffee, citrus and warm spices.", title: "Tallinn", lat: 59.44340, lng: 24.75544 },
    { description: "The city is called the 'Daughter of the Baltic', is on the tip of a peninsula and on 315 islands. It is also often called the 'White City of the North' because many of its buildings are constructed of a local light-colored granite. The capital has two official languages and is the world’s coldest capital, with a yearly average temperature not exceeding 0°C. ", title: "Helsinki", lat: 60.17363, lng: 24.86771 },
    { description: "The capital is called 'City of Light' and has the biggest museum of art. There is one dog for every 7th citizen. The first in the world 'Bloody Merry' cocktail was invented here. The locals declined Tom Cruise’s request for becoming an honorary citizen", title: "Paris", lat: 48.87649, lng: 2.39743 },
    { description: "It is the Europe’s oldest capital city. It was the birthplace of democracy. It was the first European Capital of Culture. Every year is visited by 18 million tourists. It’s one of the only cities, that have experienced all types of government: monarchy, democracy, socialism, capitalism, communism. On July 10, 1977, the temperature in the capital reached a record breaking high of 118.4 °F.", title: "Athens", lat: 37.95640, lng: 23.79123 },
    { description: "The city has the largest train station in Europe and is the only city in the world with three active opera houses. This capital has more ‚Döner‘ Kebab shops than Istanbul. The capital has over 180 kilometres of navigable waterways within city limits. It's famous from its own beer speciality – 'Weiße'! It is home to the longest open air gallery in the world with a little over 1.3 km. The East Side Gallery showcases over 100 murals from artists from all over the world", title: "Berlin", lat: 52.51640, lng: 13.46051 },
    { description: "No building in this city is taller than 96 meters. It is a home to the largest synagogue in Europe and to the oldest metro line in the continental Europe. The city has a secret subterranean world, beneath the capital lies a hidden subterranean world, a maze of over 200 caverns. The caverns are the result of the large number of geothermal springs in the area. Many of these caves are open to the public for guided spelunking adventures. There are more thermal water springs than in any other capital city in the world. ", title: "Budapest", lat: 47.49677, lng: 19.06376 },
    { description: "The capital is also called: 'A little Big City', 'Beauty on the Danube' or 'The Suburb of Vienna'. It is the world’s only national capital that shares its city borders with two independent countries. The capital is nestled beside the Danube River, among lush vineyards, and skirted by the Little Carpathian Mountains. The city breeds a fusion where new meets old, east meets west and green spaces meet urban locales.", title: "Bratislava", lat: 48.13857, lng: 17.10819 },
    { description: "In this city, there is the only bridge in Europe, that has the same width and length. The capital has a name of a UNESCO City of Literature. It is a home to the the largest park in Europe and the widest street in Europe (49 meters). The capital name in old local language means “Black Pool”. There is no catholic cathedral in this city. It became Europe’s Silicon Valley.", title: "Dublin", lat: 53.34271, lng: -6.24149 },
    { description: "The city has 280 fountains and more than 900 churches. Nearly 700,000 euros worth of coins are tossed into one of the most famous one each year. The proceeds are donated to Caritas to help those in need. The mascot of the capital is a she-wolf that cared for brothers, the mythological founders of the city. There is a home to museum dedicated entirely to pasta.", title: "Rome", lat: 41.89562, lng: 12.51068 },
    { description: "It is the second biggest city in the European Union. It is a home to the football club, that according to FIFA, is the world’s most successful football club of the 20th century. The city has more cloudless days than virtually any other city in Europe. It’s also the highest capital city in Europe. Its name comes from the Arabic 'magerit' which means 'place of many streams'.", title: "Madrid", lat: 40.40669, lng: -3.70514 },
    { description: "The city’s historical center is a UNESCO World Heritage Site, noted for its Art Nouveau/Jugendstil architecture and 19th century wooden architecture. The city is located on both banks of the river Daugava which separates it into two parts, Vecriga and Pardaugava. In 17th centaury was the biggest city of the Swedish Empire. ", title: "Riga", lat: 56.96205, lng: 24.11451 },
    { description: "The Old Town of this city was declared a UNESCO World Heritage Site in 1994. Nicknames for this capital include: Athens of the North, Rome of the North and New Babylon. The city was recognized by the Guinness World Records as the site where the largest coin pyramid ever was created. The pyramid was built from over a million coins.", title: "Vilnius", lat: 54.67895, lng: 25.32536 },
    { description: "It is one of three official EU capitals and serves as the seat for the European Court of Justice. It’s called 'Gibraltar of the North', documenting its reputation as one of Europe’s strongest fortifications trailing only Gibraltar. The city was recognized by the Guinness World Records for local Restaurant Chiggeri which offers a wine life of 1,746 distinct wines, the most commercially available varieties of wine anywhere.", title: "Luxembourg City", lat: 49.61504, lng: 6.12496 },
    { description: "The entire city is a UNESCO World heritage site. It is a smallest European capital. The city is noted for its fortifications, consisting of bastions, curtains and cavaliers, along with the beauty of its Baroque palaces, gardens and churches. The capital city was named after the Grand Master of the Knights.", title: "Vallette", lat: 35.89955, lng: 14.51155 },
    { description: "The city stands on 11 million poles. Its canals are full of bicycles. The houses in the capital are narrow because, back in the 17th century, the locals were taxed on the width of their property, making a narrow house a great way to save money. The city features the most museums per capita in the world.", title: "Amsterdam", lat: 52.35979, lng: 4.91546 },
    { description: "The city is lying on eight hills. It’s home to one of the world’s most top secret recipes: Pastéis da nata, only 3 people in the world know the original recipe. You can find here the smallest bookstores in the world. The Oceanarium in this capital has the largest indoor tank in Europe.", title: "Lisbon", lat: 38.65211, lng: -9.10676 },
    { description: "The capital is called 'Little Paris' and 'New Berlin'. It is a home to one of the largest and heaviest building in the world – Palace of Parliament, and to the longest boulevard in Europe. The legends say that the city has been named after a shepherd. It is known as a Europe's earthquake capital.", title: "Bucharest", lat: 44.41744, lng: 26.11692 },
    { description: "The city is notable among Europe’s capital cities not for its size, its age, or its beauty but for its indestructibility. It is a phoenix that has risen repeatedly from the ashes of war. One of the most famous people born in this capital was Maria Skłodowska-Curie, who achieved international recognition for her research on radioactivity and was the first female recipient of the Nobel Prize. Nicknames for it include 'Paris of the North' and 'Phoenix City'", title: "Warsaw", lat: 52.26014, lng: 20.99850 },
    { description: "The city is often called:  the 'World's Smallest Big City' or the 'World's Biggest Small Town'. The city became the venue for the award of the first Nobel Prizes, in the year 1901. The capital is a home to the Globe Arena, currently the largest hemispherical building in the world. The total absence of heavy industry makes it also one of the world’s cleanest metropolises.", title: "Stockholm", lat: 59.33692, lng: 18.06719 },
    { description: "It is the green capital of a green country. The area on either side of the river with its picturesque bridges and the central market owes its distinctive appearance to the great architect Jože Plečnik. The city of thousands of events is surrounded by parks and areas of protected nature. It is also known as 'Green capital of Dragons'. The biggest monument in the city is 30 km long. It is the only capital where the US and the Russian embassies face each other.", title: "Ljubljana", lat: 46.05997, lng: 14.52012 },
  ];

