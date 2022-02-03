const { Sequelize, Model} = require('sequelize')
const sequelize = require('../config/database')


class Airline extends Model{}

Airline.init({
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
}, { sequelize })

module.exports = Airline