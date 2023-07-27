const numBtn = document.querySelector('.num-btn');

const buttonValue = document.getElementById('btn1');

let value = buttonValue.value;
console.log(value);

numBtn.addEventListener('click', () => {
	numBtn.style.backgroundColor = 'orange';
	numBtn.style.color = 'white';
});

// TODO - toggle style with buttons
