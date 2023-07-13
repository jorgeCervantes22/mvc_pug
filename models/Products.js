const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  clientId:{
    type: mongoose.Types.ObjectId,
    required: true,
  }
},
{
    timestamps: true,
});
const Products = mongoose.model("products", ProductsSchema);
module.exports = Products;