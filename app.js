let express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://ex123:Ex12345@safeq-kbfyv.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(async (err) => {
//   const collection = await client.db("safeQ").collection("booking").findOne({});
//   console.log(collection);

//   client.close();
// });

let app = express();

app.get("/", (req, res) => {
  res.send("hello! welcome");
});

app.get("/home", (req, res) => {
  res.send("hello! welcome");
});

app.listen("8080", (req, res) => {
  console.log("Listening to the port 8080");
});
