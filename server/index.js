import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
if (process.env.NODE_ENV !== "production") {
    //We don't need dotenv when in production
    dotenv.config();
}

import pool from "./databasePool.js";

const app = express();
// middleware for parsing bodies from URL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.get("/", async (req, res) => {
    res.send("Hello World!!!");
});

app.get("/category", async (req, res) => {
    const values = await pool.query("SELECT category_name from category");

    res.send(values.rows.map((category) => category.category_name));
});

app.listen(5000, (err) => {
    console.log("Listening");
});
