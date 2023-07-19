const { ObjectId, Collection } = require('mongodb')
const { Database } = require('../database/index')
const readXlsxFile = require('read-excel-file/node')
const COLLECTION = 'products'
const fs = require('fs');
const multer = require('multer');

// const { productsUtils } = require('./utils')

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
};
const create = async (products) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(products);
    return result.insertedId;
}
const createMultipleRegisters = async (products) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertmany(products);
    return result.insertedId;
}

const getClients = async () =>{

    const collection = await Database('clients');
    return await collection.find({}).toArray();
}



module.exports.ProductsService = {
    getAll,
    getClients,
    create
}