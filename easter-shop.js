function solve(...input){
    let index = 0;
    let countEggs = Number(input[0]);
    index++;
    index = 1;

    let noEnough = false;
    let totalCountEggs = countEggs;
    let couterSold = 0;

    let command = input[index];

    while( command !== 'Close'){
        index++
        let numEggs = Number(input[index]);

        if(command === 'Buy'){
            countEggs -= numEggs;
            if (countEggs <= 0){
                noEnough = true;
                countEggs += numEggs;
                break;
            }
            couterSold += numEggs;
        }
        if(command ==='Fill'){
            totalCountEggs += numEggs;
            countEggs += numEggs;

        }

        index++;
        command = input[index];
    }
    if(!noEnough){
        console.log(`Store is closed!`);
        console.log(`${couterSold} eggs sold.`);
    }else{
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${countEggs}.`);
    }
}
solve(
    '13',
    'Buy',
    '8',
    'Fill',
    '3',
    'Buy',
    '10'
)

