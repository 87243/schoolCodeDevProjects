// global variables
const myContent = document.getElementById("content");
let gold;
let goats;
let pigs;
let cows;
let elephants;
let tigers;
let giraffes;
let dragons;
let animals = {goats, pigs, cows, elephants, tigers, giraffes, dragons};

// global functions
function addGold(goldToAdd){
    console.trace();

    if(gold == null){
        gold = goldToAdd;
        goldCounter = document.createElement("h2");
        goldCounter.id = "goldCounter";
        goldCounter.innerHTML = "Gold: " + gold;
        myContent.appendChild(goldCounter);
    }
    else{
        gold += goldToAdd;
        document.getElementById("goldCounter").innerHTML = "Gold: " + gold;
    }

    // check for events on current gold level
    checkGold();
}

function checkGold(){
    if(gold >= 50 && document.getElementById("goatBuyButton") == null){
        let buttonBar = document.createElement("div");

        buttonBar.id = "buttonBar";
        let buyButton = document.createElement("button");

        buyButton.id = "goatBuyButton";
        buyButton.innerHTML = "Buy Goat (50g)";
        buyButton.addEventListener("click", ()=>buyAnimal("goat"));
        myContent.appendChild(buttonBar);
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 90 && document.getElementById("pigBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "pigBuyButton";
        buyButton.innerHTML = "Buy Pig (90g)";
        buyButton.addEventListener("click", ()=>buyAnimal("pig"));
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 120 && document.getElementById("cowBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "cowBuyButton";
        buyButton.innerHTML = "Buy Cow (120g)";
        buyButton.addEventListener("click", ()=>buyAnimal("cow"));
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 200 && document.getElementById("elephantBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "elephantBuyButton";
        buyButton.innerHTML = "Buy Elephant (200g)";
        buyButton.addEventListener("click", ()=>buyAnimal("elephant"));
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 250 && document.getElementById("tigerBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "tigerBuyButton";
        buyButton.innerHTML = "Buy Tiger (250g)";
        buyButton.addEventListener("click", ()=>buyAnimal("tiger"));
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 300 && document.getElementById("giraffeBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "giraffeBuyButton";
        buyButton.innerHTML = "Buy Giraffe (300g)";
        buyButton.addEventListener("click", ()=>buyAnimal("giraffe"));
        buttonBar.appendChild(buyButton);
    }

    if(gold >= 500 && document.getElementById("dragonBuyButton") == null){
        let buttonBar = document.getElementById("buttonBar");
        let buyButton = document.createElement("button");

        buyButton.id = "dragonBuyButton";
        buyButton.innerHTML = "Buy Dragon (500g)";
        buyButton.addEventListener("click", ()=>buyAnimal("dragon"));
        buttonBar.appendChild(buyButton);
    }
}

function buyAnimal(animal) {
    let itemBar = document.getElementById('itemBar');

    if(itemBar == null){
        itemBar = document.createElement("div");
        itemBar.id = "itemBar";
        myContent.appendChild(itemBar);
    }

    switch (animal) {
        case "":
            //do something, don't and forget the break;
        case "goat":

            if(gold >= 50){
                addGold(-50);

                if(animals.goats == null){
                    animals.goats = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "goats";
                    myElement.innerHTML = "Goat Quantity: " + animals.goats;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.goats += 1;
                document.getElementById("goats").innerHTML = "Goat Quantity: " + animals.goats;
            }

            break;
        case "pig":

            if(gold >= 90){
                addGold(-90);

                if(animals.pigs == null){
                    animals.pigs = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "pigs";
                    myElement.innerHTML = "Pig &nbsp;&nbsp;Quantity: " + animals.pigs;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.pigs += 1;
                document.getElementById("pigs").innerHTML = "Pig Quantity: " + animals.pigs;
            }

            break;
        case "cow":

            if(gold >= 120){
                addGold(-120);

                if(animals.cows == null){
                    animals.cows = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "cows";
                    myElement.innerHTML = "Cow Quantity: " + animals.cows;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.cows += 1;
                document.getElementById("cows").innerHTML = "Cow Quantity: " + animals.cows;
            }

            break;
        case "elephant":

            if(gold >= 200){
                addGold(-200);

                if(animals.elephants == null){
                    animals.elephants = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "elephants";
                    myElement.innerHTML = "Elephant Quantity: " + animals.elephants;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.elephants += 1;
                document.getElementById("elephants").innerHTML = "Elephant Quantity: " + animals.elephants;
            }

            break;
        case "tiger":

            if(gold >= 250){
                addGold(-250);

                if(animals.tigers == null){
                    animals.tigers = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "tigers";
                    myElement.innerHTML = "Tiger Quantity: " + animals.tigers;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.tigers += 1;
                document.getElementById("tigers").innerHTML = "Tiger Quantity: " + animals.tigers;
            }

            break;
        case "giraffe":

            if(gold >= 300){
                addGold(-300);

                if(animals.giraffes == null){
                    animals.giraffes = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "giraffes";
                    myElement.innerHTML = "Giraffe Quantity: " + animals.giraffes;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.giraffes += 1;
                document.getElementById("giraffes").innerHTML = "Giraffe Quantity: " + animals.giraffes;
            }

            break;
        case "dragon":

            if(gold >= 500){
                addGold(-500);

                if(animals.dragons == null){
                    animals.dragons = 1;
                    let myElement = document.createElement("div");

                    myElement.id = "dragons";
                    myElement.innerHTML = "Dragon Quantity: " + animals.dragons;
                    itemBar.appendChild(myElement);
                    return;
                }

                animals.dragons += 1;
                document.getElementById("dragons").innerHTML = "Dragon Quantity: " + animals.dragons;
            }

            break;
        default:
            console.log("geen dier gevonden");
    }
}

function passiveGold(){
    let goldToAdd = 0;

    if(animals.goats > 0){
        goldToAdd += animals.goats*5; //50=>5 10=>1
    }

    if(animals.pigs > 0){
        goldToAdd += animals.pigs*10; //90=>10 9=>1
    }

    if(animals.cows > 0){
        goldToAdd += animals.cows*15; //120=>15 8=>1
    }

    if(animals.elephants > 0){
        goldToAdd += animals.elephants*20; //200=>20 ?
    }

    if(animals.tigers > 0){
        goldToAdd += animals.tigers*30; //250=>30 ?
    }

    if(animals.giraffes > 0){
        goldToAdd += animals.giraffes*50; //300=>50 ?
    }

    if(animals.dragons > 0){
        goldToAdd += animals.dragons*100; //500=>100 ?
    }

    addGold(goldToAdd);
}

// add elements
function addGoldButton(){
    let myButton = document.createElement("button");

    myButton.addEventListener("click", ()=>addGold(1)); // add one
    myButton.innerHTML = "Add Gold!";
    myContent.appendChild(myButton);
}

// start application
addGoldButton();
setInterval(passiveGold, 5000);