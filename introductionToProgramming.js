const withoutTwoZero = (n1,n2) => {
    if(n2 > 0 && n1 === 0) return 1;
    if(n1 > 0 && n2 === 0) return 0;
    let str = "0".repeat(n1) + "1".repeat(n2);
    let arr = str.split("");
    let lineZero = 0;
    for(let i = 0; i < n1; i++){
        lineZero += n2 - i;
    };
    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "0"){
            for(let j = 0; j < str.length; j++){
                if(str[-j] !== "0" && str[j + 1] !== "0") result++;
                }
        }//001111-7
    }
    console.log(lineZero)
}
console.log(withoutTwoZero(2,5))

// Task: angle difference
const diff = (n1,n2) => (n1 - n2) < 0 ? -(n1 - n2) : (n1 - n2);

//Task: DNA -> RNA
const dnaToRna = (str) => {
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === "A"){
            result += "U";
        }else if(str[i] === "C") {
            result += "G";
        }else if(str[i] === "G") {
            result += "C";
        }else if(str[i] === "T") {
            result += "A";
        } else {
            return null
        }
    }
    return result;
}
console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null

// Task: formattedTime
// Реализуйте функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит 24 часа (1 сутки) либо больше, то функция возвращает время, прошедшее с полуночи последних суток.
const formattedTime = (num) => {
    let formula = Math.floor(num / 60);
    let hours = (formula) >= 24 ? formula - 24: formula ;
    let minuts = Math.round((num / 60 - formula) * 60);
    let strH = hours < 10 ? `0${hours}:`:`${hours}:`;
    let strM = minuts < 10 ? `0${minuts}`:`${minuts}`;
    return strH + strM;
}
formattedTime(5);     // 00:05
formattedTime(60);    // 01:00
formattedTime(175);   // 02:55
formattedTime(600);   // 10:00
formattedTime(1440);  // 00:00
formattedTime(1504);  // 01:04

// Task:
// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
const sumSquareDifference = (n) => {
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i ** 2;
    }
    return result;
}

// Task: function ackerman
const ackermann = (m,n) => {
    if(m == 0){
        return n + 1
    }else if( m > 0 && n == 0){
        return ackermann(m - 1, 1)
    }else if( m > 0 && n > 0){
        return ackermann(m - 1, ackermann(m,n - 1))
    }
}
// Task: isPowerOfThree
// Реализуйте функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 1 – это нулевая степень (считаем ноль натуральным числом): 3^0, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
const isPowerOfThree = (num) => {
    for(let i = 0; i < 20; i++){
        if(3 ** i === num) return true;
        if(i > num) return false;
    }
    return false;
}