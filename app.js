const form = document.getElementById('form');
const ratingStateId = document.getElementById('rating-state');
const thanksStateId = document.getElementById('thanks-state');
const rateChoice = document.querySelectorAll('input.rate');
const resultSentence = document.getElementById('result-sentence');

form.addEventListener('submit', displayThanks);

function displayThanks(event) {
    event.preventDefault();
    console.log(rateChoice);
		for (var i = 0; i < rateChoice.length; i++) {
			if ( rateChoice[i].checked === true ) break;
		}
    resultSentence.innerHTML = `You selected `+ rateChoice[i].value +` out of 5`;
    const ratingStateNone = ratingStateId.className = "rating-state-none";
    const thanksStateActive = thanksStateId.className = "thanks-state-active";
}
