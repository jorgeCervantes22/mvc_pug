const { ObjectId, Collection } = require('mongodb')
const { Database } = require('../database/index')
const readXlsxFile = require('read-excel-file/node')
const COLLECTION = 'products'
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

const getClients = async () =>{

    const collection = await Database('clients');
    return await collection.find({}).toArray();
}

const createMultiple = async (file) =>{
  readXlsxFile(file).then((rows)=>{

  })
    // const input = document.getElementById('file')
    // input.addEventListener('change', () => {
    //   readXlsxFile(input.files[0]).then((rows) => {
    //     console.log(rows)
        // `rows` is an array of rows
        // each row being an array of cells.
    //   })
    // })
    
    // // Blob.
    // fetch('https://example.com/spreadsheet.xlsx')
    //   .then(response => response.blob())
    //   .then(blob => readXlsxFile(blob))
    //   .then((rows) => {
    //     // `rows` is an array of rows
    //     // each row being an array of cells.
    //   })
    
    // // ArrayBuffer.
    // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
    // //
    // // Could be obtained from:
    // // * File
    // // * Blob
    // // * Base64 string
    // //
    // readXlsxFile(arrayBuffer).then((rows) => {
    //   // `rows` is an array of rows
    //   // each row being an array of cells.
    // })
}

// const getById = async (id) => {
//     const collection = await Database(COLLECTION);
//     return await collection.findOne({ _id: ObjectId(id) });
// }
// const getByName = async (name) => {
//     const collection = await Database(COLLECTION);
//     return await collection.findOne({name: name});
// }
// const create = async (products) => {
//     const collection = await Database(COLLECTION);
//     let result = await collection.insertOne(products);
//     return result.insertedId;
// }

// const generateReport = async (name, res) => {
//     let products = await getAll()
//     productsUtils.excelGenerate(products, name, res)
// }

// const updateById = async (product) => {
//     // console.log(product)
//     const collection = await Database(COLLECTION);
//     let filter = {_id: ObjectId(product._id)}
//     let update = {$set: {name: product.name, price: product.price, cantidad: product.cantidad}}
//     await collection.updateOne(filter,update)
//     return await collection.findOne({ _id: ObjectId(product._id) });
// }
// const updateByName = async (product) => {
//     const collection = await Database(COLLECTION);
//     let lol = await collection.findOne({ name: product.nameProduct });
//     resultado = lol.cantidad - product.cantidad;
//     console.log(resultado);
//     let filter = {name: product.nameProduct}
//     let update = {$set: {cantidad: resultado}}
//     await collection.updateOne(filter,update)   
//     return '';

//     // let filter = {name: product.nameProduct}
    
//     // console.log(productos)
//     // // let update = {$set: product.cantidad}
//     // // await collection.updateOne(filter,update)
//     // return await collection.findOne({ name: ObjectId(product.name) });
// }
// const deleteById = async (id) =>{
//     const collection = await Database(COLLECTION);
//     let producto = await getById(id)
//     if(producto){
//     await collection.deleteOne(producto)
//     return collection;
//     }else{
//         return null
//     }
// }

module.exports.ProductsService = {
    getAll,
    createMultiple,
    getClients,
    // getById,
    // getByName,
    create,
    // generateReport,
    // updateById,
    // updateByName,
    // deleteById
}