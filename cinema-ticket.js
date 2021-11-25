function solve (input){
    let index = 0;
    let inputData = input[index];
    index++;

    let kidT = 0;
    let standardT = 0;
    let studentT = 0;
    let totalSpace = 0;
    let isFull = false;
    

    while (inputData !== "Finish"){
        let filmName = inputData;
        let freeSpace = Number(input[index]);
        index++;
        
        let countSpaces = 0;

        let command = input[index];
        index++;
        while (command !== "End"){
            let typeTicket = command;
            countSpaces++;

            switch(typeTicket){
                case "student":
                    studentT++;
                break;
                case "standard":
                    standardT++;
                break;
                case "kid":
                    kidT++;
                break;
            }
            if (countSpaces >= freeSpace){
                isFull = true;
                break;
            }

            command = input[index];
            index++;
        }

        let full = countSpaces * 100/ freeSpace;
        console.log(`${filmName} - ${full.toFixed(2)}% full.`);

        totalSpace += countSpaces;
        countSpaces = 0;
        
        inputData = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalSpace}`);
    console.log(`${(studentT * 100 / totalSpace).toFixed(2)}% student tickets.`);
    console.log(`${(standardT * 100 / totalSpace).toFixed(2)}% standard tickets.`);
    console.log(`${(kidT * 100 / totalSpace).toFixed(2)}% kids tickets.`);

}
solve([
    'The Matrix', '20',
    'student',    'standard',
    'kid',        'kid',
    'student',    'student',
    'standard',   'student',
    'End',        'The Green Mile',
    '17',         'student',
    'standard',   'standard',
    'student',    'standard',
    'student',    'End',
    'Amadeus',    '3',
    'standard',   'standard',
    'standard',   'Finish'
  ])