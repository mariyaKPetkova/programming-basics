function spaceship(arg1, arg2, arg3, arg4) {
    let widthShip = Number(arg1);
    let lengthShip = Number(arg2);
    let heightShip = Number(arg3);
    let heigthAstronaut = Number(arg4);

    let volumeShip = widthShip * lengthShip * heightShip;
    let volumeRoom = (heigthAstronaut + 0.4) * 2 * 2;

    let countAstronauts = Math.floor(volumeShip / volumeRoom);

    if (countAstronauts >= 3 && countAstronauts <= 10) {
        console.log(`The spacecraft holds ${countAstronauts} astronauts.`);
    }
    if (countAstronauts < 3) {
        console.log(`The spacecraft is too small.`);
    }
    if (countAstronauts > 10) {
        console.log(`The spacecraft is too big.`);
    }
}
spaceship(3.5, 4, 5, 1.7)