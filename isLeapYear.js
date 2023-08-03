// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         console.log(year, "is leap year");
//     }
//     else{
//         console.log(year,"is not leap year");
//     }
// }
// isLeapYear(2024);
// isLeapYear(1963);


// return function

function LeapYear(years) {
    const remainders = years % 4;
    if (remainders === 0) {
        return true;
    }
    else{
        return false;
    }
}
const isYearLeapYear = LeapYear(2020);
console.log("My year", isYearLeapYear);

const isHerLeapYear = LeapYear(2013);
console.log('Her year', isHerLeapYear);