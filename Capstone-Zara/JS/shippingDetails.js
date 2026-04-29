'use strict'

// SHIPPING FORM VALIDATION

const form = document.getElementById("shippingForm");

// Field rules
const fields = [
    {
        id: "first-name",
        validate: val => val.trim().length >= 2,
        message: "First name must be at least 2 characters"
    },
    {
        id: "last-name",
        validate: val => val.trim().length >= 2,
        message: "Last name must be at least 2 characters"
    },
    {
        id: "email",
        validate: val => val.includes("@") && val.includes("."),
        message: "Enter a valid email (example@email.com)"
    },
    {
        id: "address",
        validate: val => val.trim().length >= 5,
        message: "Enter a valid street address"
    },
    {
        id: "city",
        validate: val => val.trim().length >= 2,
        message: "Enter a valid city"
    },
    {
        id: "zip",
        validate: val => /^\d{5}(\d{4})?$/.test(val),
        message: "ZIP must be 5 or 9 digits"
    },
    {
        id: "states",
        validate: val => val !== "",
        message: "Please select a state"
    }
];

// REAL-TIME VALIDATION
fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorDiv = input.parentElement.querySelector(".error-message");

    function validateField(showError = false) {
        const value = input.value;
        const errorDiv = input.parentElement.querySelector(".error-message");

        const isValid = field.validate(value);

        if (!isValid) {
            input.classList.add("invalid");
            input.classList.remove("valid");

            if (showError) {
                errorDiv.textContent = field.message;
            }

            return false;
        } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
            errorDiv.textContent = "";
            return true;
        }
    }

    input.addEventListener("input", () => validateField(false));
    input.addEventListener("blur", () => validateField(true));
});


// SUBMIT VALIDATION
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorDiv = input.parentElement.querySelector(".error-message");

        const value = input.value;

        const isValid = field.validate(value);

        if (!isValid) {
            input.classList.add("invalid");
            input.classList.remove("valid");
            errorDiv.textContent = field.message;
            allValid = false;
        } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
            errorDiv.textContent = "";
        }
    });

    if (allValid) {
        console.log("Form is valid!");
        form.submit();
    }
});