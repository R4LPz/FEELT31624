const { Sequelize, Model} = require('sequelize')
const sequelize = require('../config/database')
const Airport = require('./Airport')
const Flight = require('./Flight')


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
}, { 
    sequelize,
    modelName: 'airlines'
})

Airline.hasMany(Flight)
Flight.belongsTo(Airline)

Airline.belongsToMany(Airport, {through: 'airline_airport'})
Airport.belongsToMany(Airline, {through: 'airline_airport'})

module.exports = Airline