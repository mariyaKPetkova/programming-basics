function solve (input){

    let index = 0;
    let targetSteps = 10000;
    let stepsCounter = 0;

    let nextAction = input[index];

    while (nextAction !== 'Going home' && index < input.length){
        let steps = Number(nextAction); //nextAction !== undefined

        stepsCounter += steps;

        index++;
        nextAction = input[index]

    }

    if (nextAction === 'Going home'){
        stepsCounter += Number(input[index + 1]);

    }
    

    if (stepsCounter < targetSteps){
        console.log(`${Math.abs(stepsCounter - targetSteps)} more steps to reach goal.`)
    } else{
       console.log(`Goal reached! Good job!`)
       console.log(`${Math.abs(stepsCounter - targetSteps)} steps over the goal!`) 
    }
}
solve(["1500",
        "3000",
        "250",
        "1548",
        "2000",
        "Going home",
        "2000"])
