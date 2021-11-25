function solve (input) {
    let lenght = Number(input.shift());
    let wingth = Number(input.shift());
    let warderobeSide = Number(input.shift());
    let areaW = warderobeSide * warderobeSide;
    let areaHall = lenght * wingth;
    let areaBench = areaHall / 10;

    let danceZone = areaHall - (areaW + areaBench)

    let dancer = (40 + 7000) / 100

    console.log(Math.floor(danceZone/dancer)))
}

solve([
    50,
    25,
    2
])