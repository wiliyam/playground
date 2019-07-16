var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://172.17.44.65");
client.on("connect", function() {
  setInterval(function() {
    client.publish("driver-1", "i am manish active now");
    client.publish("driver-2", "i am vivek active now");
    console.log("Message Sent");
  }, 5000);
});
