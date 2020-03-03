document.getElementById('firstname').addEventListener('blur', validateFirstName);
document.getElementById('surname').addEventListener('blur', validateSurname);
document.getElementById('postcode').addEventListener('blur', validatePostcode);  
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateFirstName() {
    const firstname = document.getElementById('firstname');
    const re = /^[a-zA-Z]{2,10}$/i;

    if (!re.test(firstname.value)) {
        firstname.classList.add('is-invalid');
    } else {
        firstname.classList.remove('is-invalid');
    }
}

function validateSurname() {
    const surname = document.getElementById('surname');
    const re = /^[a-zA-Z]{2,10}$/i;

    if (!re.test(surname.value)) {
        surname.classList.add('is-invalid');
    } else {
        surname.classList.remove('is-invalid');
    }
}


function validatePostcode() {
    const postcode = document.getElementById('postcode');
    const re = /^[a-zA-Z]{2}[0-9]{1,2}\s?[0-9]{1}[a-zA-z]{2}$/i;

    if (!re.test(postcode.value)) {
        postcode.classList.add('is-invalid');
    } else {
        postcode.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/i;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\+?\d{2}?\s?\d{3,6}\s?\d{6}$/i;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}