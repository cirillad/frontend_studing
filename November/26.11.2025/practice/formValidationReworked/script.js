const inputs = document.getElementsByClassName('form-control')
console.log(inputs)

for (const input of inputs) {
    input.addEventListener('blur', (event) => {
        validateInput(event);
    })
}

function setInvalid(element, text = "Error") {
    const errorField = element.parentElement.querySelector('.error');
    const input = element.parentElement.querySelector('.form-control');
    errorField.innerHTML = '';
    errorField.innerHTML = text;
    input.classList.remove('valid');
    input.classList.add('invalid');
}

function setValid(element) {
    const errorField = element.parentElement.querySelector('.error');
    const input = element.parentElement.querySelector('.form-control');
    errorField.innerHTML = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
}

function validatePasswordConfirm(password, passwordConfirm) {
    return password === passwordConfirm;
}

function validateInput(event) {
    switch(event.target.id) {
        case "email":
            const errorMessage = "Enter valid email"

            if (validateEmail(event.target.value)) {
                setValid(event.target);
            }
            else {
                setInvalid(event.target, errorMessage);
            }

            break;

        case "password":
            const errorPasswordMessage = "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter and 1 number or special character"

            if (validatePassword(event.target.value)) {
                setValid(event.target);
            } else {
                setInvalid(event.target, errorPasswordMessage);
            }
            break;

        case "passwordConfirm":
            const errorPasswordConfirmMessage = "Passwords do not match";

            if (validatePasswordConfirm(event.target.parentElement.parentElement.querySelector('#password').value, event.target.value)) {
                setValid(event.target);
            } else {
                setInvalid(event.target, errorPasswordConfirmMessage);
            }

            break;

        default:
            console.log("Unknown input");
            break;
    }
}
