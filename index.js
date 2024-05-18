// Task: "Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

// Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.

// isHappyTicket.js
// Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

const isHappyTicket = (num) => {
    let numToStr = String(num);
    let numLeft = 0;
    let numRight = 0;
    if(numToStr.length % 2 === 0){
        for(let i = 0; i < numToStr.length; i++){
            if(i < numToStr.length / 2){
                numLeft += +numToStr[i];
            }else{
                numRight += +numToStr[i];
            }
        }
    }else {
        return "enter an even number";
    }
    return numLeft === numRight;
}
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');  // true

// Task invertCase.js
// Реализуйте функцию, которая меняет в строке регистр каждой буквы на противоположный. Функция должна возвращать полученный результат
const invertCase = (str) => {
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            result += str[i].toLowerCase();
        }else{
            if(str[i] == str[i].toLowerCase()) result += str[i].toUpperCase();
        }
    }
    return result;
}
console.log(invertCase("Hello world! ds w"));
// Счастливые числа
// Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например, для числа 7 цепочка преобразований будет выглядеть так:

// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.
// Вывод: исходное число 7 - счастливое.

// isHappyNumber.js
// Реализуйте функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.
const isHappyNumber = (num) => {
    if(isNaN(num)) return "Not a number";
    let result = 0;
    let numToStr = String(num);
    let i = 0;
    while(result != 1 && i < 10){
        for(let i = 0; i < numToStr.length; i++){
            result += numToStr[i] ** 2;
        }
        numToStr = String(result);
        if(result != 1) result = 0;
        i++
    }
    return result == 1;
}
// Task:
// Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.
const fib = (num) => {
    let n = 0;
    let n1 = 1;
    let next = 0;
    if(num == 1) return 1;
    for(let i = 2; i <= num; i++){
        console.log(n,n1,next)
        next = n + n1;//
        n = n1;//1
        n1 = next;//1
    }
    return next
}
// const fib2 = (n) => {
//     if (n === 0) {
//       return 0;
//     } else if (n === 1) {
//       return 1;
//     } else {
//       let a = 0;
//       let b = 1;
//       let result;
//       for (let i = 2; i <= n; i++) {
//         result = a + b;
//         a = b;
//         b = result;
//       }
//       return result;
//     }
//   };

//Task: isPerfect number
const isPerfect = (n) => {
    let result = 0;
    for(let i = 1; i < n; i++){
        if(n % i == 0){
            result += i
        }
    }
    return result === n
}

//Task: reverseInt
const reverseInt = (n) => {
    if(n === 0) return 0;
    let result = "";
    let numToStr = String(n);
    let x = n > 0 ? 0 : 1;
    for(let i = numToStr.length -1; i >= x; i--){
            console.log(numToStr[i]);
            result += numToStr[i]; 
    }
    return x == 1 ? -result: +result;
}
fizzBuzz.js
// Реализуйте функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
const fizzBuzz = (begin,end) => {
    if(begin > end){
        return "begin more end"
    }else{
        for(let i = begin; i <= end; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz");
            }else if(i % 3 === 0){
                console.log("Fizz");
            }else if(i % 5 === 0){
                console.log("Buzz");
            }else{
                console.log(i)
            };
        }
    }
}
