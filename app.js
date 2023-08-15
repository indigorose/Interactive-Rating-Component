const numberButtons = document.querySelectorAll('.num-btn');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card = document.querySelector('.container');
const submitButton = document.getElementById('sub-btn');
const backButton = document.getElementById('back-btn');

let value = 0;

// Toggle number buttons with style changes
function selectButton() {
	numberButtons.forEach((button) => button.classList.remove('selected'));
	this.classList.add('selected');
	// Obtain value of button to insert into the second card.
	value = this.value;
	console.log(value);
	document.getElementById('value').innerHTML = value;
}

// Event listener for each button to change color.
numberButtons.forEach((button) => {
	button.addEventListener('click', selectButton);
});

// Change card on submit button

submitButton.addEventListener('click', function () {
	card.classList.toggle('is-flipped');
});

// Change button back
