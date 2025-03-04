let btn = document.querySelectorAll('.main-btn');
let totalBtn = btn.length;
let btnIncrease = 0;
let p = document.querySelector('.para').previousElementSibling
let discript = document.getElementById('discript');
let history = document.querySelector('.history');
let randomeColor = document.querySelector('#randomeColor');
for(let i of btn) {
    i.addEventListener('click', (e)=> {
        i.setAttribute('disabled', 'disabled');
        alert('Bord updated Successful')
        let event = e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        // alert(event)
        let paragaraph = `You have completed the task ${event} at ${updateClock()}`
        discript.innerHTML +=  `
        <p>
        ${paragaraph}
        </p>`;
            btnIncrease++;
            if(btnIncrease === totalBtn) {
                alert('congrates!!! You have completed all Current task')
            }
        increase()
    })
}
// even
let task = document.querySelector('.task');
let increaseT = document.querySelector('.increase');
let count1 = 6;
let count2 = 25;
function increase() {
    count2++;
   count1--;
   task.innerText = count1;
   increaseT.innerText = count2;
}


function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds} PM`
}

history.addEventListener('click', ()=> {
    discript.innerHTML = ''
})
randomeColor.addEventListener('click', ()=> {
    document.body.style.backgroundColor = randomeColors();
})
console.log()
function randomeColors() {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    return `rgba(${color1} ${color2} ${color3})`
}
