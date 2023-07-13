const debug = require('debug')("app:module-products-controller");
const { ProductsService } = require("./Service")
const cheerio = require('cheerio');
const mongoose = require('mongoose')
const products = require('../models/Products')
var fs = require('fs');

// const htmlProducto = require('../views/createProduct')
// const { Response } = require('../common/response');
// const { response } = require('express');
// const createError = require('http-errors')

module.exports.ProductsController = {

    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();

            return products
            // Response.success(res, 200, 'Lista de productos', products)
        } catch (error) {
            console.log(error)
        }
    },

    getClients: async (req,res) =>{
        try{
            let allClients = await ProductsService.getClients();
            // console.log(allClients)
            res.render("createProduct",{
                clientes: allClients
            });
        }catch(e){
            console.log(e)
        }
    },
    createProduct: async (req, res) => {
        try {
            const { body } = req;
            body.clientId = new mongoose.Types.ObjectId(body.clientId);
            if (!body || Object.keys(body).length === 0) {
                // Response.error(res, new createError.BadRequest());
                console.log("no se Interno nada")
            } else {
                await ProductsService.create(body);
                let allClients = await ProductsService.getClients();
                res.render("createProduct",{clientes: allClients})
            }
           
        } catch (error) {
            console.log(error)
        }
    },


    getProductByEmail: async (req, res) => {
        try {
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
            { $unwind: "$cliente" }

          ])
          console.log(resultado)
        } catch (error) {
            console.log(error)
        }
    },





    createMultipleProducts: async(req, res) =>{
        let lol = req.body
        console.log(__dirname)//Eliminar
        console.log(lol.file);
        try {
            let products = await ProductsService.createMultiple(lol.file);
            // res.render("tableStructure",{
            //     productos: products
            // });
            // Response.success(res, 200, 'Lista de productos', products)
        } catch (error) {
            console.log(error)
        }
    }
}