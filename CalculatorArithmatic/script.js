// User
// exercice: calculator without buttons

// get input using a textbox. opertor can be +,-,*,/

// input fomat: operand1 operator operand2

// input example:
// 5+9
// 4/3
// 75*45
// 854-569
// display result use switch in js

function calculate(){
    const expression=document.getElementById("input").value;
    let result=0;

    const match=expression.match(/^(\d+)\s*([+\-*/])\s*(\d+)$/);

    if (match){
        const operand1=parseFloat(match[1]);
        const operator=match[2];
        const operand2=parseFloat(match[3]);

        switch (operator){
            case "+":
                result=operand1 + operand2
                break;
            case "-":
                result=operand1 - operand2
                break;
            case "*":
                result=operand1 * operand2
                break;
            case "/":
                if (operand2 !==0){
                    result=operand1 / operand2
                }
                else{
                    result="Cannot Divide By Zero"
                }
                break;
            default:
                result="Invalid Operator"
                break;
        }
    }
    else{
        result="Invalid Expression Format";
    }
    let resultElement=document.getElementById("result")
    resultElement.innerHTML=`Result is: ${result}`
}