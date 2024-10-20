// Get the map element
mapboxgl.accessToken = 'your_access_token';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // Replace with your desired style
    center: [78.9667, 21.7597], // Center on India
    zoom: 5 // Adjust zoom level as needed
});
var map = L.map('map').setView([18.5204, 73.8567], 13); // Set view to Pune
// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

var circle = L.circle([18.5204, 73.8567], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);