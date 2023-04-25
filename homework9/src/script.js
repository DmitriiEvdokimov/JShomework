import { dataQuestion } from "./data.js";

const data = JSON.parse(dataQuestion);

const image = document.querySelector('.imageAnswer');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

image.src = data.photo_answer;
question.textContent = data.question;
answer.textContent = data.answer;