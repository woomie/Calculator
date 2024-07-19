// function to display an element in the top div
var input;
var secondInput;
var selectedOperator;
var answer;
var flag;
var storeInputs=[];
var storeOperators;
var displayText


//function to display whatever number was pressed
function getInput(){
    $(".grid-item").on("click", function(){
        input=($(this).text());
        storeValues();
        displayText=$(".display").text();
        $(".display").text(displayText + input);
    } );
}
    
//function to know what operator was pressed 
function getOperator(){
    $(".grid-operator").on("click", function(){
        selectedOperator=($(this).text());
        //store the current input then clear and store the next input
        clear();
    })
}
function storeValues(){
       // storeInputs.push(input);
        //storeOperators=selectedOperator;
        //console.log(storeInputs);
        if (input) {  // Ensure input is not undefined or empty
            storeInputs.push(input);
            console.log(storeInputs);
        } else {
    
            console.log('No input to store');
}
}

//function to handle the equals button
function equals(){

}

//function to handle clear button
function clear(){
    $(".display").text(" ");
}

//function to handle decimal button

//funtion to handle percentage button

//funtion to handle plus or minus button


//function to update display
getInput();
getOperator();
storeValues();
