'use strict';


let num=Math.trunc(Math.random()*20)+1;
let score=20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click',
function (){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        document.querySelector('.message').textContent='No number';
    }else if (guess===num){
        document.querySelector('.number').textContent=num;
        document.querySelector('.message').textContent='Correct';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if (score > highestScore) {
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }
    }else if (guess>num){
        if (score>0){
            document.querySelector('.message').textContent='Too high';
            score--;
        }
    }else if (guess <num){
        if (score>0){
            document.querySelector('.message').textContent='Too low';
            score--;
        }
    }
    document.querySelector('.score').textContent = score;

    if (score===0){
        document.querySelector('.message').textContent='You lost';
    }
});

document.querySelector('.again').addEventListener('click', function (){
    score=20;
    num=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#000000';
    document.querySelector('.guess').value=null;
})
