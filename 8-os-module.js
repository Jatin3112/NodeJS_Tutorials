const os = require('os')

// Info about the current user

const user = os.userInfo();
console.log(user);


// This methods returns the system uptime in seconds

console.log(`System is running from ${os.uptime()} seconds`);


// Let's just know about our system much more 
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    freeMemory : os.freemem()
}

console.log(currentOS)

console.log(os);