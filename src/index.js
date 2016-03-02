let a = () => {
    console.log('this is a func');
}

let less = require('./index.less');
console.log(less);
module.exports = a;
