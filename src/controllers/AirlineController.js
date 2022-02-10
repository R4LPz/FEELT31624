const Airline = require("../models/Airline")
const Airport = require("../models/Airport")

class AirlineController{
    async create(req, res){
        const {name, cnpj, airports} = req.body
        const airlineExists = await Airline.findOne({where: {cnpj: cnpj}})

        if(!name || !cnpj || !airports){
            return res.status(400).send("Dados inválidos!")
        }
        if(airlineExists){
            return res.status(400).send("Airline já existe!")
        }
        
        const newAirline = await Airline.create({
            name: name,
            cnpj: cnpj
        })

        if(airports.length > 0){
            for (let i = 0; i < airports.length; i++) {
                newAirline.addAirport(await Airport.findOne({where: {id: airports[i]}}))
            }
        }

        return newAirline
        ? res.status(200).json(newAirline)
        : res.status(400).send("Falha ao criar a Airline")
    }

    async update(req,res){
        const id = req.params.id
        const {name, cnpj, airports} = req.body

        //validar campos
        
        const airlineUpdated = await Airline.update({
            name: name,
            cnpj: cnpj,
        }, {where: {id:id}})
        
        const airline = await Airline.findByPk(id)
        
        if(airports.length > 0){
            for (let i = 0; i < airports.length; i++) {
                airline.addAirport(await Airport.findOne({where: {id: airports[i]}}))
            }
        }
        return res.status(200).json(airlineUpdated)
    }

    async delete(req,res){
        const id = req.params.id
        
        const data = await Airline.destroy({where: {id:id}})

        return res.status(200).json(data)
    }

    async listByAirport(req,res){
        const id = req.params.id
        console.log(id)

        const list = await Airline.findAll({
            include: {
                model: Airport, 
                where: {
                    id:id
                }
            }
        })
        return res.status(200).json(list)
    }
    
    async listById(req,res){
        const id = req.params.id

        const airline = await Airline.findByPk(id)

        return !airline 
        ? res.sstatus(400).send("Airline não encontrada") 
        : res.status(200).json(airline)
    }    
}

module.exports = AirlineController