function solve (input){
    let index = 0;
    let first = input[index];
    index++;
    let second = input[index];
    index++;
    index = 2;
    let firstPointsCount = 0;
    let secondPointsCount = 0;
    let numberWar = false;

    let command = input[index]
    
    while(command !== 'End of game'){
        let firstCard = Number(command)
        index++;
        let secondCard = Number(input[index])

        if(firstCard > secondCard) {
            firstPointsCount += (firstCard - secondCard);
            break;
        }

        if(firstCard < secondCard) {
            secondPointsCount += (secondCard - firstCard);
            break;
        }

        // if(firstCard > secondCard){
        //     firstPointsCount += (firstCard - secondCard)

        // }else if(firstCard < secondCard){
        //     secondPointsCount += (secondCard - firstCard)

        // }else{
            numberWar = true;
            console.log(`Number wars!`);
            firstCard = input[index];
            index++;
            secondCard = input[index];
            if (firstCard < secondCard)  {
                console.log(`${first} is winner with ${firstPointsCount} points`);
                break;
            } else {
                console.log(`${first} is winner with ${secondPointsCount} points`);
                break;
            }
            // }else{
            // }
            // break;

        // }

        index++;
        command = input[index]
        
    }
    if(!numberWar){
        console.log(`${first} has ${firstPointsCount} points`);
        console.log(`${second} has ${secondPointsCount} points`);
    }
}
solve([
    'Desi',
'Niki',
7,
5,
3,
4,
3,
3,
5,
3
])