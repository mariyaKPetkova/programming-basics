function solve(input){
    let index = 0;
    let name = input[index];
    index++;
    let countGame = Number(input[index]);
    index++;

    let pointsW = 0;
    let pointsD = 0;
    let counterL = 0;

    if (countGame === 0) return console.log(`${name} hasn't played any games during this season.`);

    for(let i = 1; i <= countGame; i++){
        
        let result = input[index];
        index++;

        switch(result){
            case "W":
                pointsW += 3;
            break;
            case "D":
                pointsD += 1;
            break;
            case "L":
                counterL++;
            break;
        }
    }
        console.log(`${name} has won ${pointsD+pointsW} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${pointsW/3}`);
        console.log(`## D: ${pointsD}`);
        console.log(`## L: ${counterL}`);
        console.log(`Win rate: ${((pointsW/3)*100/countGame).toFixed(2)}%`);
}
solve([
    'Liverpool', '10',
    'W',         'D',
    'D',         'W',
    'L',         'W',
    'D',         'D',
    'W',         'W'
  ])