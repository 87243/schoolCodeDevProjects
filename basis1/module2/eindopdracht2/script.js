let moneyJS = 330000000;
let ministeriesJS = "";
document.getElementById("money").innerHTML = "Jouw aantal geld over: "+moneyJS;
console.log(moneyJS);

function addMinisterieBJS() {
    let addMinisterieIJS = document.getElementById("addMinisterieI").value;
    console.log("a: "+addMinisterieIJS);
    ministeriesJS = ministeriesJS+"<p>"+addMinisterieIJS+"</p><input id='' type='text'><br>";
    document.getElementById("ministeries").innerHTML = ministeriesJS;
    console.log("b: "+ministeriesJS);
}