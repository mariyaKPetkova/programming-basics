function goldMine(input) {
    let index = 0;
    let location = +input[index++];

    for (let i = 1; i <= location; i++) {
        let averageExtraction = +input[index++];
        let days = +input[index++];
        let sumExtraction = 0;
        for (let j = 1; j <= days; j++) {
            let extractionDay = +input[index++];
            sumExtraction += extractionDay;
        }
        let averageGold = sumExtraction / days;
        if (averageGold >= averageExtraction) {
            console.log(`Good job! Average gold per day: ${(averageGold).toFixed(2)}.`);
        }
        if (averageGold < averageExtraction) {
            console.log(`You need ${(averageExtraction - averageGold).toFixed(2)} gold.`);
        }
    }
}
goldMine([
    1,
    5,
    3,
    10,
    1,
    3

])