function solve(input){
    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    for(let floor = floorCount; floor > 0; floor--){

        let result = ""

        for(let room = 0; room < roomCount; room++){

            if (floor === floorCount){
                result += "L"

            }else if (floor % 2 === 0){
                result += "O"

            }else{
                result += "A"

            }
            result += "" + floor + room + " "
        }
        console.log(result)
    }

    
}
solve([
    '6',
    '4'
])