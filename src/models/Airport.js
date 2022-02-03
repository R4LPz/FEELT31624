const db = require('../config/database')
const Sequelize = require('sequelize')

const Airport = db.define('airports', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cnpj:{
        type: Sequelize.BIGINT,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    location:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Airport