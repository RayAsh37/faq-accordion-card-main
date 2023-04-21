//event listener to see the focused element and change css for the same element
const allHeadings = document.getElementsByTagName('h2'); // Get the <h2> element by its id
// console.log(allHeadings);

let activeQuestion = allHeadings[0];
let elementWithTwoClasses = document.querySelector(
	'.' + activeQuestion.classList[0] + '.desc'
);

activeQuestion.classList.toggle('showing');
elementWithTwoClasses.classList.toggle('show');

for (let i = 0; i < allHeadings.length; i++) {
	allHeadings[i].addEventListener('click', function () {
		//reset the previous tag if there
		if (activeQuestion === this) {
			activeQuestion.classList.toggle('showing');
			elementWithTwoClasses.classList.toggle('show');
		} else {
			activeQuestion.classList.remove('showing');
			elementWithTwoClasses.classList.remove('show');

			activeQuestion = this;
			// console.log(activeQuestion.classList[0]);
			elementWithTwoClasses = document.querySelector(
				'.' + activeQuestion.classList[0] + '.desc'
			);
			// console.log(elementWithTwoClasses);
			//change the state for that tag
			activeQuestion.classList.toggle('showing');
			elementWithTwoClasses.classList.toggle('show');
			// console.log(elementWithTwoClasses.classList);
		}
	});
}
