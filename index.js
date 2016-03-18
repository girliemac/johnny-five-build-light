// index.js
var five = require("johnny-five");
var board = new five.Board();

var rgb;

board.on("ready", function() {
  // Create an RGB LED ([RedPin, GreenPin, BluePin])
  rgb = new five.Led.RGB([11,10,9]);

  // Set the color, and switch between on/off every 500ms
  //rgb.color("#ff0088");
  //rgb.strobe(500);
});

var http = require("http");

var server = http.createServer(function(req, resp) {
  if(!rgb) {
    resp.end('No board!');
  }
console.log(req.url);
  var url = req.url.toLowerCase();
  if (url.indexOf("/events/build/started") == 0) {
    rgb.color("#FFFF00");
    resp.end("Build Started");
  } else if (url.indexOf("/events/build/success") == 0) {
    rgb.color("#00ff00");
    resp.end("Build Successful");
  } else if (url.indexOf("/events/build/failure") == 0) {
    rgb.color("#ff0000");
    resp.end("Build Failed");
  } else {
    //rgb.color("#ffffff");
    resp.end("Unknown event");
  }
}).listen(8000);
console.log("Server listening on: http://localhost:8000");