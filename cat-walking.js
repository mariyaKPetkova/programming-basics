function solve(arg1,arg2,arg3){
    let minWalking = Number(arg1);
    let countWalking = Number(arg2);
    let kcal = Number(arg3);

    let burnedKcal = countWalking * minWalking * 5;
    let neededBurnedK = kcal / 2;

    if(burnedKcal >= neededBurnedK){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedKcal}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedKcal}.`);
    }
}
solve(
    '40',
    '2',
    '300'
)