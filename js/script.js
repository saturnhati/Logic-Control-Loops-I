function getCurrentDate() {
    // Gets the current date and time
    let currentDate = new Date()
    // Gets the current date and time in international format with chosen options
    let currentDateINT = currentDate.toDateString('default', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
    let currentTimeINT = currentDate.toTimeString('default', { hour: '2-digit', minute: '2-digit' })
    // Gets current date and time in italian format with chosen options
    let currentDateIT = currentDate.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    let currentTimeIT = currentDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
    // Writes in HTML the current date and time in international format
    document.getElementById('current-date').innerHTML = `The current date is ${currentDateINT} and the time is ${currentTimeINT}`
    // Writes in HTML each single value (day, month, year, hours and minutes)
    document.getElementById('day').innerHTML = `Day: ${currentDate.getDate()}`
    document.getElementById('month').innerHTML = `Month: ${currentDate.getMonth()}`
    document.getElementById('year').innerHTML = `Year: ${currentDate.getFullYear()} `
    document.getElementById('hours').innerHTML = `Hours: ${currentDate.getHours()} `
    document.getElementById('minutes').innerHTML = `Minutes: ${currentDate.getMinutes()} `
    // Writes in HTML the current date and time in european format
    document.getElementById('current-date-eur').innerHTML = `La data di oggi è ${currentDateIT} e l'ora è ${currentTimeIT}`
}


// Function for clock
setInterval(() => {
    let currentDate = new Date()
    let currentTimeIT = currentDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', seconds: '2-digit' })
    document.getElementById('curr-hours').innerHTML = currentDate.getHours()
    document.getElementById('curr-minutes').innerHTML = currentDate.getMinutes()
    document.getElementById('curr-seconds').innerHTML = currentDate.getSeconds()
}, 1000);

// Function for countdown
let time = new Date()
time.setTime(1000 * 21)
let interval;

function countDown() {
    interval = setInterval(printCountDown, 10)
}

function printCountDown() {
    if (time.getTime() <= 0) {
        clearInterval(interval)
        return
    }
    let newTime = time.getTime() - 10
    time.setTime(newTime)
    document.getElementById('countdown').innerHTML = `0${time.getMinutes()}:${time.getSeconds()}`
}

function resetCountDown() {
    clearInterval(interval)
    time.setTime(1000 * 21)
    document.getElementById('countdown').innerHTML = ''
}