color_object = {
    "X": "green",
    "O" : "yellow",
    'Draw': 'red'
}

let starter = document.getElementsByName('X_O')
console.log(starter)
let xx = document.getElementById('X')
let yy = document.getElementById('Y')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

objects = {
    "X":{player1},
    "O":{player2}
}
player1.defaultValue = 'X '
player2.defaultValue = 'O '

console.log(player1.value)
let Draws = document.getElementById('Draw')
let x_winner = 0
let y_winner = 0
let draw = 0
document.getElementById("starter").addEventListener('click', () =>{
    x_winner = 0;
    y_winner = 0;
    window.draw = 0;
    xx.innerText = `${player1.value} Won : ${x_winner}`;
    yy.innerText = `${player2.value} Won : ${y_winner}`; 
    restart()

})
let playerText = document.getElementById('playerText')
let array = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
let counter = 0
const Player2 = "O"
const Player1 = "X"


currentPlayer = Player1
console.log("print this")

let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
console.log(boxes)
console.log("the box", boxes)
const tikTakToe = () => {
    boxes.forEach(box => box.addEventListener('click', gamePlayed))
}
function validator_game(array){
    for (let a = 0; a < 3; a++){
        const addr = array[0][a];
        if (addr !== null){
            let arr = [];
            for (let b = 0; b < 3; b++){
                arr.push(String(b * 3 + a))
                if (array[b][a] !== addr){
                    break;
                }
                else if (b === 2){
                    arr.forEach((arr) =>{
                        document.getElementById(arr).style.backgroundColor = "white";
                    })
                    return true
                }
            }
        }
    }
    for (let x = 0; x < 3; x++){
        address = array[x][0]
        if (address !== null){
            arr = []
            for (let y = 0; y < 3; y++){
                if (array[x][y] !== address){
                    break;
                }
                else if (y === 2){
                    arr.forEach((arr) =>{
                        document.getElementById(arr).style.backgroundColor = "white";
                    })
                    return true
                }
            }
        }
    }
    if (array[0][0] === array[1][1] && array[1][1] === array[2][2] && array[0][0] !== null){
        
        return true
    }
    if (array[0][2] === array[1][1] && array[1][1] === array[2][0] && array[1][1] !== null){
        return true
    }
    return false
}
let sum = 0;
let alreadys = document.getElementById("already");
function gamePlayed(e) {
    if (!validator_game(array)){
        const id = e.target.id
        console.log(counter)
        ids = +id
        if (sum == 9){
            sum = 0;
            restart()
            
        }
        // console.log(!array[Math.floor(ids / 3)][ids % 3])
        else if(!array[Math.floor(ids / 3)][ids % 3]){
            
            sum++;
            alreadys.innerText = "";
            
            counter++;
            e.target.innerText = currentPlayer
            
            e.target.style.backgroundColor = color_object[currentPlayer]
            array[Math.floor(ids / 3)][ids % 3] = document.getElementById(id).innerText
            
            if(validator_game(array)){
                
                playerText.innerHTML = `${currentPlayer === "X"?player1:player2} has won!`
                playerText.style.color = color_object[currentPlayer]
                
                if (currentPlayer === 'X'){
                    
                    xx.innerText = `${player1.value} Won : ${++x_winner}`;
                    xx.style.color = color_object[currentPlayer]
                }
                
                else if(currentPlayer === 'O'){
                    yy.innerText = `${player2.value} Won : ${++y_winner}`;
                    yy.style.color = color_object[currentPlayer]
                }
                sum = 0;
                return;
            }

            currentPlayer = currentPlayer == Player1 ? Player2 : Player1
        }
        else{
            alreadys.innerText = `The Position is already taken by ${e.target.innerText === currentPlayer? "You.": currentPlayer == Player1 ? Player2 : Player1}`;
            console.log(alreadys.innerText)
        }
        if (counter === 9){
            
            playerText.innerHTML = `Draw`
            
            Draws.innerText = `Draw : ${++draw}`
            Draws.style.color = color_object['Draw']
        }
    }
    else{
        sum = 0;
        restart()
    } 
}

restartBtn.addEventListener('click', restart)

function restart() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            array[i][j] = null
        }
    }
    counter = 0;
    boxes.forEach( box => {
        box.innerText = '';
        box.style.backgroundColor='';
    })

    playerText.innerHTML = 'Tik Tak Toe Game'
    playerText.style.color = 'black'
    currentPlayer = Player1
}

tikTakToe()