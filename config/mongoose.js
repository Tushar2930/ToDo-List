if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/todolist_db";

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("Mongo Is Running");
    })
    .catch((err) => {
        console.log("Mongo Error");
    });

// const db = mongoose.connection;

// db.on('error', function (err) { console.log(err.message); });

// db.once('open', function () {
//     console.log("successfully connected");
// });