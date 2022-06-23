console.log(`product = ${product}`);

let createNewDiv = document.createElement(`div`);
let amount = 0;

if(product == `burger1`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Luger burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger2`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Le pigeon burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger3`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Double animal style burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger4`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>The original burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger5`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Whiskey king burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger6`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>The company burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger7`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Chargrilled Burger with Roquefort Cheese</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger8`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Dyer’s Deep-Fried Burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger9`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>The Lola Burger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
if(product == `burger10`){
    createNewDiv.id = `orderProductDiv`;
    createNewDiv.innerHTML = `
        <img src="../media/${product}.jpg" alt="">
        <h1>Cheeseburger</h1>
        <h2>€5,00</h2>
        <input type="text" value="1" id="amountInput">
        <a onclick="substract()">-</a>
        <a onclick="add()">+</a>
        <br>
        <a onclick="order()">Bestel</a>
        <a onclick="pay()">Reken af</a>
    `;
}
document.body.appendChild(createNewDiv);

function substract(){
    amount = parseInt(document.getElementById("amountInput").value);
    if(amount > 1){
        document.getElementById("amountInput").value = amount - 1;
    }
}

function add(){
    amount = parseInt(document.getElementById("amountInput").value);
    document.getElementById("amountInput").value = amount + 1;
}

function order(){
    
}

function pay(){
    amount = document.getElementById("amountInput").value;
    window.location.href = `../pay?product=${product}&amount=${amount}`;
}