// exercice: job eligibility checker

// use "radio buttons" to select any one of the followiing (highest educational qualification) illiterate , high school, ug, pg, doctorate

// eligible for job if high school or ug only. display result . use switch in js

function checkEligibility(){
    const selectEdu=document.querySelector("input[name='education']:checked");
    let result="";

    if (selectEdu){
        const eduvalue=selectEdu.value;

        switch (eduvalue){
            case "highSchool":
            case "ug":
                result="Eligible for Job!";
                break;
            default:
                result="Not Eligible an Educational Qulification."
        }

    }
    else{
        result="Please select an educational qulification.";

    }
    let resultElement=document.querySelector("#result");
    resultElement.innerHTML=result;

}
