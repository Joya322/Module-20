function oddSum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 != 0) {
            sum = sum + numbers[i];
        }
    }
    return sum;
}

let numbers = [5, 7, 8, 10, 45, 30];
let sumOfOddNumbers = oddSum(numbers);
console.log(sumOfOddNumbers);