const express = require('express')
const router = require('./routes')
const db = require('./config/database')


const app = express()


const conn = async ()=>{ 
    try {
        await db.sync();
        console.log('Conectado ao banco com sucesso');
    } catch (error) {
        console.log(error);
    }
};
conn();

app.use(express.json())
app.use(router)

module.exports = app;