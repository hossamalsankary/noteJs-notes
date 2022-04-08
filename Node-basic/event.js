const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');

myEmitter.on('event', function(a, b) {
  console.log(a, b,  this === myEmitter);
 
});
//NOTES if we convert this to arro func this keyword will no longer reference the EventEmitter instance

myEmitter.emit('event', 'a', 'b');