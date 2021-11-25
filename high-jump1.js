function solve(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let jump = Number(input[index]);
    index++;
    let currentHigh = target - 30;

    let countJumps = 1;
    let failJumps = 0;

    while (true) {
        if (jump > currentHigh) {
            if (currentHigh >= target) {
                console.log(`Tihomir succeeded, he jumped over ${target}cm after ${countJumps} jumps.`);
                return;
            }
            currentHigh += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${currentHigh}cm after ${countJumps} jumps.`);
                return;
            }
        }
        jump = Number(input[index]);
        index++;
        countJumps++;
    }
}
solve([
    250,
    225,
    224,
    225,
    228,
    231,
    235,
    234,
    235

])