let btn = document.querySelectorAll('.main-btn');

let p = document.querySelector('.para').previousElementSibling


for(let i of btn) {
    i.addEventListener('click', (e)=> {
        console.log(i)
        i.setAttribute('disabled', 'disabled');
        alert('Bord updated Successful')
        let event = e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        // alert(event)
        let paragaraph = `You have completed the task ${event} at ${updateClock()}`
        console.log(paragaraph)
        let discript = document.getElementById('discript');
        discript.innerHTML +=  `
        <p>
        ${paragaraph}
        </p>`
        let task = document.querySelector('.task');
        
    })
}
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds} PM`
}
