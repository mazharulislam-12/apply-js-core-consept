function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder === 0) {
        // console.log('Number is Even');
        return true;
    }
    else{
        // console.log('Number is Odd');
        return false;
    }
}
// isEven(30);
// isEven(223);
const mynumberIsEven = isEven(331);
console.log(mynumberIsEven);
const herNumberIsEven = isEven(310);
console.log(herNumberIsEven);