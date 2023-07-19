const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require("passport");
const path = require('path')
const { loginCheck } = require("./auth/passport");
dotenv.config();

loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

  app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");

//BodyParsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
app.use(flash())
  

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", require("./routes/login"));
app.use("/", require("./routes/crud"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));

app.use(express.static(path.join(__dirname, "js")));