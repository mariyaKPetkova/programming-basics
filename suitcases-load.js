function solve (input){
    let index = 0;
    let capacity = Number(input[0]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let isFreeSpace = true;

    while (command !== 'End'){
    let volumeSuitcase = Number(command);

    counter++;

    if (counter % 3 === 0){
        volumeSuitcase *= 1.10
    }

    capacity -= volumeSuitcase;

    if (capacity <= 0){
        console.log(`No more space!`);
        counter = counter - 1;
        isFreeSpace = false;
        break;
    }

    command = input[index];
    index++;
    }

    if(isFreeSpace){
    console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${counter} suitcases loaded.`)

}
solve([
    `700.5`,
    `180`,
    `340.6`,
    `126`,
    `220`
])