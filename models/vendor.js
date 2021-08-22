'use strict';

require('dotenv').config();
const faker = require('faker');
const events = require('../events');

setInterval(() => {
    setTimeout(() => {
        let cusOrder = {
            storeName: process.env.STORENAME || 'Nedal',
            orderID: faker.datatype.uuid(),             
            customerName: faker.name.findName(),        
            address: faker.address.streetAddress()      
        }
        events.emit('pickup', cusOrder) 
    }, 5000);
}, 5000);
events.on('venDileverd', payload => {
    console.log(`Thanks you delevering ${payload.orderID}`);
    events.emit('deleverd', payload)
})

module.exports = events;
