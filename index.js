let moment=require('moment');
let lodash=require('lodash')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));

let characters=['a','b','c','d'];

let chunked=lodash.chunk(characters,2);

console.log(chunked);