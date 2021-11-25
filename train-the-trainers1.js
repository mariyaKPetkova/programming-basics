function solve (input){
    index = 0;
    let n = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counterPres = 0;
    let sumGrade = 0;
    while(command !== 'Finish'){
        let presentation = command;
        counterPres++;
        let averageGradePres = 0;
        let gradePresentation = 0;
        for(let i = 0; i < n; i++){
            let grade = Number(input[index]);
            index++;
            gradePresentation += grade;
        }
        averageGradePres = gradePresentation / n;
        console.log(`${presentation} - ${averageGradePres.toFixed(2)}`);
        sumGrade += averageGradePres;

        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(sumGrade/counterPres).toFixed(2)}`);
    
}
solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

