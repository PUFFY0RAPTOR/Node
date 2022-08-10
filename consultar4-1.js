const MongoCli = require('mongodb').MongoClient
//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const apr = database.collection("APRENDICES");

    // create a filter to update all movies with a 'G' rating
    const filter = { Edad: {$gt: 18} };

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    // increment every document matching the filter with 2 more comments
    const updateDoc = {
      $set: {
        DescPersonal: 'Todos somos iguales y a la vez diferentes.'
      },
    };
    const result = await apr.updateMany(filter, updateDoc, options);
    console.log(`Updated ${result.modifiedCount} documents`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
