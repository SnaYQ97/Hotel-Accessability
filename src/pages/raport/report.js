const urlParams = new URLSearchParams(location.search);
const report = {}

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

const REPORT_OBJECT = {
    name: "",
    surname: "",
    idNumber: "",
    numberOfNights: "",
    depositPin: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    extraServices: "",
    terms: ""
}

urlParams.forEach((value, key) => {
    if (urlParams.getAll(key).filter(onlyUnique).length > 1) {
        return report[key] = urlParams.getAll(key);
    }
    return report[key] = urlParams.get(key);
    
});

console.log({report})

const reportElement = document.querySelector('#report');


Object.keys(report).forEach(key => {
    console.log({key, value: report[key]})
    const element = document.createElement('div');
    element.classList.add('element');
    const label = document.createElement('div');
    label.classList.add('label');
    label.innerText = key;
    const value = document.createElement('div');
    value.classList.add('value');
    value.innerText = Array.isArray(report[key]) ? report[key].join(', ') : report[key];
    element.appendChild(label);
    element.appendChild(value);
    reportElement.appendChild(element)
})

/*
    Autor: Artur Domurad
    Data ukończenia: 2024-02-03
*/
