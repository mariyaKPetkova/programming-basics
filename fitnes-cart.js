function solve(arg1, arg2, arg3, arg4) {
    let buget = Number(arg1);
    let gender = arg2;
    let age = Number(arg3);
    let sport = arg4;
    let price = 0;
    switch (sport) {
        case 'Gym':
            if (gender === 'm') {
                price = 42;
            }
            if (gender === 'f') {
                price = 35;
            }
            break;
        case 'Boxing':
            if (gender === 'm') {
                price = 41;
            }
            if (gender === 'f') {
                price = 37;
            }
            break;
        case 'Yoga':
            if (gender === 'm') {
                price = 45;
            }
            if (gender === 'f') {
                price = 42;
            }
            break;
        case 'Zumba':
            if (gender === 'm') {
                price = 34;
            }
            if (gender === 'f') {
                price = 31;
            }
            break;
        case 'Dance':
            if (gender === 'm') {
                price = 51;
            }
            if (gender === 'f') {
                price = 53;
            }
            break;
        case 'Pilates':
            if (gender === 'm') {
                price = 39;
            }
            if (gender === 'f') {
                price = 37;
            }
            break;
    }
    if (age < 20) {
        price *= 0.80;
    }
    if (price <= buget) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(price - buget).toFixed(2)} more.`);
    }
}
solve()