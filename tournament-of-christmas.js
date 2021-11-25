function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let counterWin = 0;
    let counterLose = 0;
    let totalMoney = 0;
    for (let i = 1; i <= days; i++) {
        let moneyDay = 0;
        let winGameCount = 0;
        let loseGameCount = 0;
        let command = input[index];
        index++;
        while (command !== 'Finish') {
            let game = command;
            let result = input[index];
            index++;
            switch (result) {
                case 'win':
                    moneyDay += 20;
                    winGameCount++;
                    break;
                case 'lose':
                    loseGameCount++;
                    break;
            }
            command = input[index];
            index++;
            result = input[index];
        }
        if (winGameCount > loseGameCount) {
            moneyDay *= 1.10;
            counterWin++;
        }
        if (loseGameCount > winGameCount) {
            counterLose++;
        }
        totalMoney += moneyDay;
    }
    if (counterWin > counterLose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
    if (counterLose > counterWin) {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
solve([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

