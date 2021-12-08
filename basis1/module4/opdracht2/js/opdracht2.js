function go(){
    let number = document.getElementById("inputNumber").value;
    document.getElementById("divJS").innerHTML = "";
    for(let i = 0; i < number; i++){
        let i2 = i + 1;
        document.getElementById("divJS").innerHTML += "<p>Ik feliciteer je "+i2+"</p>";
    }
}