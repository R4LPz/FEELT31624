const Sequelize = require('sequelize')
const db = require('../config/database')


const Airline = db.define('airlines',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: Sequelize.BIGINT,
        allowNull: false
    }
})

module.exports = Airline