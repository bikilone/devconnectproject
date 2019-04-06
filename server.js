const express = require("express");
const mongoose = require("mongoose");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");

const app = express();

const db = require("./config/api/keys").mongoURI;
// db connect
mongoose
  .connect(db)
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started on port ${port}`));
