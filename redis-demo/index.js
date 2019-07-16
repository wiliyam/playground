const redis = require("redis");

const client = redis.createClient();

client.on("connect", () => {
  console.log("successfully connected to redis");
});
