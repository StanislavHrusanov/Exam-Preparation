function stringGame(arr) {
    let str = arr.shift();
    let command = arr.shift();

    while (command != 'Done') {
        command = command.split(' ');
        let operation = command.shift();

        if (operation == 'Change') {
            let char = command.shift();
            let replacement = command.shift();

            while (str.includes(char)) {
                str = str.replace(char, replacement);
            }
            console.log(str);

        } else if (operation == 'Includes') {
            let substring = command.shift();
            str.includes(substring) ? console.log('True') : console.log('False');

        } else if (operation == 'End') {
            let substring = command.shift();
            str.endsWith(substring) ? console.log('True') : console.log('False');

        } else if (operation == 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);

        } else if (operation == 'FindIndex') {
            let char = command.shift();
            console.log(str.indexOf(char));

        } else if (operation == 'Cut') {
            let startIndex = Number(command.shift());
            let count = Number(command.shift());
            str = str.substring(startIndex, startIndex + count);
            console.log(str);
        }
        command = arr.shift();
    }
}
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
