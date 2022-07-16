function needForSpeed(input) {
    let n = Number(input.shift());
    let carsInfo = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        carsInfo[car] = {
            mileage,
            fuel
        }
    }

    let command = input.shift();

    while (command != 'Stop') {
        command = command.split(' : ');
        let operation = command.shift();

        if (operation == 'Drive') {
            let car = command[0];
            let distance = Number(command[1]);
            let fuel = Number(command[2]);

            if (carsInfo[car].fuel - fuel < 0) {
                console.log("Not enough fuel to make that ride");
            } else {
                carsInfo[car].mileage += distance;
                carsInfo[car].fuel -= fuel;

                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (carsInfo[car].mileage >= 100000) {
                delete carsInfo[car];

                console.log(`Time to sell the ${car}!`);
            }

        } else if (operation == 'Refuel') {
            let car = command[0];
            let fuel = Number(command[1]);

            if (carsInfo[car].fuel + fuel > 75) {
                fuel = 75 - carsInfo[car].fuel;
            }
            carsInfo[car].fuel += fuel;

            console.log(`${car} refueled with ${fuel} liters`);

        } else if (operation == 'Revert') {
            let car = command[0];
            let kilometers = Number(command[1]);

            if (carsInfo[car].mileage - kilometers < 10000) {
                carsInfo[car].mileage = 10000;
            } else {
                carsInfo[car].mileage -= kilometers;

                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        command = input.shift();
    }

    for (let car in carsInfo) {
        console.log(`${car} -> Mileage: ${carsInfo[car].mileage} kms, Fuel in the tank: ${carsInfo[car].fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);