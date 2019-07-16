var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://172.17.44.65");
client.on("connect", function() {
  client.subscribe("driver-2");
});
client.on("message", function(topic, message) {
  context = message.toString();
  console.log(context);
});
