function solve(input){
    let index = 0;
    countBake = +input[index++];
    let sugarGrams = 0;
    let flourGrams = 0;
    let maxS = 0;
    let maxF = 0;
    for(let i = 0; i < countBake; i++){
        let sugar = +input[index++];
        let flour = +input[index++];
        sugarGrams += sugar;
        flourGrams += flour;
        if(sugar > maxS){
            maxS = sugar;
        }
        if(flour > maxF){
            maxF = flour;
        }
    }
    console.log(`Sugar: ${Math.ceil(sugarGrams/950)}`);
    console.log(`Flour: ${Math.ceil(flourGrams/750)}`);
    console.log(`Max used flour is ${maxF} grams, max used sugar is ${maxS} grams.`);
}
//Number.parseInt
solve([3,
    400,
    350,
    250,
    300,
    450,
    380
    ])