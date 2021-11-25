function solve (...input){
    
    let first = input[0];
    let second = input[1];
    
    let firstPointsCount = 0;
    let secondPointsCount = 0;
    let numberWar = false;

    let index = 2;
    let command = input[index];
    
    while(command !== 'End of game'){
        let firstCard = Number(command)
        index++;
        let secondCard = Number(input[index])

        if(firstCard > secondCard){
            firstPointsCount += (firstCard - secondCard)

        }else if(firstCard < secondCard){
            secondPointsCount += (secondCard - firstCard)

        }else{
            numberWar = true;
            console.log(`Number wars!`);
            firstCard = input[index];
            index++;
            secondCard = input[index];
            
            if (firstCard < secondCard){
                console.log(`${first} is winner with ${firstPointsCount} points`);
            }else{
                console.log(`${second} is winner with ${secondPointsCount} points`);
            }
            break;

        }

        index++;
        command = input[index]
        
    }
    if(!numberWar){
        console.log(`${first} has ${firstPointsCount} points`);
        console.log(`${second} has ${secondPointsCount} points`);
    }
}
solve(
    'Desi',
    'Niki',
    7,
    5,
    3,
    4,
    3,
    3,
    3,
    5
)