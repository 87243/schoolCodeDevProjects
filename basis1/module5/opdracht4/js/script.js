let cloud;
let car1;
let car2;
let car3;
let carWidth = -100;
let car2Width = 1400;
let car3Width = 1500;
let smoke;
let cloudWidth = -400;
let cloud2Width = -1240;
let tree;
let tree2;


function setup() {
    createCanvas(1280, 720);
    strokeWeight(2);
    cloud = loadImage("media/cloud.png");
    car1 = loadImage("media/car1.png");
    car2 = loadImage("media/car2.png");
    car3 = loadImage("media/car3.png");
    smoke = loadImage("media/smoke.gif");
    tree = loadImage("media/tree.png");
    tree2 = loadImage("media/tree2.png")
};

function draw() {
    background(0, 150, 255);

    fill(0, 255, 0);
    rect(0, 375, windowWidth, windowHeight);

    // Clouds:
    image(cloud, cloudWidth, 0);
    image(cloud, cloud2Width, 50);
    cloud.resize(600, 250);
    cloudWidth += 1;
    cloud2Width += 1;

    if (cloudWidth > width){
        cloudWidth -= width + cloud.width;
    };
    if (cloud2Width > width){
        cloud2Width -= width + cloud.width;
    };
    // /Clouds

    // Highway:
    drawHighway(0, 380, 1300, 30);
    // /Highway

    // Cars:
    image(car3, car3Width, 360);
    car3.resize(110,42);
    car3Width -= 4;

    if (car3Width + car3.width <= 0){
        car3Width += width + car3.width + 1000;
    };


    image(car2, car2Width, 360);
    car2.resize(110,42);
    car2Width -= 5;

    if (car2Width + car2.width <= 0){
        car2Width += width + car2.width + 1500;
    };


    image(car1, carWidth, 363);
    car1.resize(110,50);
    carWidth += 3;

    if (carWidth > width){
        carWidth -= width + car1.width + 500;
    };
    // /Cars

    // Tree:
    image(tree2, 170, 330);
    // /Tree

    // Houses:
    drawHouse(25, 400, 100, 100);
    drawHouse(150, 440, 125, 200);
    drawHouse(25, 550, 100, 125);
    // /Houses

    // Trees:
    image(tree, 400, 400);
    image(tree, 900, 500);
    image(tree, 250, 500);
    tree.resize(200, 200);

    image(tree2, 700, 300);
    image(tree2, 600, 500);
    image(tree2, 1050, 350);
    tree2.resize(150, 200);
    // /Trees
};

// Highway:
function drawHighway(highwayX, highwayY, highwayWidth, highwayHeight){
    fill(95, 106, 125);
    rect(highwayX, highwayY, highwayWidth, highwayHeight);
};

// Houses:
function drawHouse(houseX, houseY, houseWidth, houseHeight) {
    const frontY = houseY + houseHeight * .4;
    const frontHeight = houseHeight * .6;
    
    // Chimney:
    fill(255, 255, 153);
    rect((houseX + houseWidth) * .8, houseY, 20, houseHeight);
    // /Chimney

    // Chimney smoke:
    image(smoke, ((houseX + houseWidth) * .8 ) - 230, houseY - 325);
    // /Chimney smoke

    // Front:
    fill(255, 255, 153);
    rect(houseX, frontY, houseWidth, frontHeight);
    // /Front

    // Roof:
    fill(139, 69, 19);
    triangle(houseX, frontY,
    houseX + houseWidth * .5, houseY,
    houseX + houseWidth, frontY);
    
    const windowWidth = houseWidth * .25;
    const windowHeight = frontHeight * .25;
    const windowY = frontY + frontHeight * .15;
    
    const leftWindowX = houseX + houseWidth * .1;
    const rightWindowX = (houseX + houseWidth) - (houseWidth * .1) - windowWidth;
    // /Roof

    // Windows: 
    fill(50, 125, 255);
    rect(leftWindowX, windowY, windowWidth, windowHeight);
    line(leftWindowX, windowY + windowHeight * .5,
         leftWindowX + windowWidth, windowY + windowHeight * .5);
    line(leftWindowX + windowWidth * .5, windowY,
         leftWindowX + windowWidth * .5, windowY + windowHeight);
    rect(rightWindowX, windowY, windowWidth, windowHeight);
    line(rightWindowX, windowY + windowHeight * .5,
         rightWindowX + windowWidth, windowY + windowHeight * .5);
    line(rightWindowX + windowWidth * .5, windowY,
         rightWindowX + windowWidth * .5, windowY + windowHeight);
    
    const doorWidth = houseWidth * .25;
    const doorHeight = frontHeight * .4;
    const doorX = houseX + houseWidth * .5 - doorWidth * .5;
    const doorY = houseY + houseHeight - doorHeight;
    // /Windows

    // Door:
    fill(139, 69, 19);
    rect(doorX, doorY, doorWidth, doorHeight);
    
    const doorknobX = doorX + doorWidth * .2;
    const doorknobY = doorY + doorHeight * .5;
    const doorknobSize = houseWidth * .05;
    // /Door

    // Doorknob:
    fill(0);
    circle(doorknobX, doorknobY, doorknobSize);
    // /Doorknob
};
// /Houses