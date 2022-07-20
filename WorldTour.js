function worldTour(input) {

    let stops = input.shift();

    let command = input.shift();

    while (command != 'Travel') {

        command = command.split(':');
        let operation = command.shift();

        if (operation == 'Add Stop') {
            let index = Number(command.shift());
            let string = command.shift();

            if (index >= 0 && index <= stops.length - 1) {
                stops = stops.split('');
                stops.splice(index, 0, string);
                stops = stops.join('');
            }
            console.log(stops);

        } else if (operation == 'Remove Stop') {
            let startIndex = Number(command.shift());
            let endIndex = Number(command.shift());

            if ((startIndex >= 0 && startIndex <= stops.length - 1) && (endIndex >= 0 && endIndex <= stops.length - 1)) {
                stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1);
            }
            console.log(stops);

        } else if (operation == 'Switch') {
            let oldString = command.shift();
            let newString = command.shift();

            if (stops.includes(oldString)) {
                stops = stops.split(oldString).join(newString);
            }
            console.log(stops);
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);