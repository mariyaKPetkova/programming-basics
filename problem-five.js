function christmasGifts(input) {
    let index = 0;
    let inputData = input[index++];
    let countKids = 0;
    let countAdults = 0;

    while (inputData !== 'Christmas') {
        let age = Number(inputData);
        if (age <= 16) {
            countKids++;
        }
        if (age > 16) {
            countAdults++;
        }

        inputData = input[index++];
    }
    let moneyKids = countKids * 5;
    let moneyAdults = countAdults * 15;

    console.log(`Number of adults: ${countAdults}`);
    console.log(`Number of kids: ${countKids}`);
    console.log(`Money for toys: ${moneyKids}`);
    console.log(`Money for sweaters: ${moneyAdults}`);

}
christmasGifts([
    16,
    20,
    46,
    12,
    8,
    20,
    49,
    `Christmas`

])