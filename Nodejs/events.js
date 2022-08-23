const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// customEmitter.emit //emit event
customEmitter.on('response',(data,secondData)=>{
    console.log('Received');
    console.log(data);
    console.log(secondData);
}) //listen for events
customEmitter.emit('response','Hello world',[1,2,3]);

