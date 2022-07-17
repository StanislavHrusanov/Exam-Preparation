function passwordReset(arr) {
    let str = arr.shift();
    let command = arr.shift();

    while (command != 'Done') {

        if (command == 'TakeOdd') {
            str = str.split('');
            str = str.filter((char, index) => index % 2 != 0).join('');

        } else {
            command = command.split(' ');
            let operation = command[0];

            if (operation == 'Cut') {
                let index = Number(command[1]);
                let length = Number(command[2]);
                str = str.split('');
                str.splice(index, length);
                str = str.join('');

            } else if (operation == 'Substitute') {
                let substring = command[1];
                let substitute = command[2];

                if (str.includes(substring)) {

                    while (str.includes(substring)) {
                        str = str.replace(substring, substitute);
                    }
                } else {
                    console.log('Nothing to replace!');
                    command = arr.shift();
                    continue;
                }
            }
        }
        console.log(str);
        command = arr.shift();
    }
    console.log(`Your password is: ${str}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);