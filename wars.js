function solve(...input) {
 
    let firstPlayer = input[0];
    let secondPlayer = input[1];
    let pointsPlayerOne = 0;
    let pointsPlayerTwo = 0;
 
    let index = 2;
    let currentCommands = input[index];
 
    for (let index = 2; index < input.length; index += 2) {
        let diff = 0;
        currentCommands = input[index];
        if (input[index] === "End of game") {
            console.log(`${firstPlayer} has ${pointsPlayerOne} points`);
            console.log(`${secondPlayer} has ${pointsPlayerTwo} points`);
            break;
        }
        let commandPlayerOne = Number(input[index]);
        let commandPlayerTwo = Number(input[index + 1]);
 
        if (commandPlayerOne > commandPlayerTwo) {
            diff = commandPlayerOne - commandPlayerTwo;
            pointsPlayerOne += diff;
        } else if (commandPlayerOne < commandPlayerTwo) {
            diff = commandPlayerTwo - commandPlayerOne;
            pointsPlayerTwo += diff;
        } else {
            console.log("Number wars!");
            index += 2;
            commandPlayerOne = Number(input[index]);
            commandPlayerTwo = Number(input[index + 1]);
            if (commandPlayerOne > commandPlayerTwo) {
                console.log(`${firstPlayer} is winner with ${pointsPlayerOne} points`);
            } else if (commandPlayerOne < commandPlayerTwo) {
                console.log(`${secondPlayer} is winner with ${pointsPlayerTwo} points`);
            }
            break;
        }
    }
}
solve(
    'Aleks',
    'Georgi',
    4,
    5,
    3,
    2,
    4
)
//Здравей Мария, разписах тази за Game Number Wars и да, проблемът е от входните данни. Виж моето решение - https://pastebin.com/DrWpvDZm
//Реално явно judge подава Input като String - 'Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3'
//единственото, което правя е подам входните данни по следния начин (...input) и съответно тези входни данни се разглеждат като масив