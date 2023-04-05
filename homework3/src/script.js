// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
{
    console.log('Задание 1');
    const N = 11;
    const arr = Array.from({ length: N }, (_, index) => index);
    console.log(arr);

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element % 2 === 0) {
            element === 0 ? console.log(`${element} - это ноль`) : element;
            console.log(`${element} - четное число`)
        } else {
            console.log(`${element} - нечетное число`)
        }
    };
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

{
    console.log('Задание 2');
    const N = 7;
    const arr = Array.from({ length: N }, (_, index) => index + 1);
    console.log(arr);
    arr.splice(3, 2);
    console.log(arr);
}

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3  


{
    console.log('Задание 3');
    const N = 9;
    const arr = Array.from({ length: N }, (_) => Math.trunc(Math.random() * 10));
    console.log(arr);
    const result = arr.reduce(
        (acc, index) => acc + index
    );
    console.log(result);
    let check
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 3) {
            check = 1
            break
        }
    }
    check === 1 ? console.log('В массиве есть число 3') : console.log('В массиве нет числа 3')
}


// Необходимо вывести горку в консоль(используя цикл
//         for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx


{
    console.log('Задание 4');
    for (let index = 0; index < 20; index++) {
        console.log('x'.repeat(index))
    }
}