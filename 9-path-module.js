const path = require('path');


// prints the separator used in your system
// console.log(path.sep)


// It gives the absolute path of the file that you want to access locally
const absolutePath = path.resolve(__dirname,'utils.js');

// To get the file extension
const ext = path.extname('utils.js')

console.log(ext);
console.log(absolutePath);


// Remember path module is used to play around path of the files - getting the path , joining (path.join)

// And for other different things look more inside path module