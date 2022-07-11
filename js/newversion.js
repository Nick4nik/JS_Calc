var firstValue, secondValue, action;
var IsEnd = true;

function print(value) {
	textInput.value += value;
	if (IsEnd) {
		textShow.value += value;
	}
	else {
		IsEnd = true;
		textShow.value = value;
	}
}

function reset() {
	textInput.value = textShow.value = firstValue = secondValue = action = null;
}

function check(value) {
	if (firstValue != 0) {
		checkAction(value);
	}
	else {
		firstValue = 0;
		textShow.value = 0;
		checkAction(value);
	}
}

function checkAction(value) {
	switch (value) {
		case "/":
			firstValue = textShow.value;
			textInput.value = "";
			textShow.value += " / ";
			action = 1;
			break;
		case "*":
			firstValue = textShow.value;
			textInput.value = "";
			textShow.value += " * ";
			action = 2;
			break;
		case "-":
			firstValue = textShow.value;
			textInput.value = "";
			textShow.value += " - ";
			action = 3;
			break;
		case "+":
			firstValue = textShow.value;
			textInput.value = "";
			textShow.value += " + ";
			action = 4;
			break;
	}
}

function calculate() {
	switch (action) {
		case 1:
			textShow.value = firstValue / secondValue;
			break;
		case 2:
			textShow.value = firstValue * secondValue;
			break;
		case 3:
			textShow.value = firstValue - secondValue;
			break;
		case 4:
			textShow.value = firstValue + secondValue;
			break;
	}
}

function calc() {
	secondValue = textInput.value;
	textInput.value = null;
	firstValue = Number(firstValue);
	secondValue = Number(secondValue);
	IsEnd = false;
	calculate();
}