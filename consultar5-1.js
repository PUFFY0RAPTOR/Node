const MongoCli = require('mongodb').MongoClient
//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const apr = database.collection("APRENDICES");

    // Query for all movies with a title containing the string "Santa"
    const query = { DescPersonal: { $regex: "iguales" } };

    const result = await apr.deleteMany(query);
    console.log("Se han eliminado " + result.deletedCount + " documentos");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
