function solve(input){
    let index = 0;
    let nameAct = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    let countJury = Number(input[index]);
    index++;
    let taken = false;

    for(let i = 1; i <= countJury; i++){
        let nameJury = input[index];
        index++;
        let scoreJury = Number(input[index]);
        index++;
        let counter = 0;
        for(let j = 1; j <= nameJury.length; j++){
            counter++;
        }
        score += (counter * scoreJury / 2);

        if(score > 1250.5){
            taken = true;
            break;
        }
    }
    if(taken){
        console.log(`Congratulations, ${nameAct} got a nominee for leading role with ${(score).toFixed(1)}!`);
    }
    if(!taken){
        console.log(`Sorry, ${nameAct} you need ${(1250.5 - score).toFixed(1)} more!`);
    }
}
solve([
    'Sandra Bullock',
    340,
    5,
    'Robert De Niro',
    50,
    'Julia Roberts',
    40.5,
    'Daniel Day-Lewis',
    39.4,
    'Nicolas Cage',
    29.9,
    'Stoyanka Mutafova',
    33

])