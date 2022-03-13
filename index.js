import express from "express";
import {MongoClient} from "mongodb";

const client = new MongoClient("mongodb+srv://harutyunyandavo22:099993953d@cluster0.u91rx.mongodb.net/Molinya?retryWrites=true&w=majority")

const start = async function () {

    await client.connect();

    const cleanup = (event) => {
        client.close();
        process.exit();
    }

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);

    const db = client.db("db");
    const collection = db.collection("users")

    const users = await collection.find({}).toArray();

    alert(users)


    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello")
    });
    
    app.listen(5000)

}

start()

