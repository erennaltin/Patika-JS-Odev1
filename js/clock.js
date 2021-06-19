

const nameSpan = document.querySelector("#myName")
const clock = document.querySelector("#myClock")
const name = prompt("What is your name?")
window.addEventListener("load",showTime)
nameSpan.innerHTML = name;


let checkLessThanTen = (variable) => variable < 10 ? `0${variable}`: variable
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let day = date.getDay()
days = ["Sunday","Monday", "Thursday","Wednesday","Tuesday","Friday", "Saturday"]


setInterval(() => showTime(),1000)
function showTime(){
    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    day = date.getDay()
      
    clock.innerHTML = `${checkLessThanTen(hours)}:${checkLessThanTen(minutes)}:${checkLessThanTen(seconds)} ${days[day]}`
}