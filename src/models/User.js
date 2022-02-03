const { Sequelize, Model } = require('sequelize');
const sequelize = require('../config/database')
 

class User extends Model{}

User.init({
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, { sequelize })

module.exports = User;