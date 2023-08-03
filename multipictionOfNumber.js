// 1 * 2 * 4 * 5 * 5 * 6 * 7
// function multipictionOfNumber(number) {
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const result = multipictionOfNumber(10);
// console.log(result);


// factorial  1-7
function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(7);
console.log(result);

