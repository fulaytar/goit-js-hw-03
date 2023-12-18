//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
/* const globalMinutes = 249;
const minute = String(globalMinutes%60).padStart(2,0); // 2 це кількість символів, 0 це то чим заповнює якщо пусто
const hod = String(parseInt(globalMinutes / 60)).padStart(2,0);     
console.log(minute);
console.log(hod);
const message = `${hod}:${minute}`;
console.log(message); */


//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min
/* const min = 20;
const max = 45;
let message = "Початок";
for (let i = max; i >= min; i--){
    message += ` ${i}`;
}
console.log(message); */


// За допомогою цикла for додайте всі парні числа від min до max
/* const max = 50;
const min = 0;
let message = "Початок ";
for (let i = min; i <= max; i++){
    if (i % 2 === 0&&i !==0) {
        message += ` ${i}`;
    }
}
console.log(message); */

// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

/* let num = prompt("Уведіть число");
let total = 0;
while (num) {
    if (isNaN(num)) {
        alert("Увели не валідні дані")
        break;
    } else {
        total += Number.parseInt(num);
        num = prompt("Уведіть число");
    }
}
alert(total); */

//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

/* const userInput = prompt("Уведіть логін");
if (userInput != null && userInput==="Адмін") {
    const password = prompt("Уведіть пароль");
    if (password === "Я головний" && password !== null) {
        alert("Вітаю!");
    }
    else {
        alert("Відмінено")
    }
   
}
else { 
    alert("Я вас не знаю!")
        } */


//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"
/* let message = prompt("Уведи число більше 100");
message = Number(message);
while (message < 100 && message !== null) {
    message = prompt("Уведіть ще раз");
} */


// У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)
/* let message = prompt("Уведіть кількість хвилин");
message = Number(message);
if(message >= 0 && message <= 14) {
    alert("Перша чверть");
}
else if (message > 14 && message <= 29) { 
    alert("Друга чверть");
}
else if (message > 29 && message <= 44) {
    alert("Третя чверть");
 }
else if (message > 44 && message <= 59) {
    alert("Четверта чверть");
}
else {
    alert("Помилка")
}
  */

//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

/* const string = 'abcde'
const string2 = 'bcde'
function name(str, litera) {
    if (str[0] === litera) {
        return `Так`
    } else {
        return `Немає`
    }
}
console.log(string,name(string,"a"));
console.log(string,name(string,"b")) */