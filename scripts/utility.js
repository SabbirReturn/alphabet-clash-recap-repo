function addElementById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function removeElementById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
let alphabets = alphabetString.split('')

let randomNumber = Math.random * 25;
let number = Math.round(randomNumber);
let alphabet = alphabets[number];

function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    let randomNumber = Math.random()*25;
    let index = Math.round(randomNumber);
    let alphabet = alphabets[index];
    return alphabet;
}

function setInnerText(elementId,value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}
function setBackGroundColor(elementId){
    let element = document.getElementById(elementId);
    let backgroundColor = element.classList.add('bg-orange-400');
    return backgroundColor;
}