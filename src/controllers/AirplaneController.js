const Airplane = require('../models/Airplane')

class AirplaneController{
    async create(req,res){
        const {chassis, model, brand, seats} = req.body
        const airplaneExists = await Airplane.findOne({where: {chassis: chassis}})

        //passar validação para service
        if(!chassis || !seats){
            return res.status(400).send("Dados Inválidos")
        }
        if(airplaneExists){
            return res.status(400).send("Airplane já cadastrada")
        }

        const newAirplane = Airplane.create({
            chassis: chassis,
            model: model,
            brand: brand,
            seats: seats
        })
        return res.status(200).json(newAirplane)
    }
}

module.exports = AirplaneController