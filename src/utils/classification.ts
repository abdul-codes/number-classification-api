export function classifyNumber(num: number) {
    return {
        isPrime: isPrime(num),
        isPerfect: isPerfect(num),
        properties: getProperties(num),
        digitSum: getDigitalSum(num)
    }
}

function isPrime(num: number) {
    // Numbers less than 2 are not prime 
    if (num < 2) return false;

    // Check for divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by i, it's not a prime number
        if (num % i === 0) return false;
    }

    // If no divisors found, the number is prime
    return true;
}

function isPerfect(num: number) {
    // Handle edge cases
    if (num <= 1) return false;

    // Find all proper divisors and sum them
    let divisorSum = 1; // Start with 1 as it's always a divisor

    // We only need to check up to sqrt(num) to find all divisors
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisorSum += i;
            // If i is not the square root, add the corresponding pair divisor
            if (i !== num / i) {
                divisorSum += num / i;
            }
        }
    }

    // A number is perfect if it equals the sum of its proper divisors
    return divisorSum === num;
}

function getProperties(num: number) {
    // Array to store the number's properties
    const properties: string[] = []

    // Check if number is Armstrong (sum of its digits raised to power equals itself)
    if (isArmstrong(num)) properties.push('armstrong')

    // Check if number is even 
    if (num % 2 === 0) properties.push('even')
     // Check if number is  odd 
    if (num % 2 !== 0) properties.push('odd')

    return properties
}

function isArmstrong(num: number): boolean {
    // 
    const absoluteNum = Math.abs(num);

    // Convert number to array of digit strings
    const digits = String(absoluteNum).split('');
    
    // Calculate sum of each digit raised to power of number of digits
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
    
    // Number is Armstrong if sum equals original number
    return sum === absoluteNum;
}


function getDigitalSum(num: number): number {
     // Handle negative numbers by taking their absolute value
     const absoluteNum = Math.abs(num);

    // Convert number to string to process each digit
    const digits = String(absoluteNum).split('');
    
    // Sum all digits
    return digits.reduce((sum, digit) => sum + Number(digit), 0);

}
