function solve(input){
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let noMoreSpace = false;
    while(command !== "End"){
        let volume = Number(command);
        counter++;
        if(counter % 3 === 0){
            volume *= 1.10;
        }
        capacity -= volume;
        if (capacity < 0){
            noMoreSpace = true;
            counter--;
            break;
        }
        command = input[index];
        index++;
    }
    if(!noMoreSpace){
        console.log(`Congratulations! All suitcases are loaded!`);
    }else{
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${counter} suitcases loaded`);
}
solve([
    700.5,
180,
340.6,
126,
220




])