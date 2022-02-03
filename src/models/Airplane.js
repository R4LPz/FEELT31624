const Sequelize  = require('sequelize')
const db = require('../config/database')
 
const Airplane = db.define('airplanes', {
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
})

module.exports = Airplane;