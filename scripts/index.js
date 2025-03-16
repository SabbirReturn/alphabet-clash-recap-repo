function play(){
    addElementById('home')
    removeElementById('playGround')
    addElementById('scoreSection');
    setInnerText('life',5);
    setInnerText('score',0);
    continueGame();
}

function continueGame(){
    let alphabet = getRandomAlphabet();
    setInnerText('screen',alphabet);
    setBackGroundColor(alphabet)
}
function keyUpPressBtn(event){
    let playerPress = event.key;
    if(playerPress === 'Escape'){
        gameOver();
    }
    let screen = document.getElementById('screen');
    let currentAlphabet = screen.innerText
    let expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPress === expectedAlphabet){
        let scoreElement = getElementValueById('score')
        let updateScore = scoreElement +1;
        setInnerText('score',updateScore);
        continueGame();
        removeBackGroundColor(expectedAlphabet);
    }
    else{
        let lifeElement = getElementValueById('life');
        let updateLife = lifeElement-1;
        setInnerText('life',updateLife);
        if(updateLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',keyUpPressBtn)

function gameOver(){
    addElementById('playGround');
    removeElementById('scoreSection');
    let updateScore = getElementValueById('score');
    setInnerText('updatedScore',updateScore);
    let currentAlphabet = getElementTextById('screen');
    removeBackGroundColor(currentAlphabet); 
}
