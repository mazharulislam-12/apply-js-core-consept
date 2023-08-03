function getSumOfAnArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element, sum);
    }
    return sum;
}
const myNumber = [12, 86, 63, 98, 45, 96, 23];
getSumOfAnArray(myNumber);