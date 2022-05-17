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
firstName.classList.add('fields', 'required');
firstName.id = 'first-name';
firstName.setAttribute('name', 'fName');
firstName.setAttribute('placeholder', 'First name');

const lastName = document.createElement('input');
lastName.classList.add('fields', 'required');
lastName.id = 'last-name';
lastName.setAttribute('name', 'lName');
lastName.setAttribute('placeholder', 'Last name');

const shellDisName = document.createElement('div');
shellDisName.className = 'main-item';

const displayName = document.createElement('input');
displayName.classList.add('fields', 'required');
displayName.id = 'display-name';
displayName.setAttribute('name', 'dName');
displayName.setAttribute('placeholder', 'Display Name');

const eMail = document.createElement('input');
eMail.classList.add('fields', 'required');
eMail.id = 'email-address';
eMail.setAttribute('type', 'email');
eMail.setAttribute('name', 'emailAdd');
eMail.setAttribute('placeholder', 'Email Address');

const shellPassword = document.createElement('div');
shellPassword.className = 'main-item';

const password = document.createElement('input');
password.classList.add('fields', 'required');
password.id = 'password';
password.setAttribute('type', 'password');
password.setAttribute('name', 'pass');
password.setAttribute('placeholder', 'Password');

const passwordConfirm = document.createElement('input');
passwordConfirm.classList.add('fields', 'required');
passwordConfirm.id = 'password-conf';
passwordConfirm.setAttribute('type', 'password');
passwordConfirm.setAttribute('name', 'passConf');
passwordConfirm.setAttribute('placeholder', 'Password Confirmation');

const shellRadio = document.createElement('div');
shellRadio.className = 'main-radio';

const formBuyer = document.createElement('div');
formBuyer.className = 'form-radio';

const joinBuyer = document.createElement('input');
joinBuyer.className = 'radio';
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
joinSeller.className = 'radio';
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
toSend.className = 'checkbox';
toSend.id = 'choiceToSend';
toSend.setAttribute('type', 'checkbox');
toSend.setAttribute('name', 'checkbox1');
toSend.setAttribute('value', 'checked');

const markToSend = document.createElement('label');
markToSend.className = 'checkbox-name';
markToSend.setAttribute('for', 'choiceToSend');
markToSend.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

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
form.append(shellName, shellDisName, shellPassword, shellRadio, shellToSend, shellMainButton);
shellName.append(firstName, lastName);
shellDisName.append(displayName, eMail);
shellPassword.append(password, passwordConfirm);
shellRadio.append(formBuyer, formSeller);
formBuyer.append(joinBuyer, markBuyer, descriptionBuyer);
formSeller.append(joinSeller, markSeller, descriptionSeller);
shellToSend.append(toSend, markToSend);
shellMainButton.append(mainButton);

//* update

const errorMessage = document.createElement('div');
errorMessage.className = 'error-message';

const forma = document.querySelector('.main-form');

function checkInputField(event){
  errorMessage.textContent = `Field ${event.target.placeholder} cannot be empty`;
  const beforeElement = event.target.parentNode.nextSibling;  //*отримуєм елемент, наступний за батьківським
  // const required = event.target.classList.contains('required');

  if(!event.target.value && event.target.classList.contains('required')){  //*значення цілі події
    forma.insertBefore(errorMessage, beforeElement);
    event.target.style.borderColor = 'red';
  }else if(event.target.value){
    errorMessage.remove();
    event.target.style.borderColor = 'green';
  }
  // return event.target.nextSibling;
}
forma.addEventListener('focusout', checkInputField);



//todo
// const mainForm = document.forms.main;
// const fName = mainForm.firstName;
// const fNamePlaceholder = fName.placeholder;

// const checkFname = fName.replace(/^\s+|\s+$/g, '');
// console.dir(fName);


//todo

//*error-message

// const errorMessDisName = document.createElement('div');
// errorMessDisName.className = 'error-message';
// errorMessDisName.textContent = 'Display name should be more than 4 characters';

// const errorMessEmail = document.createElement('div');
// errorMessEmail.className = 'error-message';
// errorMessEmail.textContent = 'Please check the format of email address';

// const errorMessPassword = document.createElement('div');
// errorMessPassword.className = 'error-message';
// errorMessPassword.textContent = 'Password confirmation needs to match original password';


// const fName = document.getElementById('first-name');
// const lName = document.getElementById('last-name');
// const disName = document.getElementById('display-name');
// const emailAdd = document.getElementById('email-address');
// const passw = document.getElementById('password');
// const passwConf = document.getElementById('password-conf');

