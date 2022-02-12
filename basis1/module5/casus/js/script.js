let input = "";
let output = "";

document.getElementById("inputHtml").value = "";
document.getElementById("outputHtml").value = "";

function enigma(){
    output = "";
    input = document.getElementById("inputHtml").value;

    for (let i = 0; i < input.length; i++){
        if (/[a-zA-Z ]/.test(String.fromCharCode(input.charCodeAt(i))) == true){
            if (String.fromCharCode(input.charCodeAt(i)) == "z"){
                output += "a";
            }
            else if (String.fromCharCode(input.charCodeAt(i)) == "Z"){
                output += "A";
            }
            else if (String.fromCharCode(input.charCodeAt(i)) == " "){
                output += " ";
            }
            else{
                nextCharacter(input, i);
            };
        }
        else{
            document.getElementById("outputHtml").value = "Je mag alleen letters invullen";
            return;
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