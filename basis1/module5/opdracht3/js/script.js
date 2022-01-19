let sounds = ["sound0", "sound1", "sound2", "sound3"];

document.body.addEventListener("keyup", function(event){
    funkyTime(event.key);
});

function funkyTime(button){
    if (button == "a" || button == "A"){
        new Audio(`media/${sounds[0]}.mp3`).play();
    };
    if (button == "s" || button == "S"){
        new Audio(`media/${sounds[1]}.mp3`).play();
    };
    if (button == "d" || button == "D"){
        new Audio(`media/${sounds[2]}.mp3`).play();
    };
    if (button == "f" || button == "F"){
        new Audio(`media/${sounds[3]}.mp3`).play();
    };
};