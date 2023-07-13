const passport = require("passport");
const User = require("../models/User");
const Client = require("../models/Clients")
const bcrypt = require("bcryptjs");
const { Database } = require("../database");
const Clients = require("../models/Clients");
const { name } = require("ejs");
const COLLECTION = 'clients'


//For Register Page
const ClientView = async (req, res) => {
  res.render("createClient", {});
};

//Post Request for Register

const registerClient = async (req, res) => {
  const { name, email, telefono ,direccion,  } = req.body;
  const body = req.body

  if (!name || !email|| !telefono || !direccion) {
    console.log("Fill empty fields");
  }

    //Validation
    await Client.findOne({ email: email }).then((client) => {
      if (client) {
        console.log("email exists"); 
        return//saltar alerta indicando que ya existe el cliente
        
      } else {

        // //Validation
        const newClient = new Client({
          name,
          telefono,
          email,
          direccion,
          
        });
        console.log('Usuario creado correctamente');
        if(newClient){
          newClient
          .save()
          .then(res.redirect("/dashboard"))
          .catch((err) => console.log(err));
        }
      }
    });
  };

// For View
// const loginView = (req, res) => {
//   res.render("login", {});
// };

//Logging in Function

module.exports = {
  ClientView,
  registerClient,
};