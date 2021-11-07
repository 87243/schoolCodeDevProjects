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
let moneyLeftJS = 330000000;
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

//send money to ministerie on button click
function sendMoneyB(clicked_id){
    let clicked = clicked_id.substring(1); //=input1
    let mMJS = "ministerieMoney"+clicked.substring(5); //=ministerieMoney1
    moneyAddExpected = 0;
    moneyAddExpected = moneyAddExpected+parseInt(document.getElementById(clicked).valueAsNumber);
    let moneyLeftJSExpected = moneyLeftJS - moneyAddExpected;
    if(moneyLeftJSExpected >= 0){
        if(mMJS == "ministerieMoney1"){
            ministerieMoney1JS = ministerieMoney1JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney1JS);
        }
        if(mMJS == "ministerieMoney2"){
            ministerieMoney2JS = ministerieMoney2JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney2JS);
        }
        if(mMJS == "ministerieMoney3"){
            ministerieMoney3JS = ministerieMoney3JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney3JS);
        }
        if(mMJS == "ministerieMoney4"){
            ministerieMoney4JS = ministerieMoney4JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney4JS);
        }
        if(mMJS == "ministerieMoney5"){
            ministerieMoney5JS = ministerieMoney5JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney5JS);
        }
        if(mMJS == "ministerieMoney6"){
            ministerieMoney6JS = ministerieMoney6JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney6JS);
        }
        if(mMJS == "ministerieMoney7"){
            ministerieMoney7JS = ministerieMoney7JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney7JS);
        }
        if(mMJS == "ministerieMoney8"){
            ministerieMoney8JS = ministerieMoney8JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney8JS);
        }
        if(mMJS == "ministerieMoney9"){
            ministerieMoney9JS = ministerieMoney9JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney9JS);
        }
        if(mMJS == "ministerieMoney10"){
            ministerieMoney10JS = ministerieMoney10JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney10JS);
        }
        if(mMJS == "ministerieMoney11"){
            ministerieMoney11JS = ministerieMoney11JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney11JS);
        }
        if(mMJS == "ministerieMoney12"){
            ministerieMoney12JS = ministerieMoney12JS+parseInt(document.getElementById(clicked).valueAsNumber);
            document.getElementById(mMJS).innerHTML = formatter.format(ministerieMoney12JS);
        }
        moneyLeftJS = moneyLeftJS - document.getElementById(clicked).valueAsNumber;
        moneyLeftJSFormatted = formatter.format(moneyLeftJS);
        document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;
    } else if(isNaN(moneyLeftJSExpected) == true){
        window.alert("Dat is geen getal");
    } else{
        window.alert("Je hebt te weinig geld");
    }
}