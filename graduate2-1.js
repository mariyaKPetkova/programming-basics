function solve (input){
    let index = 0;
    let name = input[index];
    index ++;

    let year = 1
    let sumGrade = 0;
    let failGradeCounter = 0
    let isFail = false;

    while(year <= 12){
        let grade = Number(input[index]);
        index++

        if (grade < 4.00){
            failGradeCounter++
        }
        if (failGradeCounter === 2){
            isFail = true;
            break;
        }
        sumGrade += grade
        year++
    }
    
    if (!isFail){
        console.log(`${name} graduated. Average grade: ${(sumGrade/12).toFixed(2)}`) 
    }else{
        console.log(`${name} has been exsluded at ${year} grade`)
    }
    
    
}

    solve(['pesho',
    '3',
    '3',
    '6',
    '4.43',
    '4.5',
    '6',
    '5.55',
    '5',
    '6',
    '6',
    '5.43',
    '5'])
