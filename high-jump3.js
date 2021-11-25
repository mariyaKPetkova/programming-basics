function solve(input) {
    let index = 0;
    let target = +input[index++];
    let currentHigh = target - 30;
    let counter = 0;

    for (let i = 1; i <= input.length; i++) {
        let jump = +input[index++];
        counter++;
        if (jump > currentHigh) {
            if (currentHigh >= target){ 
                console.log(`Tihomir succeeded, he jumped over ${target}cm after ${i} jumps.`);
                return;
            }
            currentHigh += 5;
            counter = 0;
        }
        
        if (counter === 3) return console.log(`Tihomir failed at ${currentHigh}cm after ${i} jumps.`);
        
    }
}

solve([250,
    225,
    224,
    225,
    228,
    231,
    235,
    234,
    235

])