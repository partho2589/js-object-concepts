const bottol = {
    color:'yellow',
    hold:'weter',
    price:50,
    isClears:true
};
// proparti all keys
const keys =Object.keys(bottol);
// console.log(keys)

// proparti all values
const values = Object.values(bottol)
// console.log(values)

// proparti keys and values of entries
const pairs = Object.entries(bottol)
// console.log(pairs)

// proparti scil

const scils = Object.seal(bottol)
// bottol.price = 100;
// console.log(scils)

// proparti delete 
delete bottol.isClears;
// console.log(bottol)

const freegs = Object.freeze(bottol)
// bottol.price = 366;
console.log(freegs)