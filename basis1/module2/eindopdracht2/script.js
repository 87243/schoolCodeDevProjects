let moneyJS = 330000000;
let ministeriesJS = "";
let inputId = 0;
document.getElementById("money").innerHTML = "Jouw aantal geld over: "+moneyJS;
console.log(moneyJS);

function addMinisterieBJS() {
    let addMinisterieIJS = document.getElementById("addMinisterieI").value;
    console.log("a: "+addMinisterieIJS);

    inputId = inputId+1;
    console.log("inputId: "+inputId);

    ministeriesJS = ministeriesJS+"<p>"+addMinisterieIJS+"</p><input id='"+"input"+inputId+"' type='text'><br>";
    document.getElementById("ministeries").innerHTML = ministeriesJS+"<br><br><button id='sendMoneyB' onclick='sendMoneyB()'>Stuur geld</button>";
    console.log("b: "+ministeriesJS);
}

function sendMoneyB(){
    
}