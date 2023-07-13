const { MongoClient } = require('mongodb');
// const debug = require('debug')('app:module-database');
const { config } = require('../config/index')
var connection = null;
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if (!connection) {
            const client = new MongoClient(config.mongoUri);
            //Falla
            connection = await client.connect();
            const db = connection.db(config.mongoName);
            console.log(`Nueva Conexion Establecida...`);
            resolve(db.collection(collection))
        }else{
        console.log(`Reutilizando Conexion`)
        const db = connection.db(config.mongoName);
        resolve(db.collection(collection))
    }} catch (error) {
        reject(error);
    }
})


