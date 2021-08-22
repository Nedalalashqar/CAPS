'use strict';

require('dotenv').config()

const events = require('../events')
require('./driver')
require('./vendor')

let date = new Date();
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
let time = date.toLocaleTimeString();

events.on('pickup', payload => {
    console.log('event:', {
        event: 'pickup',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload
    })
    events.emit('drivPickup', payload)
})
events.on('transit', payload => {
    console.log('event:', {
        event: 'transit',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload

    })
    events.emit('driverTransit', payload)
})
events.on('dileverd', payload => {
    console.log('event:', {
        event: 'Dileverd',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload
    })
    events.emit('drivDileverd', payload)
})

module.exports = events;




