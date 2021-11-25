function solve(input){
    let index = 0;
    let name = input[index];
    index++;

    let year = 1;
    let averageGrade = 0;
    let failGrade = 0;
    let isExcluded = false;

    while(year <= 12){
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00){
            failGrade++;
                if (failGrade == 2){
                    console.log(`${name} has been excluded at ${year} grade`);
                    isExcluded = true;
                    break;
                }
                continue;  
        }
        averageGrade += grade;
        year++;
    }
    if(!isExcluded){
    console.log(`${name} graduated. Average grade: ${(averageGrade/12).toFixed(2)}`)
    }
}
solve(['pesho','4','5.5','6','4.43','4.5','6','5.55','5','6','6','5.43','5'])