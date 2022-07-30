require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
const posts = [
  {
    username: "ayoub",
    title: "post1",
  },
  {
    username: "bilal",
    title: "post2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});
app.get("/login", (req, res) => {
  // Authenticate User
  const username = req.body.username;

  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

//Run app, then load http://localhost:3000 in a browser to see the output.
