function solve(input){
    let index = 0;
    let command = input[index];
    index++;

    let totalCountTicket = 0;
    
    let standardT = 0;
    let studentT = 0;
    let kidT = 0;
    let isFull = false;

    while(command !== 'Finish'){
        let film = command;
        let space = Number(input[index]);
        index++;
        let type = input[index];
        index++;
        let counter = 0;
        
        while(type !== 'End'){
            
            counter++;
            switch(type){
                case 'standard':
                    standardT++;
                break;
                case 'student':
                    studentT++;
                break;
                case 'kid':
                    kidT++;
                break;
            }
            if (space === counter){
                isFull = true;
                break;
            }

            type = input[index];
            index++;
        }
        let p = counter * 100 / space;
        totalCountTicket += counter;
        console.log(`${film} - ${p.toFixed(2)}% full.`);

        command = input[index];
        index++;
        space = input[index];
    }
    console.log(`Total tickets: ${totalCountTicket}`);
    console.log(`${(studentT * 100 / totalCountTicket).toFixed(2)}% student tickets.`);
    console.log(`${(standardT * 100 / totalCountTicket).toFixed(2)}% standard tickets.`);
    console.log(`${(kidT * 100 / totalCountTicket).toFixed(2)}% kids tickets.`);

}
solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
