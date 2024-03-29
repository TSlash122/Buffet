const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "loachost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/login', (req, res) => {
    const sql ="SELECT * FROM login WHERE 'email' = ? AND 'password' = ?";
    db.query(sql, [req.body.email,req.body.password ], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        }else{
            return res.json("Failure");
        }
    })    
})
app.listen(8081, ()=>{
    console.log("listening");
})