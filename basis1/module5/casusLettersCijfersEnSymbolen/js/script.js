let input = "";
let output = "";

document.getElementById("inputHtml").value = "";
document.getElementById("outputHtml").value = "";

function enigma(){
    output = "";
    input = document.getElementById("inputHtml").value;

    for (let i = 0; i < input.length; i++){
        if (String.fromCharCode(input.charCodeAt(i)) == "z"){
            output += "a";
        }
        else if (String.fromCharCode(input.charCodeAt(i)) == "Z"){
            output += "A";
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
    output += String.fromCharCode(input.charCodeAt(number) + 1);
};

function reset(){
    input = "";
    output = "";
    document.getElementById("inputHtml").value = "";
    document.getElementById("outputHtml").value = "";
};