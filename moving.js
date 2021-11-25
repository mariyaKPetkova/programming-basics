function solve(input) {
    let index = 0;
    let w = +input[index++];
    let l = +input[index++];
    let h = +input[index++];
    let space = w * l * h;
    let noMoreSpace = false;
    let inputData = input[index++];
    while (inputData !== 'Done') {
        let count = +inputData;
        space -= count;
        if (space < 0) {
            console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
            noMoreSpace = true;
            break;
        }
        inputData = input[index++];
    }

    if (!noMoreSpace) {
        console.log(`${space} Cubic meters left.`);
    }
}


solve(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

