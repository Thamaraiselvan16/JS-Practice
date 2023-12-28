function calculate() {
    const unit=Number(document.getElementById("input").value);
    cost=0

//     eb bill amount caculator

// for first 50 unnits rs.0.75/unit
// for next 100 units rs.1.00/unit
// for next 100 units rs.1.30/unit
// for unit above 250 rs.1.50/unit

    if (unit<=50){
        cost=unit*0.75;
    }
    else if (unit<=150){
        cost=50 * 0.75+ (unit - 50) * 1.00;
    }
    else if (unit<=250){
        cost=50 * 0.70 + 100 * 1.00 + (unit-150) * 1.30;
    }
    else{
        cost=50 * 0.75 + 100 * 1.00 + 100 * 1.30 + (unit-250) * 1.50;
    } 

    let result=document.getElementById("result");
    result.innerHTML=`Electricity Bill Amount: Rs. ${cost.toFixed(1)}`;
}