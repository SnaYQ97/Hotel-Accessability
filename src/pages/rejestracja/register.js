const CONTROLLED_FIELDS_LIST = ['name', 'surname', 'idNumber', 'email', 'depositPin', 'dateOfBirth', 'numberOfNights', 'terms'];
const form = {};

const REGEXP_MAP = {
    nameOrNames: '^[A-Z][a-z]+( [A-Z][a-z]+)?$',
    surnameOrSurnames: '^[A-Z][a-z]+(-[A-Z][a-z]+)?$',
    idNumber: '^[A-Z]{3}[0-9]{6}$',
    depositPin: '^[0-9]{4}$',
}


const formValidation = {
    name: (value) => {
        return new Validation(value)
          .isRequired('Nie podano imienia')
          .checkOnRegexp('Nie prawidłowe imię lub imiona, imię powinno zaczynać się z dużej litery', REGEXP_MAP.nameOrNames)
    },
    surname: (value) => {
        return new Validation(value)
          .isRequired('Nie podano nazwiska')
          .checkOnRegexp('Nie prawidłowe nazwisko, nazwisko powinno zaczynać się z dużej litery', REGEXP_MAP.surnameOrSurnames)
    },
    idNumber: (value) => {
        return new Validation(value)
          .isRequired('Nie podano numeru dowodu osobistego')
          .checkOnRegexp('Nie prawidłowy numer dowodu osobistego', REGEXP_MAP.idNumber)
    },
    email: (value) => {
        return new Validation(value)
          .isEmail('Nie prawidłowy adres email')
          .isRequired('Nie podano adresu email')
    },
    depositPin: (value) => {
        return new Validation(value)
          .isRequired('Nie podano numeru PIN')
          .checkOnRegexp('Nie prawidłowy numer PIN', REGEXP_MAP.depositPin)
    },
    dateOfBirth: (value) => {
        return new Validation(value)
          .isRequired('Nie podano daty urodzenia')
          .customCheck(() => {
              const date = new Date(value);
              const now = new Date();
              const years = now.getFullYear() - date.getFullYear();
              const months = now.getMonth() - date.getMonth();
              const days = now.getDate() - date.getDate();
              // miusi być powyżej 18 lat i poniżej 120 lat
              const isAbove18 = years > 18 || (years === 18 && months > 0) || (years === 18 && months === 0 && days >= 0);
              const isBelow200 = years < 120 || (years === 120 && months < 0) || (years === 120 && months === 0 && days <= 0);
              
              return isAbove18 && isBelow200;
          }, 'Wiek musi być powyżej 18 lat i poniżej 120 lat');
    },
    numberOfNights: (value) => {
        return new Validation(value)
          .customCheck(() => {
              const number = Number(value);
              return number > 0 && number <= 365;
          }, 'Liczba nocy musi być powyżej 0 i poniżej 365');
    },
    terms: (value) => {
        return new Validation(value)
          .customCheck(() => {
              return value === true;
          }, 'Musisz zaakceptować regulamin');
    }
}
    
    const markFieldAsInvalid = (input, error) => {
        input.classList.add('invalid');
        input.nextElementSibling.innerText = error;
        input.previousElementSibling.classList.add('invalid');
    }
    
    const unmarkFieldAsInvalid = (input) => {
        input.classList.remove('invalid');
        input.nextElementSibling.innerText = '';
        input.previousElementSibling.classList.remove('invalid');
    }
    
    const setSubmitDisability = (value) => {
        const submitButton = document.querySelector('#submitButton');
        submitButton.disabled = value;
    }
    
    const validateField = (input) => {
        const name = input.name;
        const value = input.value;
        const checked = input.checked;
        console.log({name, value, checked})
        if (CONTROLLED_FIELDS_LIST.includes(name) && name !== 'terms') {
            form[name] = formValidation[name](value);
            console.log()
            if (!form[name].isValid) {
                markFieldAsInvalid(input, form[name].error)
            } else {
                unmarkFieldAsInvalid(input);
            }
        }
        if (name === 'terms') {
            form[name] = formValidation[name](checked);
            if (!form[name].isValid) {
                markFieldAsInvalid(input, form[name].error)
                setSubmitDisability(true);
                input.value = checked;
            } else {
                unmarkFieldAsInvalid(input);
                setSubmitDisability(false);
                input.value = checked;
            }
        }
    }
    
    const checkForm = (formElement) => {
        const inputs = formElement.querySelectorAll('input');
        inputs.forEach(input => validateField(input))
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('form');
        checkForm(formElement);
        const isFormValid =  Object.keys(form).every(key => form[key].isValid);
        console.log({formElement})
        if (isFormValid) {
            formElement.submit();
        }
    }
    
    const handleOnChange = (event) => {
       validateField(event.target);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');
        form.addEventListener('change', handleOnChange);
        form.addEventListener('keyup', handleOnChange)
        form.addEventListener('onClick', handleOnChange)
        const submitButton = document.querySelector('#submitButton');
        // default disabled
        submitButton.disabled = !form?.terms || true;
        submitButton.addEventListener('click', handleOnSubmit);
    })

/*
    Autor: Artur Domurad
    Data ukończenia: 2024-02-03
*/
