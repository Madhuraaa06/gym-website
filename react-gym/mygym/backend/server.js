// index.js
const connecttoMongo = require("./db");
const express = require('express');
var cors = require('cors')

connecttoMongo();
const app = express();
const port = 5001;

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("well and okay");
});

const authRouter = require('./Routes/auth'); 
// const notesrouter = require('./Routes/notes');   


app.use('/auth', authRouter); // Use the imported router
// app.use('/notes', notesrouter);

app.get("/home", (req, res) => {
    res.send("home page");
});

app.listen(port, () => {
    console.log("listening on port", port);
});
