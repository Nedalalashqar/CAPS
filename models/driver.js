'use strict';

const events = require('../events');

events.on('driverPickup', payload => {
    setTimeout(() => {
        console.log(`DRIVER: pickedup ${payload.orderID}`);
        events.emit('transit', payload)
    }, 1000)
});
events.on('driverTransit', payload => {
    setTimeout(() => {
        console.log(`DRIVER: deliveredup ${payload.orderID}`);
        events.emit('driverDileverd', payload)
    }, 3000);
})

module.exports = events
