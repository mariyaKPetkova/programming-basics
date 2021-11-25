function solve (arg1,arg2,arg3,arg4){
    let hourExam = Number(arg1);
    let minExam = Number(arg2);
    let hourArrive = Number(arg3);
    let minArrive = Number(arg4);
 
    let totalMinArr = hourArrive * 60 + minArrive;
    let totalMinExam = hourExam * 60 + minExam;
    let diff = 0;
    let hour = 0;
    let min = 0;

    if(totalMinExam < totalMinArr){
        diff = totalMinArr - totalMinExam
        console.log(`Late`);
        hour = Math.floor(diff / 60);
        min = diff % 60;
        if(hour < 1){
            console.log(`${min} minutes after the start`);
        }
        if(hour >= 1){
            if(min < 10){
                console.log(`${hour}:0${min} hours after the start`);
            }else{
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    }
    if(totalMinExam === totalMinArr){
        diff = 0;
        console.log(`On time`);
    }
    if (totalMinExam > totalMinArr){
        diff = totalMinExam - totalMinArr;
        if(diff <= 30){
            console.log(`On time`);
        }
        if(diff > 30){
            console.log(`Early`);
        }
        hour = Math.floor(diff / 60);
        min = diff % 60;
        if(hour < 1){
            console.log(`${min} minutes before the start`);
        }
        if(hour >= 1){
            if(min < 10){
                console.log(`${hour}:0${min} hours before the start`);
            }else{
                console.log(`${hour}:${min} hours before the start`);
            }
        }
    }
}
solve(8,25,10,30)