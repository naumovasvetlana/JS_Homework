// Напишите валидационный скрипт используя функции
//
// 1. Скрипт должен на вход принимать строку.
// 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
// 5. В строке должны быть буквы
// 6. Должна быть хотя бы одна буква в верхнем регистре
// 7. Должна быть хотя бы одна цифра
// 8. Должна быть хотя бы одна @
//     9. Строка не должна быть пустой


function Lenght(input){
    const length = input.length >= 5 && input.length <=64;
    if (length) {
        console.log('Well! Length of the string is in the range 5-64');
    } else
        console.log('Error! Length of the string is not in the range 5-64');
}

function Letters(input){
    const letters = /[a-zа-яё]/.test(input);
    if (letters) {
        console.log('Well! There are letters in the string');
    } else
        console.log('Error! There are not letters in the string');
}

function UpLetter(input){
    const letterUpper = /[A-ZА-ЯЁ]/.test(input);
    if (letterUpper) {
        console.log('Well! There is upper letter in the string');
    } else
        console.log('Error! There is not upper letter in the string');
}

function Number(input){
    const number = /[0-9]/.test(input);
    if (number) {
        console.log('Well! There is number in the string');
    } else
        console.log('Error! There is not number in the string');
}

function SymbolMail(input){
    const symbol = /@/.test(input);
    if (symbol) {
        console.log('Well! There is @ in the string');
    } else
        console.log('Error! There is not @ in the string');
}

function checkInput(input) {
    if (typeof(input) === 'string') {
        if (input.trim().length != 0) {
            console.log('Well! This is the String.\nWell! The String is not empty.');
            Lenght(input);
            Letters(input);
            UpLetter(input);
            Number(input);
            SymbolMail(input);
        } else
            console.log('Error! This is the String.\nBut it`s empty.');
    } else
        console.log('Error! This is not the String.');

}

checkInput('@22cvbnNMDD@')