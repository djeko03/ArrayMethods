const startBtn = document.getElementsByClassName('startButton')[0];
const answerInp = document.querySelector('#answerInput');
const resetBtn = document.getElementsByClassName('resetButton')[0];




startBtn.addEventListener('click', getNum);
resetBtn.addEventListener('click', reloadInterval);

function reloadInterval() {
    window.location.reload();
}

function getNum() {
    let num = prompt('Введите число от 0 до 2000000: ');
    let evenNum = [];
    if(num > 0 && num <= 2000000){
            for (i = 0; i <= num ; i += 2) {
                evenNum.push(i);
                answerInp.value = ('Чётных чисел: ' + evenNum.length);
            } 
    } else {
        alert('Надо ввести число от 0 до 2000000');
        reloadInterval();
    }
    console.log(evenNum);
}