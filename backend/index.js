require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

// Port for backend
const PORT = process.env.PORT || 3002;

// Port for db
const uri = process.env.MONGO_URL;

const app = express();

// Starting server
app.listen( PORT, () => {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB connected!");
});