const express = require('express')
const Cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')

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

router.get('/:id', checkCarId, (req, res, next) => {
    try {
        res.json(req.car)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', (req, res, next) => {
    try {

    }
    catch (error) {
        next(error)
    }
})

module.exports = router