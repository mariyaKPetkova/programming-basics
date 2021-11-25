function solve (input){
    let index = 1;
    let unsetisfieldGradeCounter = 0;
    let maxUnsetisfiedGrade = Number(input[0]); //0
    let needABreak = false;
    let sumGrade = 0;
    let problemCounter = 0;
    let lastProblem = '';

    let currentProblem = input[index];  //1

    while (currentProblem !== 'Enough'){

        let currentGrade = Number(input[index + 1]);    //2

        if(currentGrade <= 4.00){
            unsetisfieldGradeCounter ++;
        }
        if (unsetisfieldGradeCounter === maxUnsetisfiedGrade){
            needABreak = true
            break;
        }

        lastProblem = currentProblem;
        sumGrade += currentGrade;
        problemCounter++;

        index += 2; //

        currentProblem = input[index]; //

    }

    if(!needABreak){
        console.log(`Average score: ${(sumGrade/problemCounter).toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }else{
        console.log(`You need a break, ${unsetisfieldGradeCounter} poor grades.`)
    }
}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
