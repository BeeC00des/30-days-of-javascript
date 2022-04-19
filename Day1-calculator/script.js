// Declare variables

let number = document.querySelectorAll(".num"),
    operator = document.querySelectorAll(".sign"),
    Input = document.getElementById("input"),
    Output = document.getElementById("output"),
    clear = document.getElementById("clear"),
    lastChar = document.getElementById("lastChar"),
    resultStatus = false


// adding click hander to input value

for (var i = 0; i < number.length ; i++){
    number[i].addEventListener("click", function(e){

       var currentVal = input.innerHTML;
       var lastVal = currentVal[currentVal - 1]

        // add value
       if (resultStatus === false){
            input.innerHTML += e.target.innerHTML

       } // add number after operator
       else if (resultStatus === true && lastVal === "+" || lastVal=== "-" || lastVal === "×" || lastVal === "÷"){
           resultStatus = false;
           input.innerHTML += e.target.innerHTML

       } // clear box after last number then restart
       else{
            resultStatus = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML  
       }
    })
}


// adding operator
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e){

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        
        //change operator selected
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
          } else if (currentString.length == 0) {
            // if first key pressed is an opearator, don't do anything
            console.log("enter a number first");
          } else {
            // else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
          }  
    })
}

// result operation logic
result.addEventListener("click", function() {

    var inputVal = input.innerHTML;
    
    var numbers = inputVal.split(/\D/g);
    numbers = numbers.filter(function(val) {
        return /\S/.test(val);
    });

    var operators = inputVal.replace(/[0-9]|\.|\=/g,'').split("");
    operators = operators.filter(function(el){
        return /\S/.test(el);
    })


    console.log(inputVal);  
    console.log(numbers);
    console.log(operators);
  
    
    var divide = operators.indexOf("/");
    console.log(divide)
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("*");
    console.log(multiply);
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  
    var subtract = operators.indexOf("-");
    console.log(subtract);
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    var add = operators.indexOf("+");
    console.log(add);
    while (add != -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
    
    output.innerHTML = numbers[0];
    resultStatus = true; 
});


// clear input 

clear.addEventListener("click", function(){
    input.innerHTML = " ";
})
   


// clear single character
lastChar.addEventListener("click", function(){
    var currentVal = input.innerHTML;
    var lastVal = currentVal.slice(0, -1)

    input.innerHTML = lastVal;
})
