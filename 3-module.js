// Common JS, every file is a module (by Default)
// Modules - Encapsulated Code (only shares minimum) => This means that data will be what you want to be shared

// Requiring my modules from my local storage files
const names = require('./4-names')
const sayHi = require('./5-utils')


// When you import a module you invoke it thats why it is running without assigning to any constant
require('./7-mind-grenade')


sayHi("Jatin");

// Printing using shubham variable inside the names object
sayHi(names.shubham)