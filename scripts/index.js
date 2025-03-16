function play(){
    addElementById('home')
    removeElementById('playGround')
    continueGame();
}

function continueGame(){
    let alphabet = getRandomAlphabet();
    setInnerText('screen',alphabet);
    setBackGroundColor(alphabet)
}
function keyUpPressBtn(event){
    let playerPress = event.key;
    console.log(playerPress);
    let screen = document.getElementById('screen');
    let currentAlphabet = screen.innerText
    let expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet);


    
}
document.addEventListener('keyup',keyUpPressBtn)

