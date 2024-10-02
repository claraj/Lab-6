
// where in the world?

// todo customize these numbers
let mapCenter = [45, -93]   // this is the start point of the map
// how much are we zoomed in/out?
let zoomLevel = 4   // TODO you can also change the size of the map div to make things fit
// Create the map object
let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// Add tiles - the pictures that make up the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // todo change this name if you copied this from zoom chat

// When we have a set of objects, and they are all basically the same - they all
// have the same attributes,

// all the things are bridges
// all the bridges have a name
// all the bridges have a span
//
// it's common to store as an array of objects.
/*  A bridge object might be something like this, made up data, you use real data

{
   name: 'Golden Gate Bridge',
   city: 'San Francisco',
   span: '1234m',
   location: [35, -105]
}

{
   name: 'Tacoma Narrows Bridge',
   city: 'Tacoma',
   span: '3434m',
   location: [5, -135]
}


Verrazano-Narrows Bridge	New York, NY	1298.4	40.6066, -74.0447
Golden Gate Bridge	San Francisco and Marin, CA	1280.2	37.8199, -122.4783
Mackinac Bridge	Mackinaw and St Ignace, MI	1158.0	45.8174, -84.7278
George Washington Bridge	New York, NY and New Jersey, NJ	1067.0	40.8517, -73.9527
Tacoma Narrows Bridge	Tacoma and Kitsap, WA	853.44	47.2690, -122.5517

 */

// store bridges as array of objects
let bridgeList = [
    { name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447] },
    { name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    // todo the rest of the bridges
]

bridgeList.forEach(function(bridgeObject) {
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates
    // todo - add a popup - see videos or leaflet docs
    //  example marker text "Tacoma Narrows Bridge, Tacoma, span is 1500M"
    let bridgeMarker = L.marker(bridgeCoordinates)
    bridgeMarker.bindPopup('Hello?')  // todo change this text to text customized to this bridge
    bridgeMarker.addTo(bridgeMap)
})












