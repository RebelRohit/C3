import express, { json } from "express";
import cors from 'cors'
const app = express();
import Records from "../Server/inbound_request.json" assert { type: 'json' };


app.use(cors())

app.get("/search", (req, res) => {
  res.send(Records);
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(5000);
