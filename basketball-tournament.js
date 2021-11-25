function solve (input){
    let index = 0;
    let counterDesiWin = 0;
    let counterOtherWin = 0;

    let nameTournament = input[index];
    index++;

    while(nameTournament !== 'End of tournaments'){

        let gameCount = Number(input[index]);
        index++;

        
        for(let i = 1; i <= gameCount; i++){

        let pointsDesi = Number(input[index]);
        index++;
        let pointsOther = Number(input[index]);
        index++;

            if(pointsDesi > pointsOther){
                counterDesiWin++;
                console.log(`Game ${i} of tournament ${nameTournament}: win with ${pointsDesi - pointsOther} points.`);
            }
            if(pointsOther > pointsDesi){
                counterOtherWin++;
                console.log(`Game ${i} of tournament ${nameTournament}: lost with ${pointsOther - pointsDesi} points.`);
            }

        }
        
        nameTournament = input[index];
        index++;
    }
    
    let games = counterOtherWin + counterDesiWin;

    console.log(`${(counterDesiWin/games*100).toFixed(2)}% matches win`);
    console.log(`${(counterOtherWin/games*100).toFixed(2)}% matches lost`);

}
solve([
    'Dunkers',
    2,
    75,
    65,
    56,
    73,
    'Fire Girls',
    3,
    67,
    34,
    83,
    98,
    66,
    45,
    'End of tournaments'
])