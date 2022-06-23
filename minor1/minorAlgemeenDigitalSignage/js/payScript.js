let buttonPressCount = 0;

document.getElementById("priceH2").innerHTML = `€${amount * 5},00`;

function pinButton(button){
    if(button != 11){
        buttonPressCount++;
        document.getElementById("enteredPinH1").innerHTML += "*";
    }
    if(button == 11){
        if(buttonPressCount == 4){
            console.log("Ok button presses are 4 so you can continue");
            window.location.href = `../`;
        }
        else{
            console.log("Button presses are not 4 so you can't continue");
            buttonPressCount = 0;
            document.getElementById("enteredPinH1").innerHTML = "";
            document.getElementById("errorH2").innerHTML = "Je moet eerst een 4 lange PIN invoeren voordat je verder kan gaan.";
        }
    }
}