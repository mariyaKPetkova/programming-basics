function solve (input){
    let index = 0;
    let days = Number(input[index]);
    index ++;
    

    let totalSavedMoney = 0;
    let winCounter = 0;
    let loseCounter = 0;

    for (let i = 0; i < days; i++){
        let command = input[index];
        index++;
        let tempMoney = 0;
        let tempWin = 0;
        let tempLose = 0;
        while (command !== 'Finish'){
            let sportType = command;    
            let result = input[index];
            index++;

            if (result === 'win'){
                tempMoney += 20;
                tempWin ++;
            }else{
                tempLose++;
            }
            command = input[index];
            index++

        }
        if (tempWin > tempLose){
            tempMoney *= 1.10;
            winCounter++;
            
        }else{
            loseCounter++;
        }
        totalSavedMoney += tempMoney;

    }

    if (winCounter > loseCounter){
        totalSavedMoney *= 1.20;
        console.log(`You win the tournament! Total raised money: ${totalSavedMoney.toFixed(2)}`);

    }else{
        console.log(`You lose the tournament! Total raised money: ${totalSavedMoney.toFixed(2)}`);

    }

}

solve([
        '2',   
        'volleyball',
        'win',
        'football',
        'lose',
        'basketball',
        'win',
        'Finish',
        'golf',
        'win',
        'tennis',
        'win',
        'badminton',
        'win',
        'Finish'
      ])