"use strict";

const mongoose = require('mongoose');
const db = new mongoose.Mongoose();

db.connection.on('error', (err) => console.error('CoreDb error: ', err));

const MongooseManager = {
    db : db,
  connect: () => db.connect(`mongodb+srv://ryates:${process.env.POINTS_PASSWORD}@cluster0-ajlug.mongodb.net/test?retryWrites=true&w=majority
`),
    disconnect : () => db.disconnect()
};

module.exports = MongooseManager;
