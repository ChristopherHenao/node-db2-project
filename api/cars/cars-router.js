const express = require('express')
const Cars = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const cars = await Cars.getAll()
    try {
        res.json(cars)
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const car = await Cars.create(req.body)
        res.json(car)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router