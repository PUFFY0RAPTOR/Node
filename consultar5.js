const MongoCli = require('mongodb').MongoClient
//import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://SebastianPertuzG:sebas123@clusteradsi2364481.uulort2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const apr = database.collection("APRENDICES");

    // Query for a movie that has title "Annie Hall"
    const query = { Nombre: "Tego Calderon" };

    const result = await apr.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("Documento borrado correctamente.");
    } else {
      console.log("No se encontraron documentos en la consulta. Documentos eliminados 0.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);