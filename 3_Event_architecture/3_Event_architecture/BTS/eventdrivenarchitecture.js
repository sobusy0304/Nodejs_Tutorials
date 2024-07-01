//create event
let events = require('events');

//create event emitter
let eventEmitter = new events.EventEmitter();

//create listener
eventEmitter.on('connection', () => {
    console.log('Connection Successful');
})
 
//fire the event
eventEmitter.emit('connection');