const EventEmitter = require('events')
const uuid = require('uuid')
console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;

// const logger = new Logger()



// ________________________________________below the ------ goes into index.js file

// const Person = require("./person")

// const person = new Person("slim shady", 22)

// person.greet()

// console.log("fuck you kyle and " + person.name)


// -----------------------------------------
// const Logger = require('./logger')


// const logger = new Logger()

// logger.on('message', (data) => console.log(`Called Listener `, data))

// logger.log('piss off mate')