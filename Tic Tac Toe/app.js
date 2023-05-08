let music = new Audio ('music.mp3')
let audioturn = new Audio("ting.mp3");
let gameOver = new Audio('gameover.mp3')
let Turn = "X"
let isgameOver = false

function changeTurn() {
    return Turn === "X" ? "0" : "X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('text');
    let win = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach (e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = `${boxtexts[e[0]].innerText} Won`;
        isgameOver=true;
    }
    });

}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let  text = element.querySelector('.text');
    element.addEventListener('click' , () => {
            if (text.innerText === '') {
                text.innerText = Turn;
                Turn = changeTurn();
                audioturn.play();
                checkWin();
                if (!isgameOver){
                document.getElementsByClassName('info')[0].innerText = `Turn For  ${Turn}`;
                }
            }
        })
});

reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach( (element) => {
        element.innerText = ""
    });
    Turn = 'X';
    isgameOver = false;
    document.getElementsByClassName('info')[0].innerText = `Turn For  ${Turn}`;
})
