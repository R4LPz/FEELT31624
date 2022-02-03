const Flight = require("../models/Flight")

exports.createFlight = async (req, res)=>{
    const {date, price} = req.body
    const flightExists = await Airline.findOne({where: {cnpj: cnpj}})

    if(!date || !price){
        return res.status(400).send("Dados inválidos!")
    }
    if(flightExists){
        return res.status(400).send("Flight já existe!")
    }

    const newFlight = await Flight.create({
        date: date,
        price: price
    })

    return newFlight
    ? res.status(200).json(newFlight)
    : res.status(400).send("Falha ao criar a Flight")
}