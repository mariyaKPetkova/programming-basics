function solve(arg1,arg2){
    let country = arg1;
    let gymApp = arg2;

    let maxResult = 20;
    let result = 0;

    switch(country){
        case "Russia":
            switch(gymApp){
                case "ribbon":
                    result = 9.100 + 9.400
                break;
                case "hoop":
                    result = 9.300 + 9.800
                break;
                case "rope":
                    result = 9.600 + 9.000
                break;

            }

        break;
        case "Bulgaria":
            switch(gymApp){
                case "ribbon":
                    result = 9.600 + 9.400
                break;
                case "hoop":
                    result = 9.550 + 9.750
                break;
                case "rope":
                    result = 9.500 + 9.400
                break;

            }

        break;
        case "Italy":
            switch(gymApp){
                case "ribbon":
                    result = 9.200 + 9.500
                break;
                case "hoop":
                    result = 9.450 + 9.350
                break;
                case "rope":
                    result = 9.700 + 9.150
                break;

            }

        break;
    }
    let neededPro = ((maxResult - result) / maxResult) * 100;
    console.log(`The team of ${country} get ${result.toFixed(3)} on ${gymApp}.`);
    console.log(`${neededPro.toFixed(2)}%`);
}
solve('Russia','rope')