//initializing the variables i neeed
var input="";
var storedInput =[];
var selectedOperator="";
var result=0;

//add an event listner for numbers 
$(".grid-item").on("click", function() {
    getInput($(this).text());
    
});

//an event listener for the operators
$(".grid-operator").on("click", function() {
    getOperator($(this).text());
});

//an event listener for the equals
$(".grid-equals").on("click", function() {
    performCalculation();
   
});

//an event listener for the clear
$(".grid-clear").on("click", function() {
    clear();
    
});

//function to show what input was entered
function getInput(number) {
    // Append the number to input
    input += number;
    // Update the display
    $(".display").text(input);
    
}

 function getOperator(operate){
    storedInput.push(input);
    selectedOperator=operate;

    // console.log(selectedOperator);
    //clear the input and display for next input
    input = '';
    $(".display").text('');
 }

 //clear function that clears the display and just shows 0
 function clear(){
    $(".display").text("0");
    input="";
    operator="";
    storedInput=[];
 }

 function performCalculation(){
    storedInput.push(input);
    // Convert the last two inputs to numbers
    var num1 = Number(storedInput[storedInput.length - 2]);
    var num2 = Number(storedInput[storedInput.length - 1]);
    
    // Perform the calculation based on selectedOperator
    if (selectedOperator === '+') { 
        result = num1 + num2;
    } else if (selectedOperator === '−') {
        result = num1 - num2;
    } else if (selectedOperator === '×') {
        result = num1 * num2;
    } else if (selectedOperator === '÷') {
        result = num1 / num2;
    }
    else if (selectedOperator === '%') {
        result = num1 / num2;
    }

    // Update the display with the result
    $(".display").text(result);
    
    // Reset input and storeInputs for the next calculation
    input = '';
    storeInputs = [];
 }