const User = require('../models/User')

class UserController{
    async create(req, res){
        const {name, email, password} = req.body
        const userExists = await User.findOne({where: {email: email}})
    
        //passar validação para service
        if(!name || !email || !password){
            return res.status(400).send("Dados Inválidos")
        }
        if(userExists){
            return res.status(400).send("Usuário já cadastrado")
        }
    
        const newUser = await User.create({
            name: name,
            email: email,
            password: password
        })
        return res.status(200).json(newUser)
    }
}

module.exports = UserController