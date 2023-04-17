// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputValue = document.getElementById('from');
inputValue.addEventListener('input', () => {
    const inputValue = document.getElementById('from');
    const span = document.querySelector('span');
    span.innerText = inputValue.value;
})



// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
messageBtn.addEventListener('click', () => {
    const message = document.querySelector('.message');
    message.classList = 'animate_animated animate_fadeInLeftBig';
    message.style.visibility = 'visible';
    console.log(message);
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, select');

function validateInput(input) {
    if (input.value.trim() === '') {
        input.classList.add('error');

    } else {
        input.classList.remove('error');
    }
}

function validateForm(e) {
    e.preventDefault();
    let formIsValid = true;

    inputs.forEach(input => {
        validateInput(input);
        if (input.classList.contains('error')) {
            formIsValid = false;
            console.log(input.classList)
        }
    })

    if (formIsValid) {
        console.log('Form submitted');
        form.submit();
    }
}

form.addEventListener('submit', validateForm);

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    })
})