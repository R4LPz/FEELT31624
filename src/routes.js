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

router.post("/user", user.create)
router.post("/airport", airport.create)
router.post("/airline", airline.create)
router.post("/flight", flight.create)
router.post("/airplane", airplane.create)


router.get("/test/:id", flight.get)

module.exports = router