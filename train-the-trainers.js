function solve (input){
    let n = Number(input[0]);
    let index = 1;
    let sumGradePre = 0;
    let totalSumPre = 0
    let counter = 0;

    let pres = input[index];

    while (pres !== 'Finish'){

        for(let jury = 1; jury <= n; jury++){ 
            index++;
            let grade = Number(input[index]);
            
            sumGradePre += grade;
        }
        let averageGradePre = sumGradePre/n;
        console.log(`${pres} - ${(averageGradePre).toFixed(2)}.`);

        sumGradePre = 0;
        
        counter++;
        totalSumPre += averageGradePre

        index++;
        pres = input[index];
    }
    console.log(`Student's final assessment is ${(totalSumPre/counter).toFixed(2)}.`);
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
