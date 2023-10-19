// import express, { json } from "express";
// import cors from 'cors'
// const app = express();
// import Records from "../Server/inbound_request.json" assert { type: 'json' };



// app.use(cors())

// app.get("/search", (req, res) => {
//   res.status(200).send(Records);
// });

// app.get("*", (req, res) => {
//   res.status(404).send("Page not found.");
// });

// app.listen(5000);


import express from "express";
const app = express();
import cors from "cors";
import { Users } from "../searcher/src/searchbar/users.js";

app.use(cors());

app.get("/",(req,res)=>{
  const {q} = req.query;
  const keys =["first_name","last_name","email"];

  const search = (data)=>{
    return data.filter((item)=>
    keys.some((key)=>item[key].toLowerCase().includes(q))
    );
  };


  res.json(search(Users))
});

app.listen(5000,()=>console.log("API is working"));