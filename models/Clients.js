const mongoose = require("mongoose");
const ClientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  // products: {
  //   type: mongoose.Types.ObjectId,
  //   required: true,
  // },  
},
{
    timestamps:true,
    versionKey: false
});
const Clients = mongoose.model("clients", ClientsSchema);
module.exports = Clients;