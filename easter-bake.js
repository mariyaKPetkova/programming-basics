function solve(input){
    let index = 0;
    let num = Number(input[0]);
    index++;
    index = 1;

    let countSuger = 0;
    let countFlour =0;
    let packetSugar = 0;
    let packetFlour = 0;
    let maxNumS = Number.MIN_SAFE_INTEGER
    let maxNumF = Number.MIN_SAFE_INTEGER
    let maxSugar = 0;
    let maxFlour = 0;

    for(let i = 1; i <= num; i++){
        let suger = Number(input[index]);
        index++;
        let flour = Number(input[index]);
        

        countSuger += suger;
        if (suger > maxNumS){
            maxNumS = suger;
            maxSugar = suger;
        }

        countFlour += flour;
        if (flour > maxNumF){
            maxNumF = flour;
            maxFlour = flour;
        }


        suger = input[index];
        index++
        flour = input[index];
    }

    packetSugar = (countSuger / 950) + 1;
    packetFlour = (countFlour / 750) + 1;

    console.log(`Sugar: ${Number.parseInt(packetSugar)}`);
    console.log(`Flour: ${Number.parseInt(packetFlour)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

    // parseFloat!!!
}
solve([
    '4',   '500', '350',
    '560', '430', '600',
    '345', '578', '543',
    ''
  ])