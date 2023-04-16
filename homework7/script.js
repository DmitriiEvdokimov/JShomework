// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
    console.log('Все теги прогрузились')
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => {
    console.log('Все элементы прогрузились')
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const body = document.querySelector('body')

body.onclick = function(event) {
    let target = event.target
    if (target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе ${target.tagName.toLowerCase()}`)
    } else {
        console.log(`Класс "super_element" не присутствует в элементе ${target.tagName.toLowerCase()}`)
    }
}

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseenter', () => {
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector('ul');
ul.onclick = function(newEvent) {
    let btn = newEvent.target
    if (btn.tagName.toLowerCase() === 'button') {
        console.log(btn.textContent)
    }
}

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.


// Потому что ul имеет более глубокий уровень вложенности.
// При "всплытии" сначала выполняются операции с более глубоко лежащими элементами.
// Операции с тегом Body выполняются последними.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i++) {
    if (i % 2 === 1) {
        items[i].style.backgroundColor = 'red'
    }
}