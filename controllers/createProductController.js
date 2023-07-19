//For Register Page
const createProductView = (req, res) => {
  res.render("createProduct", {
    }); 
  };

  // const MultipleProductView = async (req, res) => {
  //   try {
  //     let allClients = await ProductsService.getClients();
  //     // console.log(allClients)
  //     res.render("createMultipleProduct", {
  //         clientes: allClients
  //     });
  // } catch (e) {
  //     console.log(e)
  // }
  // }
  
  module.exports = {
    createProductView,
    // MultipleProductView
  };
  