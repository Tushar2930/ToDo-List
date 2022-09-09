const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/contact_list_db";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on('error', function (err) { console.log(err.message); });

db.once('open', function () {
    console.log("successfully connected");
});