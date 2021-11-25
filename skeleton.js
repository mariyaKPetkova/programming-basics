function solve (arg1,arg2,arg3,arg4){
    let min = Number(arg1);
    let sec = Number(arg2);
    let length = Number(arg3);
    let secMeter = Number(arg4);

    let controlTime = (min * 60) + sec;

    let reducedTime = parseFloat(length / 120);
    let totalReducedTime = reducedTime * 2.5;

    let racerTime = (length/100) * secMeter - totalReducedTime;

    if(racerTime <= controlTime){
        console.log(`Marin Bangiev won an Olympic quata!`);
        console.log(`His time is ${racerTime.toFixed(3)}`);
    }else{
        console.log(`No, Marin failed! He was ${(racerTime - controlTime).toFixed(3)} second slower.`);
    }
}
solve(1,20,1546,12)