const { Sequelize, Model } = require('sequelize')
const sequelize = require('../config/database')


class Airport extends Model{}

Airport.init({
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
}, { sequelize })

module.exports = Airport