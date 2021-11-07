//list of all variables:
//HTML:
//ID's:
//moneyLeftHTML, addMinisterieInputHTML, addMinisterieButtonHTML, ministeries
//classes:
//input
//JS:
//formatter, moneyLeftJS, moneyLeftJSFormatted, clicked, value1, value2, i, mMJS, mMJSV

//format money
const formatter = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0
});

//add/clear variables on page load/reload
let moneyLeftJS = 330000000000;
let moneyLeftJSFormatted = formatter.format(moneyLeftJS);
let moneyAddExpected = 0;
let ministerieMoney1JS = 0;
let ministerieMoney2JS = 0;
let ministerieMoney3JS = 0;
let ministerieMoney4JS = 0;
let ministerieMoney5JS = 0;
let ministerieMoney6JS = 0;
let ministerieMoney7JS = 0;
let ministerieMoney8JS = 0;
let ministerieMoney9JS = 0;
let ministerieMoney10JS = 0;
let ministerieMoney11JS = 0;
let ministerieMoney12JS = 0;

document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;

//send money to ministerie on button click (proper)
function sendMoneyB2(){
    moneyAddExpected = 0;
    let allMoneySendInputs = document.querySelectorAll("input");
    let value2 = 0;

    //sum of all inputs
    let value3 = 0;
    for(let i = 0; i < allMoneySendInputs.length; i++) {
        value2 += allMoneySendInputs[i].valueAsNumber;
        if(isNaN(value2) == false){
            value3 = value2;
        }
        else if(isNaN(value2) == true){

        }
        else{
            window.alert("Dat mag niet");
        }
        value2 = value3;
    }
    moneyAddExpected = 0;
    moneyAddExpected = value3;
    let moneyLeftJSExpected = moneyLeftJS - moneyAddExpected;
    if(moneyLeftJSExpected >= 0){
        moneyLeftJS = moneyLeftJS - value3;
        moneyLeftJSFormatted = formatter.format(moneyLeftJS);
        document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;
        if(isNaN(allMoneySendInputs[0].valueAsNumber) == false){
            ministerieMoney1JS = ministerieMoney1JS+allMoneySendInputs[0].valueAsNumber;
            document.getElementById("ministerieMoney1").innerHTML = formatter.format(ministerieMoney1JS);
        }
        if(isNaN(allMoneySendInputs[1].valueAsNumber) == false){
            ministerieMoney2JS = ministerieMoney2JS+allMoneySendInputs[1].valueAsNumber;
            document.getElementById("ministerieMoney2").innerHTML = formatter.format(ministerieMoney2JS);
        }
        if(isNaN(allMoneySendInputs[2].valueAsNumber) == false){
            ministerieMoney3JS = ministerieMoney3JS+allMoneySendInputs[2].valueAsNumber;
            document.getElementById("ministerieMoney3").innerHTML = formatter.format(ministerieMoney3JS);
        }
        if(isNaN(allMoneySendInputs[3].valueAsNumber) == false){
            ministerieMoney4JS = ministerieMoney4JS+allMoneySendInputs[3].valueAsNumber;
            document.getElementById("ministerieMoney4").innerHTML = formatter.format(ministerieMoney4JS);
        }
        if(isNaN(allMoneySendInputs[4].valueAsNumber) == false){
            ministerieMoney5JS = ministerieMoney5JS+allMoneySendInputs[4].valueAsNumber;
            document.getElementById("ministerieMoney5").innerHTML = formatter.format(ministerieMoney5JS);
        }
        if(isNaN(allMoneySendInputs[5].valueAsNumber) == false){
            ministerieMoney6JS = ministerieMoney6JS+allMoneySendInputs[5].valueAsNumber;
            document.getElementById("ministerieMoney6").innerHTML = formatter.format(ministerieMoney6JS);
        }
        if(isNaN(allMoneySendInputs[6].valueAsNumber) == false){
            ministerieMoney7JS = ministerieMoney7JS+allMoneySendInputs[6].valueAsNumber;
            document.getElementById("ministerieMoney7").innerHTML = formatter.format(ministerieMoney7JS);
        }
        if(isNaN(allMoneySendInputs[7].valueAsNumber) == false){
            ministerieMoney8JS = ministerieMoney8JS+allMoneySendInputs[7].valueAsNumber;
            document.getElementById("ministerieMoney8").innerHTML = formatter.format(ministerieMoney8JS);
        }
        if(isNaN(allMoneySendInputs[8].valueAsNumber) == false){
            ministerieMoney9JS = ministerieMoney9JS+allMoneySendInputs[8].valueAsNumber;
            document.getElementById("ministerieMoney9").innerHTML = formatter.format(ministerieMoney9JS);
        }
        if(isNaN(allMoneySendInputs[9].valueAsNumber) == false){
            ministerieMoney10JS = ministerieMoney10JS+allMoneySendInputs[9].valueAsNumber;
            document.getElementById("ministerieMoney10").innerHTML = formatter.format(ministerieMoney10JS);
        }
        if(isNaN(allMoneySendInputs[10].valueAsNumber) == false){
            ministerieMoney11JS = ministerieMoney11JS+allMoneySendInputs[10].valueAsNumber;
            document.getElementById("ministerieMoney11").innerHTML = formatter.format(ministerieMoney11JS);
        }
        if(isNaN(allMoneySendInputs[11].valueAsNumber) == false){
            ministerieMoney12JS = ministerieMoney12JS+allMoneySendInputs[11].valueAsNumber;
            document.getElementById("ministerieMoney12").innerHTML = formatter.format(ministerieMoney12JS);
        }
    } else if(isNaN(moneyLeftJSExpected) == true){
        window.alert("Dat is geen getal");
    } else{
        window.alert("Je hebt te weinig geld");
    } 
}