// // Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
{
    function getCube(someNomber) {
        let result = someNomber * someNomber * someNomber
        return result
    }
    console.log(getCube(2) + getCube(3))
}

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// // Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
{
    function getTax(value) {
        var result = value - value * 0.13;
        return result;
    }
    const userInput = prompt("Введите число");
    console.log(userInput);
    isNaN(userInput) ? alert('Вы ввели не число') : alert('Число обнаружено');
    console.log(`Размер заработной платы за вычетом налогов равен ${getTax(userInput)}`);
}
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

{
    function getMax(someArray) {
        let max = someArray[0];
        for (let index = 0; index < someArray.length; index++) {
            if (someArray[index] > max) max = someArray[index]
        }
        return max
    }
    let userArray = [3]
    for (let index = 0; index < 3; index++) {
        userArray[index] = +prompt(`Введите число ${index+1}/3`);
    }
    let userMax = getMax(userArray)
    console.log(userMax)
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

{
    function add(num1, num2) {
        let result = num2 + num1;
        return result;
    }

    function diff(num1, num2) {
        num2 > num1 ? result = num2 - num1 : result = num1 - num2;
        return result;
    }

    function mult(num1, num2) {
        let result = num2 * num1;
        return result;
    }

    function div(num1, num2) {
        num2 > num1 ? result = num2 / num1 : result = num1 / num2;
        return result;
    }

    console.log(add(48, 15));
    console.log(diff(48, 15));
    console.log(mult(48, 15));
    console.log(div(48, 15));

}