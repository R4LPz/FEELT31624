const Airline = require("../models/Airline")
const Airplane = require("../models/Airplane")
const Flight = require("../models/Flight")

class FlightController{
    async create(req, res){
        const {date, price, airline, airplane} = req.body
        
        //migrar para service
        if(!date || !price || !airline || !airplane){
            return res.status(400).send("Dados inválidos!")
        }

    
        const newFlight = await Flight.create({
            date: date,
            price: price,
            airlineId: airline,
            airplaneId: airplane
        })

        return newFlight
        ? res.status(200).json(newFlight)
        : res.status(400).send("Falha ao criar a Flight")
    }
    async get(req, res){
        const data = req.params.id

        const teste = await Flight.findAll({where: {id: data}, include: [Airplane,Airline]})
        return res.status(200).json(teste)
    }
}
module.exports = FlightController