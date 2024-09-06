let one;
let two;
let three;
let button = document.getElementById('btn');
let parag = document.getElementById('result');
let result;


button.addEventListener('click', () => {
    one = Number(document.getElementById('grocery1').value);
    two = Number(document.getElementById('grocery2').value);
    three = Number(document.getElementById('grocery3').value);
    result = one + two + three;
    parag.innerText = `The calculated amount is: \$${result}`
});
