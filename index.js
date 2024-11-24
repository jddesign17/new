const express = require("express");
const cors = require("cors");
const app = express();  

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {    

    res.send("Hello from backend");
});


const data = [
    {
        id:1,
        name: "John",
        age: 30 
    },
    {
        id:2,
        name: "Jane",
        age: 25 
    },
    {
        id:3,
        name: "Bob",
        age: 40
    }
]

app.get("/api", (req, res) => {    
    res.json({message: data});
});

app.listen(3001, () => console.log("Server running on port 3001")); 