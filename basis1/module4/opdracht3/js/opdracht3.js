function go(){
    let number = document.getElementById("inputNumber").value;
    document.getElementById("divJS").innerHTML = "";
    let i = 0
    while(i < number){
        i++;
        document.getElementById("divJS").innerHTML += "<p>Ik feliciteer je "+i+"</p>";
    }
}