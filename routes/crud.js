const express = require('express');
const { tableView , tableViewPost} = require('../controllers/tableController')
const { createProductView ,MultipleProductView, } = require('../controllers/createProductController')
const { protectRoute } = require("../auth/protect");
const  {ProductsController} = require ("../Products/Controller")
const {ClientView, registerClient}  = require("../controllers/clientController.js")

const router = express.Router();

router.get("/tableStructure", protectRoute,tableView)
router.post("/tableStructure", protectRoute,tableViewPost)

router.get("/products", protectRoute, ProductsController.getProducts)
router.get("/createProduct", protectRoute, ProductsController.getClients)


router.post("/createProduct", protectRoute, ProductsController.createProduct)

router.get("/createMultipleProduct", protectRoute, MultipleProductView)
router.post("/createMultipleProduct", protectRoute, ProductsController.createMultipleProducts)

router.get("/createClient", protectRoute, ClientView)
router.post("/createClient", protectRoute, registerClient)

module.exports = router;