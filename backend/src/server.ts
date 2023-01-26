import express from "express";
import cors from "cors";
import { sample_gems, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/gems", (req, res) => {
    res.send(sample_gems);
})

app.get("/api/gems/search/:searchTerm", (req, res) => {
    const searchTerm  = req.params.searchTerm;
    const gems = sample_gems
    .filter(gem => gem.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(gems);
  })

  app.get("/api/gems/tags", (req, res) => {
    res.send(sample_tags);
  })

  app.get("/api/gems/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const gems = sample_gems
    .filter(gem => gem.tags?.includes(tagName));
    res.send(gems);
  })

  app.get("/api/gems/:gemId", (req, res) => {
    const gemId = req.params.gemId;
    const gem = sample_gems.find(gem => gem.id == gemId);
    res.send(gem);
  })

  app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
      && user.password === password);
      if(user ) {
        res.send(generateTokenReponse(user));
       }
      else
      {
        res.status(400).send("User name or password not valid!");
      }
  })

  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})