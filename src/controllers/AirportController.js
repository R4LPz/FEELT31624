const Airport = require("../models/Airport")

exports.createAirport = async (req, res)=>{
    const {name, cnpj, location} = req.body
    const airportExists = await Airport.findOne({where: {cnpj: cnpj}})

    //migrar para service
    if(!name || !cnpj || !location){
        return res.status(400).send("Dados inválidos!")
    }
    if(airportExists){
        return res.status(400).send("Aeroporto já cadastrado!")
    }
    //validar cnpj

    const newAirport = await Airport.create({
        name: name,
        cnpj: cnpj,
        location: location
    })

    return newAirport 
    ? res.status(200).json(newAirport)
    : res.status(400).send("Falha ao criar o Aeroporto!")
}