'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

const loginBtn = getElement('login');
const login = [
    { email: 'example@gmail.com', password: 'example' },
];

localStorage.setItem('login', JSON.stringify(login));

const loginDetails = JSON.parse(localStorage.getItem('login'));

function validate() {

    let email = select('.email').value.trim();
    let password = select('.password').value.trim();

    for(const details of loginDetails) {
        const validEmail = `${details.email}`
        const validPassword = `${details.password}`
            password = '';
            email = '';
            window.location.replace("home.html");
    }
}

onEvent('click', loginBtn, () => {
    validate();
})