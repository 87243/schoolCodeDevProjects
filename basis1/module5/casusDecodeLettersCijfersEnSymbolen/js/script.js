let input = "";
let output = "";

document.getElementById("inputHtml").value = "";
document.getElementById("outputHtml").value = "";

function enigma(){
    output = "";
    input = document.getElementById("inputHtml").value;

    for (let i = 0; i < input.length; i++){
        if (String.fromCharCode(input.charCodeAt(i)) == "a"){
            output += "z";
        }
        else if (String.fromCharCode(input.charCodeAt(i)) == "A"){
            output += "Z";
        }
        else if (String.fromCharCode(input.charCodeAt(i)) == " "){
            output += " ";
        }
        else if (String.fromCharCode(input.charCodeAt(i)) == "\n"){
            output += "\n";
        }
        else{
            nextCharacter(input, i);
        };
    };

    document.getElementById("outputHtml").value = output;
};

function nextCharacter(input, number){
    output += String.fromCharCode(input.charCodeAt(number) - 1);
};

function reset(){
    input = "";
    output = "";
    document.getElementById("inputHtml").value = "";
    document.getElementById("outputHtml").value = "";
};