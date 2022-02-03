const { Sequelize, Model } = require('sequelize')
const sequelize = require('../config/database')


class Flight extends Model{}

Flight.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
    }
},{ sequelize })

module.exports = Flight 