// //To see how the final website should work, run "node solution.js".
// //Make sure you have installed all the dependencies with "npm i".
// //The password is ILoveProgramming  
// import express from 'express';

// import bodyParser from "body-parser";
// import  {dirname} from"path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app=express();
// const port=3000;

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/public/index.html");
// })

// app.post("/check",(req,res)=>{
//     const userInput= req.body["password"];
//     if(userInput==="ILoveProgramming")
//     {
//         res.sendFile(__dirname+"/public/secret.html");
//     }else
//     {
//         res.sendFile(__dirname+"/public/index.html");
//     }
// })

// app.listen(3000,(req,res)=>{
//     console.log((`Server running at port ${port}`));
// })

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming  
import express from 'express';

import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var checkingPass = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    const userInput = req.body["password"];
    if (userInput === "ILoveProgramming") {
        checkingPass = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
  
    if (checkingPass) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile("/");
    }   
})

app.listen(3000, (req, res) => {
    console.log((`Server running at port ${port}`));
})