//For Register Page
const createProductView = (req, res) => {
  res.render("createProduct", {
    }); 
  };

  const MultipleProductView = (req, res) => {
    res.render("createMultipleProduct", {
      }); 
    };
  
  module.exports = {
    createProductView,
    MultipleProductView
  };
  