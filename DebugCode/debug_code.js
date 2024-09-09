function checking(op){
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/"){
        return true;
    }
}
function performOperation(){
    // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let op = document.getElementById("input3");

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)){
        let result;
        // Validate the operator used
        if (checking(op.value)) {
            alert("Please input a valid operator: (+, -, *, /)");
            op.value = '';
            return;
        } else {
            result = performOps(num1, num2, op.value);
        }

        // Display the result
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

function performOps(a, b, op){
    // Introduce a debugger statement to pause execution
    debugger;
    let resultOps;
    if (op === "+") {
            resultOps = a + b;
    }   else if (op === "-") {
            resultOps = a - b;
    }
    // Multiply the numbers
        else if (op === "*"){
            resultOps = a * b;
    }   else if (op === "/") {
            resultOps = a / b;
    } else {
        alert("Error");
    }
    return resultOps;

}

function displayResult(result){
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}