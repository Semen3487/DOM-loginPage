// create
const body = document.body;
const container = document.createElement('div');
container.setAttribute('class', 'container');

const header = document.createElement('header');
header.setAttribute('class', 'header');

const headerInner = document.createElement('div');
headerInner.setAttribute('class', 'header-inner');

const logo = document.createElement('div');
logo.setAttribute('class', 'header-logo');
logo.textContent = 'squadhelp';

const login = document.createElement('div');
login.setAttribute('class', 'header-login');

const loginButton = document.createElement('button');
loginButton.setAttribute('class', 'header-button');
loginButton.textContent = 'Login';

const main = document.createElement('main');
const mainInner = document.createElement('div');
mainInner.setAttribute('class', 'main-inner');

const shellH1 = document.createElement('div');
shellH1.setAttribute('class', 'main-h');

const h1 = document.createElement('h1');
h1.textContent = 'create an account';

const mainP = document.createElement('p');
mainP.setAttribute('class', 'main-p');
mainP.textContent = 'We always keep your name and email address private.';

const mainForm = document.createElement('form');
mainForm.setAttribute('class', 'main-form');
mainForm.setAttribute('action', '#');
mainForm.setAttribute('method', 'post');

const shellName = document.createElement('div');
shellName.setAttribute('class', 'main-item');

const firstName = document.createElement('input');
firstName.setAttribute('class', 'first-name');
firstName.setAttribute('type', 'text');
firstName.setAttribute('name', 'fName');
firstName.setAttribute('placeholder', 'First name');

const lastName = document.createElement('input');
lastName.setAttribute('class', 'last-name');
lastName.setAttribute('type', 'text');
lastName.setAttribute('name', 'lName');
lastName.setAttribute('placeholder', 'Last name');

const errorMessName = document.createElement('div');
errorMessName.setAttribute('class', 'error-message');

const shellDisName = document.createElement('div');
shellDisName.setAttribute('class', 'main-item');

const displayName = document.createElement('input');
displayName.setAttribute('class', 'display-name');
displayName.setAttribute('type', 'text');
displayName.setAttribute('name', 'dName');
displayName.setAttribute('placeholder', 'Display Name');

const eMail = document.createElement('input');
eMail.setAttribute('class', 'email-address');
eMail.setAttribute('type', 'email');
eMail.setAttribute('name', 'emailAdd');
eMail.setAttribute('placeholder', 'Email Address');

const errorMessDisName = document.createElement('div');
errorMessDisName.setAttribute('class', 'error-message');

const shellPassword = document.createElement('div');
shellPassword.setAttribute('class', 'main-item');

const password = document.createElement('input');
password.setAttribute('class', 'password');
password.setAttribute('type', 'password');
password.setAttribute('name', 'pass');
password.setAttribute('placeholder', 'Password');

const passwordConfirm = document.createElement('input');
passwordConfirm.setAttribute('class', 'password-conf');
passwordConfirm.setAttribute('type', 'password');
passwordConfirm.setAttribute('name', 'passConf');
passwordConfirm.setAttribute('placeholder', 'Password Confirmation');

const errorMessPassword = document.createElement('div');
errorMessPassword.setAttribute('class', 'error-message');

const shellRadio = document.createElement('div');
shellRadio.setAttribute('class', 'main-radio');

const formBuyer = document.createElement('div');
formBuyer.setAttribute('class', 'form-radio');

const joinBuyer = document.createElement('input');
joinBuyer.setAttribute('class', 'radio');
joinBuyer.setAttribute('id', 'choiceBuyer')
joinBuyer.setAttribute('type', 'radio');
joinBuyer.setAttribute('name', 'join');
joinBuyer.setAttribute('value', 'buyer');

const markBuyer = document.createElement('label');
markBuyer.setAttribute('class', 'radio-name')
markBuyer.setAttribute('for', 'choiceBuyer');
markBuyer.textContent = 'Join As a Buyer';

const descriptionBuyer = document.createElement('p');
descriptionBuyer.setAttribute('class', 'radio-des');
descriptionBuyer.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';

const formSeller = document.createElement('div');
formSeller.setAttribute('class', 'form-radio');

const joinSeller = document.createElement('input');
joinSeller.setAttribute('class', 'radio');
joinSeller.setAttribute('id', 'choiceSeller');
joinSeller.setAttribute('type', 'radio');
joinSeller.setAttribute('name', 'join');
joinSeller.setAttribute('value', 'seller');

const markSeller = document.createElement('label');
markSeller.setAttribute('class', 'radio-name');
markSeller.setAttribute('for', 'choiceSeller');
markSeller.textContent = 'Join As a Creative or Marketplace Seller';

const descriptionSeller = document.createElement('p');
descriptionSeller.setAttribute('class', 'radio-des');
descriptionSeller.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';

const shellToSend = document.createElement('div');
shellToSend.setAttribute('class', 'main-checkbox');

const toSend = document.createElement('input');
toSend.setAttribute('class', 'checkbox');
toSend.setAttribute('id', 'choiceToSend');
toSend.setAttribute('type', 'checkbox');
toSend.setAttribute('name', 'checkbox1');
toSend.setAttribute('value', 'checked');

const markToSend = document.createElement('label');
markToSend.setAttribute('class', 'checkbox-name');
markToSend.setAttribute('for', 'choiceToSend');
markToSend.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

const shellMainButton = document.createElement('div');
shellMainButton.setAttribute('class', 'main-button');

const mainButton = document.createElement('button');
mainButton.setAttribute('class', 'button');
mainButton.setAttribute('type', 'submit');
mainButton.setAttribute('name', 'createAccount');
mainButton.textContent = 'Create account';


// append

body.append(container);
container.append(header, main);
header.append(headerInner);
headerInner.append(logo, login);
login.append(loginButton);

main.append(mainInner);
mainInner.append(shellH1, mainForm);
shellH1.append(h1, mainP);
mainForm.append(shellName, shellDisName, shellPassword, shellRadio, shellToSend, shellMainButton);
shellName.append(firstName, lastName);
shellDisName.append(displayName, eMail);
shellPassword.append(password, passwordConfirm);
shellRadio.append(formBuyer, formSeller);
formBuyer.append(joinBuyer, markBuyer, descriptionBuyer);
formSeller.append(joinSeller, markSeller, descriptionSeller);
shellToSend.append(toSend, markToSend);
shellMainButton.append(mainButton);


// update
