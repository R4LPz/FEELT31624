const Airline = require("../models/Airline")
const Airport = require("../models/Airport")

class AirlineController{
    async create(req, res){
        const {name, cnpj, airports} = req.body
        const airlineExists = await Airline.findOne({where: {cnpj: cnpj}})

        //migrar para service
        if(!name || !cnpj || !airports){
            return res.status(400).send("Dados inválidos!")
        }
        if(airlineExists){
            return res.status(400).send("Airline já existe!")
        }
        //validar se o cnpj é valido
        
        const newAirline = await Airline.create({
            name: name,
            cnpj: cnpj
        })
        //migrar para service (add airports)

        if(airports.length > 0){
            for (let i = 0; i < airports.length; i++) {
                newAirline.addAirport(await Airport.findOne({where: {id: airports[i]}}))
            }
        }


        
        //newAirline.addAirport(airport)
        
        return newAirline
        ? res.status(200).json(newAirline)
        : res.status(400).send("Falha ao criar a Airline")
    }

    async listById(req,res){
        const id = req.params.id
        const airport = await Airport.findAll({where: {id: id}, include: Airline})

        return res.status(200).json(airport)
    }
}

module.exports = AirlineController