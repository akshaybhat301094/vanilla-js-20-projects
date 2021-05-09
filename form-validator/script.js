const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');

function onSubmit(e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  console.log(e);
}

// check if required
function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value.trim() === '') {
      showError(element, `${element.id} is required`);
    } else {
      showSuccess(element);
    }
  });
}

// length validations
function checkLength(element, min, max) {
  if (element.value.length < min) {
    showError(element, `${element.id} length should be less than ${min}`);
  } else if (element.value.length > max) {
    showError(element, `${element.id} length should be greater than ${max}`);
  } else {
    showSuccess(element);
  }
}

// check if email is valid
function checkEmail(input) {
  const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if (regex.test(input)) {
    showSuccess(input.value);
  } else {
    showError(input, 'Email is not valid');
  }
}

// check if passwords are equal
function checkPasswordsMatch(pass1, pass2) {
  if (pass1.value !== pass2.value) showError(pass2, 'Passwords do not match');
}

// generic function to show error message on passed in field
function showError(field, message) {
  let parentEl = field.parentElement;
  let errorField = parentEl.querySelector('small');
  parentEl.classList.add('error');
  errorField.innerHTML = message;
}

// generic function to mark the field as valid
function showSuccess(field) {
  let parentEl = field.parentElement;
  parentEl.classList.remove('error');
  parentEl.classList.add('success');
}
