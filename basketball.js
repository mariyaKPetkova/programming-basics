function solve (input){
    let index = 0;
    let inputData = input[index++];
    let countWinGame = 0;
    let countLostGame = 0;
    while(inputData !== 'End of tournaments'){
        let nameTournament = inputData
        let countGames = +input[index++];
        
        for(let i = 1;i <= countGames;i++){
            let desiPoints = +input[index++];
            let otherPoints = +input[index++];
            if(desiPoints > otherPoints){
                countWinGame++;
                console.log(`Game ${i} of tournament ${nameTournament}: win with ${desiPoints-otherPoints} points.`);
            }else{
                countLostGame++;
                console.log(`Game ${i} of tournament ${nameTournament}: lost with ${otherPoints-desiPoints} points.`);
            }
        }
        inputData= input[index++]
    } 
    let totalCountGame = countLostGame+countWinGame;

    console.log(`${(countWinGame/totalCountGame*100).toFixed(2)}% matches win`);
    console.log(`${(countLostGame/totalCountGame*100).toFixed(2)}% matches lost`);
}
solve()