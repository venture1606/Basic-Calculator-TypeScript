var Addition = function (Number1, Number2) {
    return Number1 + Number2;
};
var Subtraction = function (Number1, Number2) {
    return Number1 - Number2;
};
var Multiply = function (Number1, Number2) {
    return Number1 * Number2;
};
var Dividing = function (Number1, Number2) {
    return Number1 / Number2;
};
var Num1 = document.getElementById('Number1');
var Num2 = document.getElementById('Number2');
var symbol = document.getElementById('Symbol');
var Proceed = document.getElementById('Submit');
var Operate = document.getElementById('Operation');
Proceed.onclick = function () {
    var Function_Call_Number = parseInt(Operate.value);
    var numeric1 = parseInt(Num1.value);
    var numeric2 = parseInt(Num2.value);
    var Result = document.createElement('h1');
    var Ans = document.getElementById('Answer-Container');
    if (Function_Call_Number === 1) {
        symbol.innerText = "+";
        Result.innerText = Addition(numeric1, numeric2);
    }
    else if (Function_Call_Number === 2) {
        symbol.innerText = "-";
        Result.innerText = Subtraction(numeric1, numeric2);
    }
    else if (Function_Call_Number === 3) {
        symbol.innerText = "*";
        Result.innerText = Multiply(numeric1, numeric2);
    }
    else if (Function_Call_Number === 4) {
        symbol.innerText = "/";
        Result.innerText = Dividing(numeric1, numeric2);
    }
    else {
        Result.innerText = "Select Operation";
    }
    Ans.appendChild(Result);
};
