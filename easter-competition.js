function solve (input){
    // const numbers = [1, 2, 3, 4, 5];
    // const [first, secont, third, forth, fivt] = numbers;
    const [numberOfCheves, ...inputNew] = input;
    const indexOfStop = inputNew.indexOf('Stop')
    console.log(indexOfStop);

    for (let index = 0; index < numberOfCheves; index++) {
        let nextStartIndex = 0;
        while()
        const element = array[index];
        
    }
    // console.log(numberOfCheves, fistCheve);
    // let index = 0;
    // let countBake = Number(input[0]);
    // index++;
    // index = 1;
    // let points = 0;
    // let maxPoints = Number.MIN_SAFE_INTEGER
    // let winner = "";

    // for(let i = 1; i <= countBake; i ++){
    //     let chefName = input[index];
    //     index++;
    //     let command = input[index];
    //     index++;
    //     while(command !== "Stop"){
    //     let grade = Number(command);
        
    //     points += grade;

    //     command = input[index];
    //     index++;
    //     }
    //     console.log(`${chefName} has ${points} points.`);
        
    //     if (points > maxPoints){
    //         maxPoints = points;
    //         winner = chefName;

    //         console.log(`${chefName} is the new number 1!`)
    //     }
    //     points = 0;
    // }
    // console.log(`${winner} won competition with ${maxPoints} points!`);

}
solve([
        '2',
        'Chef Angelov',
        '9',
        '9',
        '9',
        'Stop',
        'Chef Rowe',
        '10',
        '10',
        '10',
        '10',
        'Stop'
      ])