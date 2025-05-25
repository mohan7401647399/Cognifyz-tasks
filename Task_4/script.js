const form = document.getElementById('registerForm'),
    passwordInput = document.getElementById('password'),
    errorMsg = document.getElementById('errorMsg'),
    ageInput = document.getElementById('age'),
    mobileInput = document.getElementById('mobile');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = passwordInput.value,
        age = parseInt(ageInput.value),
        strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        mobilePattern = /^\d{10}$/;

    let messages = [];

    if (!strongPassword.test(password)) {
        messages.push("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    }

    if (isNaN(age) || age < 18) {
        messages.push("You must be at least 18 years old to register.");
    }

    if(isNaN(mobileInput.value) || !mobilePattern.test(mobileInput.value)){
        messages.push("Mobile number must be exactly 10 digits.");
    }

    if (messages.length > 0) {
        errorMsg.textContent = messages.join(" ");
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "Form submitted successfully!";
        errorMsg.style.color = "green";
    }
});
