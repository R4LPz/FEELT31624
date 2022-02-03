const { Router } = require('express')
const {createUser}  = require('./controllers/UserController')
const {createAirport} = require('./controllers/AirportController')
const {createAirline} = require('./controllers/AirlineController')
const {createFlight} = require('./controllers/FlightController')
const {createAirplane} = require('./controllers/AirplaneController')


const router = Router();

router.post("/user", createUser)
router.post("/airport", createAirport)
router.post("/airline", createAirline)
router.post("/flight", createFlight)
router.post("/airplane", createAirplane)
module.exports = router