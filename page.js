'use strict';

//* create
const body = document.body;
const container = document.createElement('div');
container.className = 'container';

const header = document.createElement('header');
header.className = 'header';

const headerInner = document.createElement('div');
headerInner.className = 'header-inner';

const logo = document.createElement('div');
logo.className = 'header-logo';
logo.textContent = 'squadhelp';

const login = document.createElement('div');
login.className = 'header-login';

const loginButton = document.createElement('button');
loginButton.className = 'header-button';
loginButton.textContent = 'Login';

const main = document.createElement('main');
const mainInner = document.createElement('div');
mainInner.className = 'main-inner';

const shellH1 = document.createElement('div');
shellH1.className = 'main-h';

const h1 = document.createElement('h1');
h1.textContent = 'create an account';

const mainP = document.createElement('p');
mainP.className = 'main-p';
mainP.textContent = 'We always keep your name and email address private.';

const form = document.createElement('form');
form.className = 'main-form';
form.setAttribute('name', 'main');

const shellName = document.createElement('div');
shellName.className = 'main-item';

const firstName = document.createElement('input');
firstName.classList.add('fields', 'required', 'sending', 'unchecking', 'clear');
firstName.id = 'first-name';
firstName.setAttribute('name', 'fName');
firstName.setAttribute('placeholder', 'First name');

const lastName = document.createElement('input');
lastName.classList.add('fields', 'required', 'sending', 'unchecking', 'clear');
lastName.id = 'last-name';
lastName.setAttribute('name', 'lName');
lastName.setAttribute('placeholder', 'Last name');

const shellDisName = document.createElement('div');
shellDisName.className = 'main-item';

const displayName = document.createElement('input');
displayName.classList.add('fields', 'required', 'sending', 'unchecking', 'clear');
displayName.id = 'display-name';
displayName.setAttribute('name', 'dName');
displayName.setAttribute('placeholder', 'Display Name');

const eMail = document.createElement('input');
eMail.classList.add('fields', 'required', 'sending', 'clear');
eMail.id = 'email-address';
// eMail.setAttribute('type', 'email');
eMail.setAttribute('name', 'emailAdd');
eMail.setAttribute('placeholder', 'Email Address');

const shellPassword = document.createElement('div');
shellPassword.classList.add('main-item', 'password-container');
shellPassword.id = 'password-field';

const password = document.createElement('input');
password.classList.add('fields', 'required', 'clear');
password.id = 'password';
password.setAttribute('type', 'password');
password.setAttribute('name', 'pass');
password.setAttribute('placeholder', 'Password');

const passwordConfirm = document.createElement('input');
passwordConfirm.classList.add('fields', 'required', 'clear');
passwordConfirm.id = 'password-conf';
passwordConfirm.setAttribute('type', 'password');
passwordConfirm.setAttribute('name', 'passConf');
passwordConfirm.setAttribute('placeholder', 'Password Confirmation');

const shellRadio = document.createElement('div');
shellRadio.className = 'main-radio';

const formBuyer = document.createElement('div');
formBuyer.className = 'form-radio';

const joinBuyer = document.createElement('input');
joinBuyer.classList.add('radio');
joinBuyer.id = 'choiceBuyer'
joinBuyer.setAttribute('type', 'radio');
joinBuyer.setAttribute('name', 'join');
joinBuyer.setAttribute('value', 'buyer');

const markBuyer = document.createElement('label');
markBuyer.className = 'radio-name';
markBuyer.setAttribute('for', 'choiceBuyer');
markBuyer.textContent = 'Join As a Buyer';

const descriptionBuyer = document.createElement('p');
descriptionBuyer.className = 'radio-des';
descriptionBuyer.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';

const formSeller = document.createElement('div');
formSeller.className = 'form-radio';

const joinSeller = document.createElement('input');
joinSeller.classList.add('radio');
joinSeller.id = 'choiceSeller';
joinSeller.setAttribute('type', 'radio');
joinSeller.setAttribute('name', 'join');
joinSeller.setAttribute('value', 'seller');

const markSeller = document.createElement('label');
markSeller.className = 'radio-name';
markSeller.setAttribute('for', 'choiceSeller');
markSeller.textContent = 'Join As a Creative or Marketplace Seller';

const descriptionSeller = document.createElement('p');
descriptionSeller.className = 'radio-des';
descriptionSeller.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';

const shellToSend = document.createElement('div');
shellToSend.className = 'main-checkbox';

const toSend = document.createElement('input');
toSend.classList.add('checkbox', 'sending', 'clear');
toSend.id = 'choiceToSend';
toSend.setAttribute('type', 'checkbox');
toSend.setAttribute('name', 'offers');

const markToSend = document.createElement('label');
markToSend.className = 'checkbox-name';
markToSend.setAttribute('for', 'choiceToSend');
markToSend.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

const shellCancel = document.createElement('div');
shellCancel.className = 'main-clear';

const clearButton = document.createElement('button');
clearButton.className = 'clear-item';
clearButton.textContent = 'Cancel';

const shellMainButton = document.createElement('div');
shellMainButton.className = 'main-button';

const mainButton = document.createElement('button');
mainButton.className = 'button';
mainButton.setAttribute('type', 'submit');
mainButton.setAttribute('name', 'createAccount');
mainButton.textContent = 'Create account';

//* append
body.append(container);
container.append(header, main);
header.append(headerInner);
headerInner.append(logo, login);
login.append(loginButton);

main.append(mainInner);
mainInner.append(shellH1, form);
shellH1.append(h1, mainP);
form.append(shellName, shellDisName, shellPassword, shellRadio, shellToSend, shellCancel, shellMainButton);
shellName.append(firstName, lastName);
shellDisName.append(displayName, eMail);
shellPassword.append(password, passwordConfirm);
shellRadio.append(formBuyer, formSeller);
formBuyer.append(joinBuyer, markBuyer, descriptionBuyer);
formSeller.append(joinSeller, markSeller, descriptionSeller);
shellToSend.append(toSend, markToSend);
shellCancel.append(clearButton);
shellMainButton.append(mainButton);

//* update

const errorMessage = document.createElement('div');
errorMessage.className = 'error-message';

const forma = document.querySelector('.main-form');

function checkEmptyField(event) {
  errorMessage.textContent = `Field ${event.target.placeholder} cannot be empty`;
  const beforeElement = event.target.parentNode.nextSibling;  //*???????????????? ??????????????, ?????????????????? ???? ????????????????????????
  
  if (!event.target.value && event.target.classList.contains('required')){  //*???????????????? ???????? ??????????
    forma.insertBefore(errorMessage, beforeElement);
    event.target.style.borderColor = 'red';
    
  } else if(event.target.value && event.target.classList.contains('required') && !event.target.classList.contains('unchecking')){
    errorMessage.remove();

  } else if(event.target.value && event.target.classList.contains('required', 'unchecking')){
    errorMessage.remove();
    event.target.style.borderColor = 'green';
  }
}
forma.addEventListener('focusout', checkEmptyField);


const errorMessEmail = document.createElement('div');
errorMessEmail.className = 'error-message';

const emailCheck = document.getElementById('email-address');

function checkEmailField(event){
  const regExpEmail = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
  errorMessEmail.textContent = 'Please check the format of email address';

  if(!regExpEmail.test(event.target.value)){
    forma.insertBefore(errorMessEmail, shellPassword);
    event.target.style.borderColor = 'red';
  } else{
    errorMessEmail.remove();
    event.target.style.borderColor = 'green';
  }  
}
emailCheck.addEventListener('focusout', checkEmailField);


const errorMessPassword = document.createElement('div');
errorMessPassword.className = 'error-message';

const passwordCheck = document.querySelector('.password-container');

function checkPasswordField(event){
  errorMessPassword.textContent = 'Password confirmation needs to match original password';
  const passw = document.getElementById('password');
  const passwConf = document.getElementById('password-conf');
  const regExpPassword = /[\w]{2,15}/gi;

  if(passw.value !== passwConf.value && !regExpPassword.test(event.target.value)){
    forma.insertBefore(errorMessPassword, shellRadio);
    passw.style.borderColor = 'red';
    passwConf.style.borderColor = 'red';

  } else if(passw.value === passwConf.value && regExpPassword.test(event.target.value)){
    errorMessPassword.remove();
    passw.style.borderColor = 'green';
    passwConf.style.borderColor = 'green';
  }
}
passwordCheck.addEventListener('focusout', checkPasswordField);


//* submit

const submit = document.querySelector('.button');

class Person {
  constructor(fName, lName, dName, emailAdd, join, offers) {
    this.fName = fName;
    this.lName = lName;
    this.dName = dName;
    this.emailAdd = emailAdd;
    this.join = join;
    this.offers = offers;
  }
}

const sendObj = new Person();

function sendElementsValue (e){
  e.preventDefault();
  const sends = Array.from(document.getElementsByClassName('sending'));
  const radios = Array.from(document.getElementsByName('join'));

  sends.forEach((element) => {
    if(element.checked){
      sendObj[element.name] = element.checked;
    }else{
      sendObj[element.name] = element.value;
    }
  });
  radios.forEach((element) => sendObj[element.name] = element.value);
  
  localStorage.setItem(`${sendObj.lName}`, JSON.stringify(sendObj)); 
  console.log(sendObj);
}
submit.addEventListener('click', sendElementsValue);


//* cancel

const cancel = document.querySelector('.clear-item');

function clearAllFields(e){
  e.preventDefault();
  const sendClassName = Array.from(document.getElementsByClassName('clear'));
  const radioName = Array.from(document.getElementsByName('join'));
  errorMessage.remove();
  errorMessEmail.remove();
  errorMessPassword.remove();

  sendClassName.forEach((element) => {
    element.checked = '';
    element.value = '';
    element.style.borderColor = 'transparent';
  });
  radioName.forEach((element) => element.checked = '');
}
cancel.addEventListener('click', clearAllFields);




//todo

//* radio button
// submit.addEventListener('click', (e) => {
//   e.preventDefault();
//   const radios = document.getElementsByName('join');
//   radios.forEach((element) => {
//     if(element.checked){
//       console.log(`${element.value}`);
//     }
//     return element.value
//   });
// }); 


// const mainForm = document.forms.main;
// const fName = mainForm.firstName;
// const fNamePlaceholder = fName.placeholder;


//todo

//*error-message

// const errorMessDisName = document.createElement('div');
// errorMessDisName.className = 'error-message';
// errorMessDisName.textContent = 'Display name should be more than 4 characters';

// const forma = document.querySelector('.main-form');

// function checkInputField(event) {
//   errorMessage.textContent = `Field ${event.target.placeholder} cannot be empty`;
//   const beforeElement = event.target.parentNode.nextSibling;  //*???????????????? ??????????????, ?????????????????? ???? ????????????????????????

//   if (!event.target.value && event.target.classList.contains('required')) {  //*???????????????? ???????? ??????????
//     forma.insertBefore(errorMessage, beforeElement);
//     event.target.style.borderColor = 'red';
//   } else if (event.target.value && event.target.classList.contains('required')) {
//     errorMessage.remove();
//     event.target.style.borderColor = 'green';
//   }
// }
// forma.addEventListener('focusout', checkInputField);
// const checkPassword = document.getElementById('password-field');

// const beforeRadio = document.querySelector('.main-radio');

// function checkPasswordFields(e){
//   e.preventDefault();
//   const passw = document.getElementById('password');
//   const passwConf = document.getElementById('password-conf');
//   const beforeElement = e.target.parentNode.nextSibling;

//   if(e.target.value && passw.value !== passwConf.value){
//     checkPassword.insertBefore(errorMessPassword, beforeElement);
//     passw.style.borderColor = 'red';
//     passwConf.style.borderColor = 'red';
//   } else if(e.target.value && passw.value === passwConf.value){
//     errorMessPassword.remove();
//     passw.style.borderColor = 'green';
//     passwConf.style.borderColor = 'green';
//   }
// }
// checkPassword.addEventListener('focusout', checkPasswordFields);

// function checkPasswordFields(e){
//   e.preventDefault();
//   const passw = document.getElementById('password');
//   const passwConf = document.getElementById('password-conf');

//   if(passw.value !== passwConf.value){
//     checkPassword.insertBefore(errorMessPassword, beforeRadio);
//     passw.style.borderColor = 'red';
//     passwConf.style.borderColor = 'red';
//   } else if(passw.value === passwConf.value){
//     errorMessPassword.remove();
//     passw.style.borderColor = 'green';
//     passwConf.style.borderColor = 'green';
//   }
// }
// checkPassword.addEventListener('focusout', checkPasswordFields);
