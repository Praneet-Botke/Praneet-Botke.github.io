const nameEl = document.querySelector('#name');
const registrationNoEl = document.querySelector('#registration-no');
const departmentWithSpecializationEl = document.querySelector('#department-with-specialization');
const batchEl = document.querySelector('#batch');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

const checkName = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

const checkRegistrationNo = () => {
    let valid = false;
    const min = 2,
        max = 15;
    const registrationNo = registrationNoEl.value.trim();
    if (!isRequired(registrationNo)) {
        showError(registrationNoEl, 'Registration No. cannot be blank.');
    } else if (!isBetween(registrationNo.length, min, max)) {
        showError(registrationNoEl, `Registration No. must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(registrationNoEl);
        valid = true;
    }
    return valid;
};

const checkDepartmentWithSpecialization = () => {

    let valid = false;

    const min = 3,
        max = 8;

    const departmentWithSpecialization = departmentWithSpecializationEl.value.trim();

    if (!isRequired(departmentWithSpecialization)) {
        showError(departmentWithSpecializationEl, 'Department with Specialzation cannot be blank.');
    } else if (!isBetween(departmentWithSpecialization.length, min, max)) {
        showError(departmentWithSpecializationEl, `Department with Specialization must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(departmentWithSpecializationEl);
        valid = true;
    }
    return valid;
};

const checkBatch = () => {

    let valid = false;

    const min = 1,
        max = 2;

    const batch = batchEl.value.trim();

    if (!isRequired(batch)) {
        showError(batchEl, 'Batch cannot be blank.');
    } else if (!isBetween(batch.length, min, max)) {
        showError(batchEl, `Batch must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(batchEls);
        valid = true;
    }
    return valid;
};

const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};



const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
   
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');

    
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    
    const formField = input.parentElement;

    
    formField.classList.remove('error');
    formField.classList.add('success');

   
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    
    let isNameValid = checkName(),
        isRegistrationNoValid = checkRegistrationNo(),
        isDepartmentWithSpecializationValid = checkDepartmentWithSpecialization(),
        isBatchValid = checkBatch(),
        isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isNameValid && isRegistratioNoValid && isDepartmentWithSpecializationValid && isBatchValid && isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

   
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
       
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function(e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'registration-no':
            checkRegistrationNo();
            break;
        case 'department-with-specialization':
            checkDepartmentWithSpecialization();
            break;
        case 'batch':
            checkBatch();
            break;
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
