const Client = require("../models/Clients")
const swal = require('sweetalert')
//For Register Page
const ClientView = async (req, res) => {

  res.render("createClient", { success_client: false, bandera: false });
};

//Post Request for Register

const registerClient = async (req, res) => {
  const { name, email, telefono, direccion, } = req.body;
  // const body = req.body

  if (!name || !email || !telefono || !direccion) {

    console.log("Fill empty fields");
  }

  //Validation
  await Client.findOne({ email: email }).then((client) => {
    if (client) {
      console.log("email exists");
      res.render("createClient", { bandera: true, success_client: false })
    } else {
      // //Validation
      const newClient = new Client({
        name,
        telefono,
        email,
        direccion,

      });
      console.log('Usuario creado correctamente');

      if (newClient) {
        newClient
          .save()
          .then(res.render("createClient", { success_client: true, bandera: false }))
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