

let btn = document.getElementById("btnCalculate")
let result = document.getElementById("result")
let num1Error = document.getElementById("numOneError")
let num2Error = document.getElementById("numTwoError")
let OpError = document.getElementById("OpError")
let finalResult
let num1Status, num2status, opstatus = false

num1Error.style.display = "none"
num2Error.style.display = "none"
OpError.style.display = "none"

btn.addEventListener("click", function () {
    let num1 = document.getElementById("firstNumber")
    let num2 = document.getElementById("secondNumber")
    let operation = document.getElementById("operation")

    checkValidation(num1, num2, operation);

    if (num1Status == false && num2status == false && opstatus == false) {
        num1 = parseInt(num1.value)
        num2 = parseInt(num2.value)
        switch (operation.value) {
            case 'add':
                finalResult = num1 + num2
                break
            case 'minus':
                finalResult = num1 - num2
                break
            case 'multiply':
                finalResult = num1 * num2
                break
            case 'division':
                finalResult = num1 / num2
                break
            case "default":
                console.log("Operation Error");
                break
        }
        result.innerHTML = finalResult
        console.log(num1 + " " + operation.value + " " + num2 + " = " + result.value);

    }
    console.log(num1 + " " + operation.value + " " + num2 + " = " + result.value);


})
function checkValidation(num1, num2, operation) {
    if (num1.value == "" || num1.value == null || num1.value == undefined) {
        num1Error.style.display = "block"
        num1Status = true
    } else {
        num1Error.style.display = "none"
        num1Status = false
    }

    if (num2.value == "" || num2.value == null || num2.value == undefined) {
        num2Error.style.display = "block"
        num2status = true
    } else {
        num2Error.style.display = "none"
        num2status = false
    }

    if (operation.value == "empty") {
        OpError.style.display = "block"
        opstatus = true
    } else {
        OpError.style.display = "none"
        opstatus = false
    }
}