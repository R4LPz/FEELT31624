const { Sequelize, Model }  = require('sequelize')
const sequelize = require('../config/database')


class Airplane extends Model{}
 
Airplane.init({
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    chassis: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
    },
    brand:{
        type: Sequelize.STRING,
    },
    seats: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { sequelize })

module.exports = Airplane;