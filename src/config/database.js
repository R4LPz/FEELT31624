const Sequelize = require('sequelize')
const env = require('dotenv')

env.config()

const sequelize = new Sequelize(process.env.DB_URL)



module.exports = sequelize