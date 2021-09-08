// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '3111111111111',
        make: 'porsche',
        model: 'panamera',
        mileage: 5000
    },

]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}