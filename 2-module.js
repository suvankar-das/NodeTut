const { convertToDate } = require('./Utils')
const { data } = require('./data')
//module -- encapsulated code, only share minimum


// call this from App.js
const welComeMessage = (name) => {
    let a = convertToDate();
    if (data.hasOwnProperty(name)) {
        console.log(`Welcome ${data[name].name} and ${data[name].age} ${a}`);
    } else {
        console.log(`Welcome ${name} ${a}`);
    }

}



// if multiple exports use below syntax
module.exports = {
    sayHello: welComeMessage
}


// if single exports
//module.exports.sayHello = welComeMessage;
