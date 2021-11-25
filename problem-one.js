function moon(arg1,arg2){
    let speed = Number(arg1);
    let fuelHundred = Number(arg2);

    let distanse = 384400 * 2;
    let time = Math.ceil(distanse / speed);
    let totalTime = time + 3;
    let neededFuel = (fuelHundred * distanse) / 100;

    console.log(totalTime);
    console.log(neededFuel);

}
moon(10000,5)