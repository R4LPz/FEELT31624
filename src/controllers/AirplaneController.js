const Airplane = require('../models/Airplane')

class AirplaneController{
    async create(req,res){
        const {model, brand, seats} = req.body

        //passar validação para service
        if(!seats){
            return res.status(400).send("Dados Inválidos")
        }

        const newAirplane = await Airplane.create({
            model: model,
            brand: brand,
            seats: seats
        })
        return res.status(200).json(newAirplane)
    }
}

module.exports = AirplaneController