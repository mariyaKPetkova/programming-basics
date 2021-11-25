function solve (input){
    let index = 0;
    let target = Number(input[index]);
    index++;
    let jump = Number(input[index]);
    index++;
    let currentHight = target - 30;

    let countJump = 0;
    let isFail = false;

    while(target >= jump){

        let currentHightGoal = false;

        for(let i = 1; i <= 3; i++){

            countJump++;

            if(jump > currentHight){
                currentHightGoal = true;
                break;
            }
            jump = Number(input[index]);
            index++;
        }

        if(currentHightGoal){
            currentHight += 5;
        }else{
            isFail = true;
            break;
        }

        jump = Number(input[index]);
        index++;

    }
    if(!isFail){
        if(jump > target){
    countJump++; 
    console.log(`Tihomir succeeded, he jumped over ${target}cm after ${countJump} jumps.`)
        }
    }else{
        console.log(`Tihomir failed at ${currentHight}cm after ${countJump} jumps.`);
    }
}
solve([
    231,
    205,
    212,
    213,
    228,
    229,
    230,
    235
])
