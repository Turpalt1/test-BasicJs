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

// invertCase.js
// Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный. Функция должна возвращать полученный результат
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
console.log(invertCase("Hello world! ds w"))