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
  const sql_comments = "INSERT INTO comments (Comment, Author, UserId) VALUES (" + `"${item.Comment}", "${item.Author}", "${item.UserId}")`;
  const sql_profilePicture = "INSERT INTO profiles (UserId, Picture) VALUES (" + `"${item.UserId}", "${item.url}"),`;
  con.query(sql_comments,  (err, result)=>{
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

app.get("/pic", async(req, res)=> {
  const sql = "SELECT Picture FROM profilePicture WHERE UserId = '6633162223'";
  con.query(sql, (err, result)=>{
    if(err) throw err;
    const decode = Buffer.from(result[0].Picture, 'base64');
    // console.log(result);
    // console.log(decode);
    res.send(decode);
  })
})

function encode (url){
  
}


export default app;