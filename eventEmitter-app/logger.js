const EventEmitter = require('events');
const { emit } = require('process');
//const emitter = new EventEmitter();  //now not required
 

class Logger extends EventEmitter {
    log(msg) {
        //Send an Http request
        console.log(msg);
    
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://abc'});
    
    }
}


module.exports = Logger;