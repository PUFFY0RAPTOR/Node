const MongoCli = require('mongodb').MongoClient
//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const apr = database.collection("APRENDICES");

    // create a filter for a movie to update
    const filter = { Nombre: "Sebastian Pertúz" };

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        //plot: `A harvest of random numbers, such as: ${Math.random()}`
        Nombre: 'Sebastian Pertúz Gonzalez'
      },
    };

    const result = await apr.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
