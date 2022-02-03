const Airline = require("../models/Airline")

exports.createAirline = async (req, res)=>{
    const {name, cnpj} = req.body
    const airlineExists = await Airline.findOne({where: {cnpj: cnpj}})

    if(!name || !cnpj){
        return res.status(400).send("Dados inválidos!")
    }
    if(airlineExists){
        return res.status(400).send("Airline já existe!")
    }

    const newAirline = await Airline.create({
        name: name,
        cnpj: cnpj
    })

    return newAirline
    ? res.status(200).json(newAirline)
    : res.status(400).send("Falha ao criar a Airline")
}