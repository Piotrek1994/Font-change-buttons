const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let x = 36
const up = () => {
	x++
	p.style.fontSize = x + 'px'
}

const down = () => {
	if (x > 20) {
		x--
		p.style.fontSize = x + 'px'
	}
}

const colorChange = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	p.style.color = `rgb(${r},${g},${b})`
}

colorBtn.addEventListener('click', colorChange)
sizeUp.addEventListener('click', up)
sizeDown.addEventListener('click', down)
