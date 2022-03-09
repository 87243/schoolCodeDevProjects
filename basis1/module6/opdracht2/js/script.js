let bossHealth = 1000;
let damageOnClick = 11;

function attack(){
    try{
        if(bossHealth > 0){
            console.clear();
            bossHealth -= damageOnClick;
            console.log(`Boss HP: ${bossHealth}hp`);
            console.log(`Damage dealt: ${damageOnClick}hp`);
            return;
        }
        if(bossHealth < 0){
            throw 1;
        }
        console.clear();
        console.log(`Boss HP: ${bossHealth}hp`);
        console.log(`You have killed the boss!!!`);
    }
    catch(err){
        if(err == 1){
            console.clear();
            console.log("Error: boss health is negative");
        }
    }
}