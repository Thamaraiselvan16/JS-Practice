function convert(){
    const celsiusVal=Number(document.getElementById("input").value);
    const Fahrenheit=(celsiusVal * (9/5))+32;
    const result=document.getElementById("result")
    result.innerHTML=Fahrenheit+" Fahrenheit"


}