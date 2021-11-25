function highJump (input){
    let index = 0;
    let wantedHigh = Number(input[index]);
    index++;
    index = 1;

    let currentTry = Number(input[index]);
    index++;

    let currentHigh = 0;
    let failed = false;
    let totalJumpCounter = 1;

    currentHigh = wantedHigh - 30;

    while (wantedHigh >= currentTry){

        let counterThreeJump = 1;

        while(currentHigh >= currentTry){
            counterThreeJump++;
            if(counterThreeJump > 3){
                failed = true;
                break;
            }
            currentTry = Number(input[index]);
            index++;
        }
        if(failed){
            totalJumpCounter += 2;
            break;
        }
        currentHigh += 5;
        totalJumpCounter += counterThreeJump;
        counterThreeJump = 0;
        currentTry = Number(input[index]);
        index++;
    }
    if(failed){
        console.log(`Tihomir failed at ${currentHigh}cm after ${totalJumpCounter} jumps.`)
    }
    if(!failed){
    console.log(`Tihomir succeeded, he jumped over ${wantedHigh}cm after ${totalJumpCounter} jumps.`);
    }
}
highJump([
    231,
    205,
    212,
    213,
    228,
    229,
    230,
    235
    ])