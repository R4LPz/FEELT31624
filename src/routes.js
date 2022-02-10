const { Router } = require('express')
const UserController  = require('./controllers/UserController')
const AirportController = require('./controllers/AirportController')
const AirlineController = require('./controllers/AirlineController')
const FlightController= require('./controllers/FlightController')
const AirplaneController = require('./controllers/AirplaneController')

const user = new UserController()
const airport = new AirportController()
const airline = new AirlineController()
const flight = new FlightController()
const airplane = new AirplaneController()

const router = Router();

//User Routes
router.post("/user", user.create)
//router.patch("/user/:id")
//router.delete("/user/:id")
//router.get("/user/listById")

//Airport Routes
router.post("/airport", airport.create)
//router.patch("/airport/:id")
//router.delete("/airport/:id")
//router.get("/airport/:id")
//router.get("/airport/listAirlines")
//router.get("/airport/listFlights")
//router.get("/airport/listByLocation")

//Airplane Routes
router.post("/airplane", airplane.create)
//router.patch("/airplane/:id")
//router.delete("/airplane/:id")
//router.get("/airplane/:id")
//router.get("/airplane/listByAirline")
//router.get("/airplane/listByModel")
//router.get("/airplane/listByBrand")

//Flight Routes
router.post("/flight", flight.create)
//router.patch("/flight/:id")
//router.delete("/flight/:id")
//router.get("/flight/:id")
//router.get("/flight/listByDate")
//router.get("/flight/listByAirline")
//router.get("/flight/listByAirport")
//router.get("/flight/listByCapacity")

//Airlines Routes
router.post("/airline", airline.create)
router.patch("/airline/:id", airline.update)
router.delete("/airline/:id", airline.delete)
router.get('/airline/listByAirport/:id', airline.listByAirport)
router.get('/airline/listById/:id', airline.listByAirport)
//router.get('/airline/listByLocation/:id', airline.listByAirport)

module.exports = router