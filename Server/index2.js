import express from "express";
import cors from "cors";
const app = express();
import INB from '../Server/MOCK_DATA_REACT.json' assert { type: "json" }; 
import OTB from '../Server/META_CALLBACK.json' assert {type: "json"}

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("hi");
});


app.get("/INB", (req, res) => {
  res.status(200).json(INB);
});


app.get("/OTB", (req, res) => {
  res.status(200).json(OTB);
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(5005, () => {
  console.log(`App Started running on port 5005`);
});
