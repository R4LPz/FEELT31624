const db = require('../config/database')
const Sequelize = require('sequelize')


const Flight = db.define('flights', {
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
})

module.exports = Flight