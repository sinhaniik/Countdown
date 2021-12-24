const newDate = prompt('enter any date');

const date =newDate

const dayss = document.getElementById ('day')
const hourss = document.getElementById ('hour')
const minutess = document.getElementById ('minute')
const secondss = document.getElementById ('second')

// new Date()
// console.log(new Date())
function countDown(){
    const destiny = new Date(date) 
    const currentDate = new Date()

    const seconds = (destiny - currentDate) / 1000

    const daysLeft = Math.floor(seconds/ 3600 / 24)

    const hoursLeft = Math.floor(seconds/ 3600 ) % 24

    const minutesLeft = Math.floor(seconds / 60) %60

    const secondsLeft = Math.floor(seconds % 60)
    
    dayss.innerHTML = daysLeft
    hourss.innerHTML = hoursLeft
    minutess.innerHTML = minutesLeft
    secondss.innerHTML = secondsLeft
}

countDown();



   setInterval(countDown,1000)
