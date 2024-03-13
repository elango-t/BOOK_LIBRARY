const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/book-library"

// const connection = mongoose.createConnection(url).on("open", () => {
//     console.log("Mongo connected");
// }).on("error", () => {
//     console.log("Mongo connection problem")
// });

try {
    mongoose.connect(
        url
        
    )
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

// module.exports = connection;

