//list of all variables:
//HTML:
//ID's:
//moneyLeftHTML, addMinisterieInputHTML, addMinisterieButtonHTML, ministeries, ministerieMoney+[inputId], input+[inputId], ainput+[inputId]
//classes:
//input
//JS:
//formatter, moneyLeftJS, ministeriesJS, inputId, addMinisterieIJS, clicked, value1, value2, i, mMJS, mMJSV

//format bedrag
const formatter = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0
})

//clear variables on page load/reload
let moneyLeftJS = 330000000;
let ministeriesJS = "";
let inputId = 0;
document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+formatter.format(moneyLeftJS);
console.log("Jouw aantal geld over = "+formatter.format(moneyLeftJS));
console.log("moneyLeftJS= "+moneyLeftJS)

//add ministerie on button click
function addMinisterieButtonFunction() {
    moneyLeftJS = 330000000;
    document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+formatter.format(moneyLeftJS);
    let addMinisterieIJS = document.getElementById("addMinisterieInputHTML").value;
    inputId = inputId+1;
    // let ministerieMoney0,inputId = 0;
    ministeriesJS = ministeriesJS+"<p>"+addMinisterieIJS+"</p><p id='ministerieMoney"+inputId+"'>0</p><input class='input' id='input"+inputId+"' type='number'><button id='ainput"+inputId+"' onclick='sendMoneyB(this.id)'>Verstuur geld</button><br>";
    document.getElementById("ministeries").innerHTML = ministeriesJS;
    console.log("addMinisterieIJS= "+addMinisterieIJS+" | inputId= "+inputId+" | ministeriesJS= "+ministeriesJS);
}

//send money to ministerie on button click
function sendMoneyB(clicked_id){
    let clicked = clicked_id.substring(1); //=input1
    console.log("clicked.substring(1)= "+clicked);
    let value1 = document.querySelectorAll(".input");
    console.log("value1= "+value1);

    let value2 = 0;
    for(let i = 0; i < value1.length; i++) {
        value2 += value1[i].valueAsNumber;
    }

    let mMJS = "ministerieMoney"+clicked.substring(5); //=ministerieMoney1
    console.log("mMJS clicked.substring(5)= "+mMJS);
    console.log(document.getElementById(mMJS));
    let mMJSV = parseInt(document.getElementById(mMJS).textContent); //=get value from ministerie total
    console.log("mMJSV= "+mMJSV);
    console.log(mMJS+" | "+clicked+" | "+mMJSV);
    console.log("mMJSV+clicked= "+document.getElementById(mMJSV));
    // document.getElementById(ministerieMoney0+clicked).innerHTML = parseInt(document.getElementById(ministerieMoney0+clicked).textContent)+document.getElementById(clicked).valueAsNumber;
    // document.getElementById(mMJS).innerHTML = parseInt(document.getElementById(mMJS).textContent)+document.getElementById(ministerieMoney+clicked).valueAsNumber;
    document.getElementById(mMJS).innerHTML = parseInt(document.getElementById(mMJS).textContent)+document.getElementById(clicked).valueAsNumber;
    
    console.log(value2);
    console.log(document.getElementById(mMJS).innerHTML);
    
    // moneyLeftJS = unformatter.format(moneyLeftJS) - unformatter.format(document.getElementById(clicked).valueAsNumber);
    moneyLeftJS = moneyLeftJS - document.getElementById(clicked).valueAsNumber;
    // document.getElementById("money").innerHTML = "Jouw aantal geld over = "+formatter.format(moneyLeftJS);
    document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+formatter.format(moneyLeftJS);
}