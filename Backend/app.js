import express from "express";
import cors from "cors"

const app = express();
import mysql from "mysql";

app.use(cors());
app.set("view engine", "html");
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))

const con = mysql.createConnection({
  user: "root",
  password: "web863540",
  database: "mydb"
})

app.post("/submit", async (req, res)=> {
  const item = req.body;
  const sql_comments = `INSERT INTO comments (Comment, Author, UserId) VALUES ("${item.Comment}", "${item.Author}", "${item.UserId}")`;
  const sql_profilePicture = `INSERT INTO profiles (UserId, Picture) VALUES ("${item.UserId}", ?) ON DUPLICATE KEY UPDATE Picture = ?`;
  con.query(sql_comments,  (err, result)=>{
    if(err) throw err;
  })
  con.query(sql_profilePicture, [item.Picture, item.Picture], (err, result)=>{
    if(err) throw err;
  })
  res.sendStatus(200);
});

app.get("/get", async(req, res)=> {
  const sql = `SELECT * FROM comments INNER JOIN profiles ON comments.UserId = profiles.UserId`;
  con.query(sql, (err, result)=>{
    if(err) throw err;
    for(let item of result){
      item.Picture = Buffer(item.Picture).toString();
    }
    res.status(200).json(result);
  })
})

app.put("/update", async(req, res)=>{
  const item = req.body;
  const sql = `UPDATE comments SET Comment = "${item.Comment}" WHERE Id="${item.Id}"`
  con.query(sql, (err, result)=>{
    if(err) throw err;
  })
})

app.put("/like", async(req, res)=>{
  const item = req.body;
  const sql = `UPDATE comments SET LikeCount = LikeCount + 1 WHERE Id="${item.Id}"`
  con.query(sql, (err, result)=>{
    if(err) throw err;
  })
})


export default app;