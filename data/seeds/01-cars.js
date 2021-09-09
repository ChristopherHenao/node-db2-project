// STRETCH
const cars = [
    {
        vin: 'WAUYGAFC6CN174200',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3C3CFFCR7CT272159',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: 'WP0CA29972S650104',
        make: 'porsche',
        model: 'panamera',
        mileage: 5000
    },

]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}