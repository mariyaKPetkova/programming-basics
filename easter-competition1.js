function easterCompetition (input){
    let index = 0;
    let countBake = +input[index++];
    let maxPoint = 0;
    let winner = '';
    for(let i = 1; i <= countBake;i++){
        let nameChef = input[index++];
        let inputData = input[index++];
        let points = 0;
        while(inputData !== 'Stop'){
            let grade = +inputData;
            points += grade;

            inputData = input[index++];
        }
        console.log(`${nameChef} has ${points}`);
        
        if(points > maxPoint ){
            maxPoint = points;
            winner = nameChef;
            console.log(`${nameChef} is the new number 1!`);
        }
    }
    console.log(`${winner}won competition with ${maxPoint} points!`);
}
easterCompetition([
    '2',
    'Chef Angelov',
    '1',
    '2',
    '3',
    'Stop',
    'Chef Rowe',
    '1',
    '2',
    '3',
    '4',
    'Stop'
  ])