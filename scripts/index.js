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
    let screen = document.getElementById('screen');
    let currentAlphabet = screen.innerText
    let expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPress === expectedAlphabet){
        let scoreElementId = document.getElementById('score');
        let scoreElement = scoreElementId.innerText;
        let score = parseInt(scoreElement);
        let updateScore = score +1;
        let oldScore = document.getElementById('score');
        oldScore.innerText = updateScore;
        continueGame();
        removeBackGroundColor(expectedAlphabet);
    }
    else{
        
    }

    
}
document.addEventListener('keyup',keyUpPressBtn)

