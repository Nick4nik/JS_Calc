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
	let a = prompt("Enter the first number", 0);

	if (isNaN(a)) {
		alert("You value is incorrect. This page will reload");
		document.location.reload();
	}

	a = Number(a);
	console.log("First number is:", a);

	let b = prompt("Enter the action", "---");

	if (b == "*" || b == "/" || b == "-" || b == "+") {
		console.log("You action is:", b);
		nextStep();
	}
	else {
		alert("You value is incorrect. This page will reload");
		document.location.reload();
	}

	function nextStep() {
		let c = prompt("Enter the second number", 0);
		c = Number(c);

		if (isNaN(c)) {
			alert("You value is incorrect. This page will reload");
			document.location.reload();
		}

		console.log("Second number is:", c);

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
			return console.log(`The result of the operation "${a} ${b} ${c}" is "${result}"`);
		}
	}



	calculate(a, b, c);
}

function newVersion() {
	alert("Sorry. This page is still under development");
}

let path = document.documentURI;
let index = "index.html";
let oldV = "oldVersion.html";
let newV = "newVersion.html";

start(path, index, oldV, newV);