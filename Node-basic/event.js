const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/*
emit is used to trigger an event
on  is used to add a callback function that's going to be executed when the event is triggered */
eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");
