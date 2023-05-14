const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// nagib-coffee-practice
// 2JhoYGoVnQ8G8YPT


app.get('/', (req, res) => {
    res.send('nagib coffee server is running');
});


// mongodb

// const uri = "mongodb+srv://<username>:<password>@cluster0.ehpilc7.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://nagib-coffee-practice:2JhoYGoVnQ8G8YPT@cluster0.ehpilc7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});