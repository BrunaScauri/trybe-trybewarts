const trybeuser = {
  email: 'tryber@teste.com',
  password: '123456',
};

const button = document.querySelector('#botao');
const email = document.querySelector('#email');
const password = document.querySelector('#senha');

const validateLogin = () => {
  if (
    email.value === trybeuser.email
    && password.value === trybeuser.password
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
button.addEventListener('click', validateLogin);

const submitBtn = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

checkbox.addEventListener('click', () => {
  if (submitBtn.disabled === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function countCharacters() {
  counter.innerHTML = 500 - textarea.value.length;
}

textarea.addEventListener('keyup', countCharacters);
