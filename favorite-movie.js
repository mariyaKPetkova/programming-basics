function solve(input){
    let index = 0;
    let command = input[index];
    index++;
    let filmCount = 0;
    let limitReached = false;
    let sum = 0;
    while(command !== "STOP"){
        filmCount++;
        if (filmCount === 7){
            limitReached = true;
            console.log(`The limit is reached.`);
            break;
        }
        let filmName = command;
        let counter = 0;
        for(let i = 0; i <= filmName.length; i ++){
            counter++;
            // let ch = filmName[i];
            //if(ch === "a"){
            // switch(filmName[i]){}
            
        }

    }
    console.log(`The best movie for you is ${filmName} with ${} ASCII sum.`);

}
solve([
    'Matrix',
    'Breaking bad',
    'Legend',
    'STOP'
])