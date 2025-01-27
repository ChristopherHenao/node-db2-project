const Cars = require('./cars-model')
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const car = await Cars.getById(req.params.id)
  try {
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found`})
    }
    else {
      req.car = car
      next()
    }
  }
  catch (error) {
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  try {
    if (!vin) {
      next({ status: 400, message: 'vin is missing'})
    }
    else if (!make) {
      next({ status: 400, message: 'make is missing'})
    }
    else if (!model) {
      next({ status: 400, message: 'model is missing'})
    }
    else if (!mileage) {
      next({ status: 400, message: 'mileage is missing'})
    }
    else {
      next()
    }
  }
  catch (error) {
    next(error)
  }
}


const checkVinNumberValid = (req, res, next) => {
  try {
    if (vin.validate(req.body.vin)) {
      next()
    }
    else {
      next({ status: 400, message: `vin ${req.body.vin} is invalid` })
    }
  }
  catch (error) {
    next(error)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await Cars.getByVin(req.body.vin)
    if (!existing) {
      next()
    }
    else {
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    }
  } 
  catch (error) {
    next(error)
  }
}


module.exports = { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique }