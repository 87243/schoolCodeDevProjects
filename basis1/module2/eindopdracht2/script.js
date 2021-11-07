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

let ministerieMoney1JSInput = 0;

let ministerieMoney1JS2 = 0;
let ministerieMoney2JS2 = 0;
let ministerieMoney3JS2 = 0;
let ministerieMoney4JS2 = 0;
let ministerieMoney5JS2 = 0;
let ministerieMoney6JS2 = 0;
let ministerieMoney7JS2 = 0;
let ministerieMoney8JS2 = 0;
let ministerieMoney9JS2 = 0;
let ministerieMoney10JS2 = 0;
let ministerieMoney11JS2 = 0;
let ministerieMoney12JS2 = 0;

document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;

//send money to ministerie on button click (proper)
function sendMoneyB2(){
    moneyAddExpected = 0;
    let allMoneySendInputs = document.querySelectorAll("input");
    let value2 = 0;

    let moneySendInput1HigherThan0 = false;
    let moneySendInput2HigherThan0 = false;
    let moneySendInput3HigherThan0 = false;
    let moneySendInput4HigherThan0 = false;
    let moneySendInput5HigherThan0 = false;
    let moneySendInput6HigherThan0 = false;
    let moneySendInput7HigherThan0 = false;
    let moneySendInput8HigherThan0 = false;
    let moneySendInput9HigherThan0 = false;
    let moneySendInput10HigherThan0 = false;
    let moneySendInput11HigherThan0 = false;
    let moneySendInput12HigherThan0 = false;

    let allMoneySendInputsHigherThan0 = false;

    let allInputsTotal = 0;

    //sum of all inputs
    let value3 = 0;
    let value4 = 0;
    for(let i = 0; i < allMoneySendInputs.length; i++) {
        value2 += allMoneySendInputs[i].valueAsNumber; //check every input
        console.log();
        console.log("value2= "+value2);
        console.log("i= "+i);
        //if the input is not a NaN make ministerieMoney*JS the input
        if(isNaN(value2) == false){ //if an input is not a NaN
            // value4 = value2;
            // value3 = value2; //sum of all inputs
            // console.log(value3);
            // console.log("geen NaN");

            if(i == 0){
                ministerieMoney1JS = allMoneySendInputs[0].valueAsNumber
            }
            if(i == 1){
                ministerieMoney2JS = allMoneySendInputs[1].valueAsNumber
            }
            if(i == 2){
                ministerieMoney3JS = allMoneySendInputs[2].valueAsNumber
            }
            if(i == 3){
                ministerieMoney4JS = allMoneySendInputs[3].valueAsNumber
            }
            if(i == 4){
                ministerieMoney5JS = allMoneySendInputs[4].valueAsNumber
            }
            if(i == 5){
                ministerieMoney6JS = allMoneySendInputs[5].valueAsNumber
            }
            if(i == 6){
                ministerieMoney7JS = allMoneySendInputs[6].valueAsNumber
            }
            if(i == 7){
                ministerieMoney8JS = allMoneySendInputs[7].valueAsNumber
            }
            if(i == 8){
                ministerieMoney9JS = allMoneySendInputs[8].valueAsNumber
            }
            if(i == 9){
                ministerieMoney10JS = allMoneySendInputs[9].valueAsNumber
            }
            if(i == 10){
                ministerieMoney11JS = allMoneySendInputs[10].valueAsNumber
            }
            if(i == 11){
                ministerieMoney12JS = allMoneySendInputs[11].valueAsNumber
            }
        }
        //if the input is a NaN make it a 0
        else if(isNaN(value2) == true){ //if an input is a NaN
            // value4 = value4 + 0;
            // console.log(value4);
            // value3 = value4;
            // console.log(value3);
            // console.log("wel NaN");

            if(i == 0){
                ministerieMoney1JS = 0;
            }
            if(i == 1){
                ministerieMoney2JS = 0;
            }
            if(i == 2){
                ministerieMoney3JS = 0;
            }
            if(i == 3){
                ministerieMoney4JS = 0;
            }
            if(i == 4){
                ministerieMoney5JS = 0;
            }
            if(i == 5){
                ministerieMoney6JS = 0;
            }
            if(i == 6){
                ministerieMoney7JS = 0;
            }
            if(i == 7){
                ministerieMoney8JS = 0;
            }
            if(i == 8){
                ministerieMoney9JS = 0;
            }
            if(i == 9){
                ministerieMoney10JS = 0;
            }
            if(i == 10){
                ministerieMoney11JS = 0;
            }
            if(i == 11){
                ministerieMoney12JS = 0;
            }
        }
        else{
            console.log("iets klopt niet1");
        }

        if(i == 0){
            if(ministerieMoney1JS >= 0){
                moneySendInput1HigherThan0 = true
            }
        }
        if(i == 1){
            if(ministerieMoney2JS >= 0){
                moneySendInput2HigherThan0 = true
            }
        }
        if(i == 2){
            if(ministerieMoney3JS >= 0){
                moneySendInput3HigherThan0 = true
            }
        }
        if(i == 3){
            if(ministerieMoney4JS >= 0){
                moneySendInput4HigherThan0 = true
            }
        }
        if(i == 4){
            if(ministerieMoney5JS >= 0){
                moneySendInput5HigherThan0 = true
            }
        }
        if(i == 5){
            if(ministerieMoney6JS >= 0){
                moneySendInput6HigherThan0 = true
            }
        }
        if(i == 6){
            if(ministerieMoney7JS >= 0){
                moneySendInput7HigherThan0 = true
            }
        }
        if(i == 7){
            if(ministerieMoney8JS >= 0){
                moneySendInput8HigherThan0 = true
            }
        }
        if(i == 8){
            if(ministerieMoney9JS >= 0){
                moneySendInput9HigherThan0 = true
            }
        }
        if(i == 9){
            if(ministerieMoney10JS >= 0){
                moneySendInput10HigherThan0 = true
            }
        }
        if(i == 10){
            if(ministerieMoney11JS >= 0){
                moneySendInput11HigherThan0 = true
            }
        }
        if(i == 11){
            if(ministerieMoney12JS >= 0){
                moneySendInput12HigherThan0 = true
            }
        }

        value2 = value3;
        console.log("sum of all inputs= "+value3);
    }

    if(moneySendInput1HigherThan0 == true && moneySendInput2HigherThan0 == true && moneySendInput3HigherThan0 == true && moneySendInput4HigherThan0 == true && moneySendInput5HigherThan0 == true && moneySendInput6HigherThan0 == true && moneySendInput7HigherThan0 == true && moneySendInput8HigherThan0 == true && moneySendInput9HigherThan0 == true && moneySendInput10HigherThan0 == true && moneySendInput11HigherThan0 == true && moneySendInput12HigherThan0 == true){
        allMoneySendInputsHigherThan0 = true;
        allInputsTotal = ministerieMoney1JS + ministerieMoney2JS + ministerieMoney3JS + ministerieMoney4JS + ministerieMoney5JS + ministerieMoney6JS + ministerieMoney7JS + ministerieMoney8JS + ministerieMoney9JS + ministerieMoney10JS + ministerieMoney11JS + ministerieMoney12JS;
        console.log("allInputsTotal= "+allInputsTotal);
        moneyAddExpected = allInputsTotal;
        let moneyLeftJSExpected = moneyLeftJS - moneyAddExpected;
        if(moneyLeftJSExpected >= 0){
            moneyLeftJS = moneyLeftJS - allInputsTotal;
            moneyLeftJSFormatted = formatter.format(moneyLeftJS);
            document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;

            ministerieMoney1JS2 = ministerieMoney1JS2+ministerieMoney1JS;
            document.getElementById("ministerieMoney1").innerHTML = formatter.format(ministerieMoney1JS2);

            ministerieMoney2JS2 = ministerieMoney2JS2+ministerieMoney2JS;
            document.getElementById("ministerieMoney2").innerHTML = formatter.format(ministerieMoney2JS2);

            ministerieMoney3JS2 = ministerieMoney3JS2+ministerieMoney3JS;
            document.getElementById("ministerieMoney3").innerHTML = formatter.format(ministerieMoney3JS2);

            ministerieMoney4JS2 = ministerieMoney4JS2+ministerieMoney4JS;
            document.getElementById("ministerieMoney4").innerHTML = formatter.format(ministerieMoney4JS2);

            ministerieMoney5JS2 = ministerieMoney5JS2+ministerieMoney5JS;
            document.getElementById("ministerieMoney5").innerHTML = formatter.format(ministerieMoney5JS2);

            ministerieMoney6JS2 = ministerieMoney6JS2+ministerieMoney6JS;
            document.getElementById("ministerieMoney6").innerHTML = formatter.format(ministerieMoney6JS2);

            ministerieMoney7JS2 = ministerieMoney7JS2+ministerieMoney7JS;
            document.getElementById("ministerieMoney7").innerHTML = formatter.format(ministerieMoney7JS2);

            ministerieMoney8JS2 = ministerieMoney8JS2+ministerieMoney8JS;
            document.getElementById("ministerieMoney8").innerHTML = formatter.format(ministerieMoney8JS2);

            ministerieMoney9JS2 = ministerieMoney9JS2+ministerieMoney9JS;
            document.getElementById("ministerieMoney9").innerHTML = formatter.format(ministerieMoney9JS2);

            ministerieMoney10JS2 = ministerieMoney10JS2+ministerieMoney10JS;
            document.getElementById("ministerieMoney10").innerHTML = formatter.format(ministerieMoney10JS2);

            ministerieMoney11JS2 = ministerieMoney11JS2+ministerieMoney11JS;
            document.getElementById("ministerieMoney11").innerHTML = formatter.format(ministerieMoney11JS2);

            ministerieMoney12JS2 = ministerieMoney12JS2+ministerieMoney12JS;
            document.getElementById("ministerieMoney12").innerHTML = formatter.format(ministerieMoney12JS2);
        }
    }
    else{
        allMoneySendInputsHigherThan0 = false;
        console.log("you typed a negative number, you cannot do that");
    }

    console.log("sum of all inputs2= "+value3);
    console.log("moneySendInput1HigherThan0= "+moneySendInput1HigherThan0);
    console.log("moneySendInput2HigherThan0= "+moneySendInput2HigherThan0);
    console.log("moneySendInput3HigherThan0= "+moneySendInput3HigherThan0);
    console.log("moneySendInput4HigherThan0= "+moneySendInput4HigherThan0);
    console.log("moneySendInput5HigherThan0= "+moneySendInput5HigherThan0);
    console.log("moneySendInput6HigherThan0= "+moneySendInput6HigherThan0);
    console.log("moneySendInput7HigherThan0= "+moneySendInput7HigherThan0);
    console.log("moneySendInput8HigherThan0= "+moneySendInput8HigherThan0);
    console.log("moneySendInput9HigherThan0= "+moneySendInput9HigherThan0);
    console.log("moneySendInput10HigherThan0= "+moneySendInput10HigherThan0);
    console.log("moneySendInput11HigherThan0= "+moneySendInput11HigherThan0);
    console.log("moneySendInput12HigherThan0= "+moneySendInput12HigherThan0);

    //check if input1 is higher than 0, not lower than 0 and is not a NaN
    // console.log("input1= "+allMoneySendInputs[0].valueAsNumber);
    // if(isNaN(allMoneySendInputs[0].valueAsNumber) == false && allMoneySendInputs[0].valueAsNumber >= 0){
    //     console.log("0 or higher");
    // }
    // else if(isNaN(allMoneySendInputs[0].valueAsNumber) == true){
    //     console.log("it's a NaN")
    // }
    // else{
    //     console.log("not 0 or higher");
    // }

    //check if all inputs are higher than 0, not lower than 0 and is not a NaN
    // if(isNaN(allMoneySendInputs[0].valueAsNumber) == false && allMoneySendInputs[0].valueAsNumber >= 0 && isNaN(allMoneySendInputs[1].valueAsNumber) == false && allMoneySendInputs[1].valueAsNumber >= 0){
    //     console.log("0 or higher");
    // }
    // else if(isNaN(allMoneySendInputs[0].valueAsNumber) == true){
    //     console.log("it's a NaN")
    // }
    // else{
    //     console.log("not 0 or higher");
    // }


    // moneyAddExpected = allInputsTotal;
    // let moneyLeftJSExpected = moneyLeftJS - moneyAddExpected;
    // if(moneyLeftJSExpected >= 0){
    //     moneyLeftJS = moneyLeftJS - value3;
    //     moneyLeftJSFormatted = formatter.format(moneyLeftJS);
    //     document.getElementById("moneyLeftHTML").innerHTML = "Jouw aantal geld over = "+moneyLeftJSFormatted;
    //     if(isNaN(allMoneySendInputs[0].valueAsNumber) == false){
    //         ministerieMoney1JS = ministerieMoney1JS+allMoneySendInputs[0].valueAsNumber;
    //         document.getElementById("ministerieMoney1").innerHTML = formatter.format(ministerieMoney1JS);
    //     }
    //     if(isNaN(allMoneySendInputs[1].valueAsNumber) == false){
    //         ministerieMoney2JS = ministerieMoney2JS+allMoneySendInputs[1].valueAsNumber;
    //         document.getElementById("ministerieMoney2").innerHTML = formatter.format(ministerieMoney2JS);
    //     }
    //     if(isNaN(allMoneySendInputs[2].valueAsNumber) == false){
    //         ministerieMoney3JS = ministerieMoney3JS+allMoneySendInputs[2].valueAsNumber;
    //         document.getElementById("ministerieMoney3").innerHTML = formatter.format(ministerieMoney3JS);
    //     }
    //     if(isNaN(allMoneySendInputs[3].valueAsNumber) == false){
    //         ministerieMoney4JS = ministerieMoney4JS+allMoneySendInputs[3].valueAsNumber;
    //         document.getElementById("ministerieMoney4").innerHTML = formatter.format(ministerieMoney4JS);
    //     }
    //     if(isNaN(allMoneySendInputs[4].valueAsNumber) == false){
    //         ministerieMoney5JS = ministerieMoney5JS+allMoneySendInputs[4].valueAsNumber;
    //         document.getElementById("ministerieMoney5").innerHTML = formatter.format(ministerieMoney5JS);
    //     }
    //     if(isNaN(allMoneySendInputs[5].valueAsNumber) == false){
    //         ministerieMoney6JS = ministerieMoney6JS+allMoneySendInputs[5].valueAsNumber;
    //         document.getElementById("ministerieMoney6").innerHTML = formatter.format(ministerieMoney6JS);
    //     }
    //     if(isNaN(allMoneySendInputs[6].valueAsNumber) == false){
    //         ministerieMoney7JS = ministerieMoney7JS+allMoneySendInputs[6].valueAsNumber;
    //         document.getElementById("ministerieMoney7").innerHTML = formatter.format(ministerieMoney7JS);
    //     }
    //     if(isNaN(allMoneySendInputs[7].valueAsNumber) == false){
    //         ministerieMoney8JS = ministerieMoney8JS+allMoneySendInputs[7].valueAsNumber;
    //         document.getElementById("ministerieMoney8").innerHTML = formatter.format(ministerieMoney8JS);
    //     }
    //     if(isNaN(allMoneySendInputs[8].valueAsNumber) == false){
    //         ministerieMoney9JS = ministerieMoney9JS+allMoneySendInputs[8].valueAsNumber;
    //         document.getElementById("ministerieMoney9").innerHTML = formatter.format(ministerieMoney9JS);
    //     }
    //     if(isNaN(allMoneySendInputs[9].valueAsNumber) == false){
    //         ministerieMoney10JS = ministerieMoney10JS+allMoneySendInputs[9].valueAsNumber;
    //         document.getElementById("ministerieMoney10").innerHTML = formatter.format(ministerieMoney10JS);
    //     }
    //     if(isNaN(allMoneySendInputs[10].valueAsNumber) == false){
    //         ministerieMoney11JS = ministerieMoney11JS+allMoneySendInputs[10].valueAsNumber;
    //         document.getElementById("ministerieMoney11").innerHTML = formatter.format(ministerieMoney11JS);
    //     }
    //     if(isNaN(allMoneySendInputs[11].valueAsNumber) == false){
    //         ministerieMoney12JS = ministerieMoney12JS+allMoneySendInputs[11].valueAsNumber;
    //         document.getElementById("ministerieMoney12").innerHTML = formatter.format(ministerieMoney12JS);
    //     }
    // } else if(isNaN(moneyLeftJSExpected) == true){
    //     window.alert("Dat is geen getal");
    // } else{
    //     window.alert("Je hebt te weinig geld");
    // } 
}