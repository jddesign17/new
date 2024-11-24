const express = require("express");
const cors = require("cors");
const app = express();  

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {    

    res.send("Hello from backend");
});

app.listen(3001, () => console.log("Server running on port 3001")); 