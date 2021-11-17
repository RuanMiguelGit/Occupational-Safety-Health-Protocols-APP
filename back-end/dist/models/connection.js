"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
require('dotenv').config();
const { MongoClient } = require('mongodb');
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(MONGO_DB_URL);
// const MONGO_DB_URL = 'mongodb://localhost:27017/BestBuyer';
// const DB_NAME = 'BestBuyer';
let db = null;
const connection = () => {
    return db
        ? Promise.resolve(db)
        : MongoClient.connect(MONGO_DB_URL, OPTIONS)
            .then((conn) => {
            db = conn.db(DB_NAME);
            return db;
        });
};
exports.connection = connection;
