const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const newYears = '1 Jan 2023'

function countdown() {
	const newYearsDate = new Date(newYears)
	const currentDate = new Date()

	const totalSeconds = new Date(newYearsDate - currentDate) / 1000

	const days = Math.floor(totalSeconds / 3600 / 24)
	const hours = Math.floor(totalSeconds / 3600) % 24
	const minutes = Math.floor(totalSeconds / 60) % 60
	const seconds = Math.floor(totalSeconds % 60)

	dayEl.innerHTML = formatTime(days)
	hourEl.innerHTML = formatTime(hours)
	minuteEl.innerHTML = formatTime(minutes)
	secondEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)
