// npm - Global command that comes with node 
// npm --v => To check the version of npm 


// Local dependency =>  It is only used in the particular project
// npm i <package name>  =>  To install a package


// Global dependency => It can be used in any project 
// npm i -g <package name>


// Lodash Package is used to perform actions on the array

const lodash = require('lodash')


const arr = [1,[2,[3,[4]]]]


// It will flatten the array till the end
const flattenArr = lodash.flattenDeep(arr)

console.log(flattenArr);