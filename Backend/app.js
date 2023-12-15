import express from "express";
import cors from "cors"

const app = express();
import mysql from "mysql";

app.use(cors());
app.set("view engine", "html");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const con = mysql.createConnection({
  user: "root",
  password: "web863540",
  database: "mydb"
})

app.post("/submit", async (req, res)=> {
  const item = req.body;
  const sql = "INSERT INTO comments (Comment, Author, UserId) VALUES (" + `"${item.Comment}", "${item.Author}", "${item.UserId}")`;
  await con.query(sql,  (err, result)=>{
    if(err) throw err;
    // console.log(result);
  })
  res.sendStatus(200);
});

app.get("/get", async(req, res)=> {
  const sql = "SELECT * FROM comments";
  con.query(sql, (err, result)=>{
    if(err) throw err;
    res.status(200).json(result);
  })
})


export default app;