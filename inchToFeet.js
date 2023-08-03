// const myInches = 12;
// const myFeet = myInches/12;
// console.log(myFeetj);

// const bigInch = 144;
// const bigFeet = bigInch / 12;
// console.log(bigFeet);


function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const bigInches = 144;
const bigFeet = inchToFeet(bigInches);
console.log(bigFeet);

const smallInch = 96;
const smallFeet = inchToFeet(smallInch);
console.log('small feet:', smallFeet); 