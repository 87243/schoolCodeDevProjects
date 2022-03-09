let bossHealth = 1000;
let damageOnClick = 10;

function attack(){
    if(bossHealth > 0){
        console.clear();
        bossHealth -= damageOnClick;
        console.log(`Boss HP: ${bossHealth}hp`);
        console.log(`Damage dealt: ${damageOnClick}hp`);
        return;
    }
    console.clear();
    console.log(`Boss HP: ${bossHealth}hp`);
    console.log(`You have killed the boss!!!`);
}