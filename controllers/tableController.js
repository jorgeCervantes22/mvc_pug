const { ProductsService } = require('../Products/Service');
const { all } = require('../routes/crud');
const mongoose = require('mongoose')
const products = require('../models/Products')



const tableView = async (req, res) => {
  try {
    let allClients = await ProductsService.getClients();
    // console.log(allClients)
    res.render("tableStructure",{clientes: allClients})
  } catch (e) {
    console.log(e)
  }
}

const tableViewPost = async (req, res) => {
  try {
    let body = req.body;
    body.clientId = new mongoose.Types.ObjectId(body.clientId);
    // let allClients = await ProductsService.getClients();
    // let allClients = await ProductsService.getAll();


      const resultado = await products.aggregate([
        {
            $lookup:
            {
                from:"clients",
                localField:"clientId",
                foreignField:"_id",
                as:"cliente"
            }
        },
        { $unwind: "$cliente" },
        { $match: {clientId: body.clientId}}

      ])
      console.log(resultado)

    res.render("productsTable", {productos: resultado});
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  tableView,
  tableViewPost
};