function solve(input){
    let index = 0;
    let persons = Number(input[index]);
    index++;

    let backC = 0;
    let chestC = 0;
    let legsC = 0;
    let absC = 0;
    let pSkakeC = 0;
    let pBarC = 0;
    
    let command = input[index];
    index++;

    for(let i = 1; i <= persons; i++){

        switch(command){
            case "Back":
                backC++;
            break;
            case "Chest":
                chestC++;
            break;
            case "Legs":
                legsC++;
            break;
            case "Abs":
                absC++;
            break;
            case "Protein shake":
                pSkakeC++;
            break;
            case "Protein bar":
                pBarC++;
            break;
        }

        command = input[index];
        index++;
    }
    let workOut = (backC + chestC + legsC + absC) / persons * 100;
    let protein = (pBarC + pSkakeC) / persons * 100;
    
    console.log(`${backC} - back`);
    console.log(`${chestC} - chest`);
    console.log(`${legsC} - legs`);
    console.log(`${absC} - abs`);
    console.log(`${pSkakeC} - protein shake`);
    console.log(`${pBarC} - protein bars`);
    console.log(`${workOut.toFixed(2)}% - work out`);
    console.log(`${protein.toFixed(2)}% - protein`);
}

solve([
    10,
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"
    ])