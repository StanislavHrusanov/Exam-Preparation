function activationKeys(arr) {
    let rawActivationKey = arr.shift();
    let command = arr.shift();

    while (command != 'Generate') {
        command = command.split('>>>');
        let operation = command.shift();

        if (operation == 'Contains') {
            let substring = command.shift();

            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (operation == 'Flip') {
            let upperOrLowerCase = command.shift();
            let startIndex = Number(command.shift());
            let endIndex = Number(command.shift());
            let substring = rawActivationKey.substring(startIndex, endIndex);

            upperOrLowerCase == 'Upper' ? substring = substring.toUpperCase() : substring = substring.toLowerCase();

            rawActivationKey = rawActivationKey.substring(0, startIndex) + substring + rawActivationKey.substring(endIndex);
            console.log(rawActivationKey);

        } else if (operation == 'Slice') {
            let startIndex = Number(command.shift());
            let endIndex = Number(command.shift());

            rawActivationKey = rawActivationKey.substring(0, startIndex) + rawActivationKey.substring(endIndex);
            console.log(rawActivationKey);
        }
        command = arr.shift();
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);

