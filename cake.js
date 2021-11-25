function solve(input){
    index = 0
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;

    let countPieces = width * length;
    let noMoreCake = false;

    let command = input[index];
    index++;
    
    while (command !== "STOP"){
        let takenPieces = Number(command)

        if (takenPieces > countPieces){
            console.log(`No more cake left! You need ${takenPieces - countPieces} pieces more.`);
            noMoreCake = true;
            break;
        }

        countPieces -= takenPieces; 
        

        command = input[index];
        index++;
    }
    if(!noMoreCake){
    console.log(`${countPieces} pieces are left.`);
    }
}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"])

