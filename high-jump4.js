function solve(input) {
    let index = 0;
    let target = +input[index++];
    let jump = +input[index++];

    let currentHigh = target - 30;

    let counter = 1;
    let failJumps = 0;
    
    while (true) {
        if (jump > currentHigh) {
            if (currentHigh >= target) {
                console.log(`Tihomir succeeded, he jumped over ${target}cm after ${counter} jumps.`);
                return;
            }
            currentHigh += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${currentHigh}cm after ${counter} jumps.`);
                return;
            }
        }
        jump = +input[index++];
        counter++;
    }
}