function solve(){

    for (let h = 0; h < 24; h++){
        for (let m = 0; m < 60; m++){
            for (let s = 0; s < 60; s++){
                let hour = h;
                let min = m;
                let sec = s;

                if (hour < 10){
                    hour = '0' + hour
                }
                if (min < 10){
                    min = '0' + min
                }
                if (sec < 10){
                    sec = '0' + sec
                }
                console.log( hour + ':' + min + ':' + sec )

            }
        }
    }
}
solve()