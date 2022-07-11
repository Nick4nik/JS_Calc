function start(path, index, oldV, newV) {
	if (path.includes(index)) {
		let variant = confirm("Hello. It`s time to create calc with prompts and console. Or you can choose new. Yes = old version. No = new version.");

		if (variant) {
			window.location.href = "oldVersion.html";
		}
		else {
			window.location.href = "newVersion.html";
		}
	}
	else if (path.includes(oldV)) {
		alert("Watch to the console for results. For another operation reload this page");
		oldVersion();
	}
	else if (path.includes(newV)) {
		newVersion();
	}
}

function oldVersion() {
	let a;
	let b;
	let c;

	function firstStep() {
		a = prompt("Enter the first number", 0);

		if (isNaN(a)) {
			alert("You value is incorrect. This page will reload");
			document.location.reload();
		}

		a = Number(a);
		console.log("First number is:", a);
	}

	function secondStep() {
		b = prompt("Enter the action", "---");

		if (b == "*" || b == "/" || b == "-" || b == "+") {
			console.log("You action is:", b);
		}
		else {
			alert("You value is incorrect. This page will reload");
			document.location.reload();
		}
	}

	function thirdStep() {
		c = prompt("Enter the second number", 0);

		if (isNaN(c)) {
			alert("You value is incorrect. This page will reload");
			document.location.reload();
		}

		c = Number(c);
		console.log("Second number is:", c);
	}

	function calculate(a, b, c) {
		let result;
		switch (b) {
			case "*":
				result = a * c;
				break;
			case "/":
				result = a / c;
				break;
			case "-":
				result = a - c;
				break;
			case "+":
				result = a + c;
				break;
		}
		console.log(`The result of the operation "${a} ${b} ${c}" is "${result}"`);
		console.log("Result is:", result);
	}

	firstStep();

	if (a != undefined) {
		secondStep();
	}

	if (b != undefined) {
		thirdStep();
	}

	if (c != undefined) {
		calculate(a, b, c);
	}

}

function newVersion() {
	alert("Sorry. This page is still under development");
}

let path = document.documentURI;
let index = "index.html";
let oldV = "oldVersion.html";
let newV = "newVersion.html";

start(path, index, oldV, newV);