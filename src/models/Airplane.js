const { Sequelize, Model }  = require('sequelize')
const sequelize = require('../config/database');
const Flight = require('./Flight');


class Airplane extends Model{}
 
Airplane.init({
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
}, { 
    sequelize,
    modelName: 'airplanes'
})

Airplane.hasMany(Flight)
Flight.belongsTo(Airplane)

module.exports = Airplane;