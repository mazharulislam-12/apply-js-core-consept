function getOddNumberOfAnArray(numbers) {
    
    const oddNumber = [];
    for(let i = 0; i <numbers.length; i++){
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
const myNumber = [12, 86, 63, 98, 45, 96, 23];
const oddNumber = getOddNumberOfAnArray(myNumber);
console.log(oddNumber);
getSumOfAnArray(myNumber);