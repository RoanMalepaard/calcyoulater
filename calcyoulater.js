// calc you later
var displayResult = document.getElementById("result");
var numberButtons = document.getElementsByClassName("number");
var clear = document.getElementById('clear');
var operator = document.getElementsByClassName("operator"); 
var equals = document.getElementById("equals");
var getal1 = '';
var getal2 = '';
var op = undefined;
var newCalc = false; // om nieuwe berekening te maken na het maken van een berekening

// functies voor de operators
function add(number1, number2) {
    return number1 + number2; // maakt de plus berekening
}

function subtract(number1, number2) {
    return number1 - number2; // maakt de min berekening
}

function multiply(number1, number2) {
    return number1 * number2; // maakt de keer berekening
}

function divide(number1, number2) {
    return number1 / number2; // maakt de gedeeld door berekening
}

// function operate om de berekening te maken
function operate(operator, number1, number2) {
 if(!checkDivisionZero(operator, number2)) { //als het niet door 0 gedeeld wordt
   var result;
   if(operator == 'add'){
     result = add(number1, number2);
   } else if(operator == 'subtract'){
     result = subtract(number1, number2);
   } else if(operator == 'multiply'){
     result = multiply(number1, number2);
   } else if(operator == 'divide'){
     result = divide(number1, number2);
   }
   
   return result; // maak de berekening
 }
 return 0; // anders voer checkDivisionZero uit en geef 0 terug
}

// om de operator type te zetten en gebruiken
for (let i = 0; i < operator.length; i++){ 
 operator[i].onclick = function(){
  newCalc = false;
  if (getal1 === undefined){ 
  }
  else if (getal2 === undefined){ 
  }
  if (op === undefined){
   op = this.id; // zet operator type (plus min gedeeld door of keer)
   displayResult.innerHTML += this.innerHTML; // laat het zien op het schermpje
  }
  else {
   if (getal1 !== undefined && getal2 !== undefined && op !== undefined){
    // uitrekenen
    showResult(); 
    op = this.id; // zet operator type (plus min gedeeld door of keer)
   displayResult.innerHTML += this.innerHTML; // operator op schermpje zetten
    
   }
  }
 }
}

// wat er geberut als je op = drukt
var showResult = function() {
	if (getal1 !== '' && getal2 !== ''){
 var resultaat = operate(op, Number(getal1), Number(getal2))//uitrekenen (operate)
 displayResult.innerHTML = resultaat; //resultaat in scherm zetten
 getal1 = resultaat;
 op = undefined;
 getal2 = ''; //getal1, getal2, op terugzetten zodat je een nieuwe berekening kan maken
 newCalc = true;
	}
	
}
equals.onclick = showResult; // laat berekening zien als je op = drukt

// om de calc en t schermpje te resetten
var ClearHandler = function () {
     displayResult.innerHTML = 0; // laat 0 zien op scherm
     getal1 = '';
     getal2 = '';
     op = undefined; // getal 1, getal2 en op 'reset'
}
clear.onclick = ClearHandler;  // reset de berekening en de html

// wat er gebeurt als je op een nummer klikt
for(var i=0; i < numberButtons.length; i++) { 
	numberButtons[i].onclick = function() {	// voor iedere knop met een nummer om het getal te declareren
	  if(this.innerHTML === ","){
	   if (displayResult.innerHTML.includes('.')){
		return;
	   } // checkt of er al een . in zit
	   else {
		return displayResult.innerHTML += ","; // zet de . erbij
	   }
	  }
	  if (displayResult.innerHTML === "0"){
	   displayResult.innerHTML = this.innerHTML; // haalt de nul weg en laat de nummers zien
	  }
	  else {
	   displayResult.innerHTML += this.innerHTML; // laat de nummers zien
	  }
	  if(op === undefined) { // om een nieuwe berekening te maken na er op = is gedrukt
		  if(newCalc === true) {
			  newCalc = false; 
			  displayResult.innerHTML = this.innerHTML;
			  getal1 = this.innerHTML;

		  }
		  else {
			getal1 += this.innerHTML;
		  }
	   } else {
		getal2 += this.innerHTML;
	   }
	}
}

// Looks for any division by zero to prevent a crash and resets calculator
function checkDivisionZero(operator, getal2) {
	if (operator == 'divide' && getal2 == 0) { // check division by 0
		alert("Wat probeer je?");
		ClearHandler(); //resets calculator
		return true;
	}
 return false;
}
// changes opacity when button is pressed
var knop = document.querySelectorAll('button');
var knopArr = [...knop];

for(var i=0; i < knopArr.length; i++) { 
  knopArr[i].onmousedown = function() {
   this.style.opacity = '.7';
  }
  knopArr[i].onmouseup = function() {
   this.style.opacity = '1';
  }
}
 
