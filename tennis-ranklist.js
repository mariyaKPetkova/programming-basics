function solve(input){
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    index = 2;

    let points = 0;
    let winCounter = 0;
    let proWin = 0;

    let result = input[index];
    index++;

    for(let i = 1; i <= tournaments; i++){
        switch(result){
            case "W":
                points += 2000;
                winCounter++;
            break;
            case "F":
                points += 1200;
            break;
            case "SF":
                points += 720;
            break;
        }
        result = input[index];
        index++;
    }
    proWin = (winCounter/tournaments)*100
    console.log(`Final points: ${(startPoints + points)}`);
    console.log(`Average points: ${parseInt(points/tournaments)}`);
    console.log(`${proWin.toFixed(2)}%`);
}
solve([
    5,
    1400,
    'F',
    'SF',
    'W',
    'W',
    'SF'
    ])