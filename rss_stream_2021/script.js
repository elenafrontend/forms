// получить элемент можно разными методами
// 1.
// через свойство document (в разметке form атрибут name)
// const FORM = document.forms.telegram;

// 2.
// по классу
// const FORM = document.getElementsByClassName('telegram-form')[0];
// const FORM = document.querySelector('.telegram-form');;

// 3.
// через id
// const FORM = document.querySelector('#telegram-register');
const FORM = document.getElementById('telegram-register');
const PSWD_INPUT = document.getElementById('password-input');
const CONF_PSWD_INPUT = document.getElementById('confirm-password-input');
const RESULT = document.getElementById('result');

const checkPasswordParameters = () => {
  if (PSWD_INPUT.value !== CONF_PSWD_INPUT.value) {
    return false;
  }

  const PSWD_INPUT_VALUE = PSWD_INPUT.value;
  const hasUpperCase = /[A-Z]/.test(PSWD_INPUT_VALUE);

  if (PSWD_INPUT_VALUE.length < 8) {
    return false;
  }

  return true;
} 


// добавить событие на элемент

// 1.
// Использование свойства DOM-объекта

// FORM.onsubmit = function() {
// ... do smth
// }
// либо
// FORM.onsubmit = someFunction;

// Так как у элемента DOM может быть только одно свойство с именем onclick, 
// то назначить более одного обработчика так нельзя:
// Например, одна часть кода хочет при клике на кнопку делать её подсвеченной, а другая – выдавать сообщение.
// то есть второй FORM.onsubmit перезапишет обработчик выше

// 2
// addEventListener

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = checkPasswordParameters();

  RESULT.innerHTML = isValid ? 'Success!' : '';
})