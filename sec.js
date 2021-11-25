function solve (arg1,arg2,arg3) {
    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);

    let totalTime = (firstTime + secondTime + thirdTime);
    let min = Math.floor(totalTime/60)
    let sec = totalTime % 60

    if(sec < 10){
        console.log(`${min}:0${sec}`)
    }else{
        console.log(`${min}:${sec}`)
    }

}

solve("35", "45", "44")