function solve(input) {
    let index = 0;
    let travelPrice = Number(input[index]);
    index++;
    let piggyBank = Number(input[index]);
    index++;

    let countDaysSpend = 0;
    let countDays = 0;
    let spendDaysFive = false;

    let action = input[index]; //spend or save
    index++;
    let sum = Number(input[index]);
    index++;

    while (travelPrice > piggyBank) {
        countDays++;

        if (action === 'save') {
            piggyBank += sum;
            countDaysSpend = 0;
        }

        if (action === 'spend') {
            countDaysSpend++;
            if (countDaysSpend === 5) {
                console.log(`You can't save the money.`);
                console.log(countDays);
                spendDaysFive = true;
                break;
            }
            piggyBank -= sum;
            if (piggyBank < 0) {
                piggyBank = 0
            }
        }

        action = input[index];
        index++;
        sum = Number(input[index]);
        index++;
    }
    if (!spendDaysFive) {
        console.log(`You saved the money for ${countDays} days.`);
    }

}
solve(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])


