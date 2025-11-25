const inputs = document.getElementsByClassName('form-control')
console.log(inputs)

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
        validateInput(event.target.id, event.target.value)
    })
})

function validateInput(id, value) {
    switch(id) {
        case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                console.log("Невірний email. Має бути формат: example@domain.com");
            } else {
                console.log("Email валідний");
            }
            break;

        case "password":
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
            if (!passwordRegex.test(value)) {
                console.log("Пароль має бути мінімум 8 символів, містити велику та маленьку літери, цифру та спеціальний символ");
            } else {
                console.log("Пароль валідний");
            }
            break;

        case "passwordConfirm":
            const originalPassword = document.getElementById("password").value;
            if (value !== originalPassword) {
                console.log("Паролі не співпадають");
            } else {
                console.log("Паролі співпадають");
            }
            break;

        default:
            console.log("Невідомий інпут");
            break;
    }
}
