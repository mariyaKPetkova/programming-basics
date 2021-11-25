function solve(arg1,arg2,arg3){
    let recSec = Number(arg1);
    let distMeter = Number(arg2);
    let meterSec = Number(arg3);

    let time = distMeter * meterSec; 
    let totalTime = Math.floor(distMeter / 15) * 12.5
    totalTime += time;
    let result = Math.abs(totalTime-recSec)
    if (totalTime < recSec){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    }
}
solve("55555.67",
"3017",
"5.03")

