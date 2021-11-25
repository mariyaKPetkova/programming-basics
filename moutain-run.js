function solve(target, distance, timeOneM) {
    
    let hisTime = distance * timeOneM;
    let delay = (Math.floor(distance / 50))* 30;
    hisTime += delay;
    if (hisTime >= target) {
        console.log(`No! He was ${(hisTime - target).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${hisTime.toFixed(2)} seconds.`);
    }

}
solve(5554.36,
    1340,
    3.23
)