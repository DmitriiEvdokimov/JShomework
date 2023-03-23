let celsiusTemp = Number(prompt("Введите температуру в градусах Цельсия:"));
let fahrenheitTemp = (9 / 5) * celsiusTemp + 32;

console.log(`Температура в градусах Цельсия: ${celsiusTemp}°C`); // выводит "Температура в градусах Цельсия: [введенное пользователем значение]°C"
console.log(`Температура в градусах Фаренгейта: ${fahrenheitTemp}°F`); // выводит "Температура в градусах Фаренгейта: [вычисленное значение]°F"
alert(`Температура в градусах Фаренгейта равна ${fahrenheitTemp}°C`)


let name = prompt("Введите ваше имя:");
let admin = name;

console.log(admin); // выводит значение переменной admin в консоль
alert(admin); // выводит значение переменной admin в браузер с помощью alert