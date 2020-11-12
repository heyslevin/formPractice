//Selectors
let inputsNode = document.querySelectorAll("input");
let inputs = [...inputsNode];

//Checks
// if (!inputs[0].validity.valid) {
// 	inputs[0].setCustomValidity("fuck");
// } else {
// 	inputs[0].setCustomValidity("");
// }

let validityCheck = function (event) {
	let input = event.target;
	input.setCustomValidity("");

	if (input.checkValidity()) {
		input.setCustomValidity("");
	} else {
		// input.innerHTML += "<p>Very nice!</p>";
		input.setCustomValidity("wrong");
	}
};

//Events

inputs.forEach((input) => {
	input.addEventListener("keyup", validityCheck);
});
