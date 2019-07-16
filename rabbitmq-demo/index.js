var amqp = require("amqplib");

const CONN_URL =
  "	amqp://uzslbmyf:EP0Ma0b5t_ljrQqBZGAnF4pLYlk2h0wA@buck.rmq.cloudamqp.com/uzslbmyf";

let ch = null;

process.on("exit", code => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});

const run = async () => {
  const conn = await amqp.connect(CONN_URL);
  ch = await conn.createChannel();
  ch.sendToQueue("user-message", Buffer.from("data is send need to delete"));
  ch.consume(
    "user-message",
    msg => {
      console.log("Message:", msg.content.toString());
      ch.ack(msg); //send ack when data is read
    },
    { noAck: false } //when true no need to send ack
  );

  //
};

run();
