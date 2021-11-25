function solve (input){
    let index = 0;
    let countGrups = Number(input[0]);
    index++;

    let counterPer = 0;
    let musala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i <= countGrups;i++ ){
        let perInGrup = Number(input[index]);
        index++;

        counterPer += perInGrup;

        if (perInGrup < 6 ){
            musala += perInGrup

        }else if(perInGrup > 5 && perInGrup <= 12){
            monblan += perInGrup

        }else if(perInGrup > 12 && perInGrup <= 25){
            kilim += perInGrup

        }else if(perInGrup > 25 && perInGrup <= 40){
            k2 += perInGrup

        }else{  //perInGruo >= 41
            everest += perInGrup

        }
    }
    console.log(`${(musala/counterPer*100).toFixed(2)}%`);
    console.log(`${(monblan/counterPer*100).toFixed(2)}%`);
    console.log(`${(kilim/counterPer*100).toFixed(2)}%`);
    console.log(`${(k2/counterPer*100).toFixed(2)}%`);
    console.log(`${(everest/counterPer*100).toFixed(2)}%`);
}
solve([
    '10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78'
])