const express = require("express");
const mongoose = require("mongoose");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
// db connect
mongoose
  .connect(db)
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));


// passport midleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport)


app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started on port ${port}`));
