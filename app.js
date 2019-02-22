const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'Festival_db';


app.get("/url", (req, res, next) => {
    const client = new MongoClient(url);

    client.connect(function (err, client) {


        if (err) {
            console.log(err)
            res.json([]);
        } else {
            const db = client.db(dbName);
            const col = db.collection('Album');
            col.find({}).toArray(function (err, items) {
                console.log(items);
                res.json(items);
                client.close();
            });
        }
    });

});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});