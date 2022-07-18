function secretChat(input) {
    let concealedMessage = input.shift();
    let command = input.shift();

    while (command != 'Reveal') {

        command = command.split(':|:');
        let operation = command.shift();

        if (operation == 'InsertSpace') {
            let index = Number(command[0]);
            concealedMessage = concealedMessage.split('');
            concealedMessage.splice(index, 0, ' ');
            concealedMessage = concealedMessage.join('');

            console.log(concealedMessage);

        } else if (operation == 'Reverse') {
            let substring = command[0];
            let indexOfSubstring = concealedMessage.indexOf(substring);

            if (indexOfSubstring != -1) {
                concealedMessage = concealedMessage.split('');
                let cut = concealedMessage.splice(indexOfSubstring, substring.length);
                cut = cut.reverse().join('');
                concealedMessage = concealedMessage.join('');
                concealedMessage = concealedMessage + cut;

                console.log(concealedMessage);

            } else {
                console.log('error');
            }

        } else if (operation == 'ChangeAll') {
            let substring = command[0];
            let replacement = command[1];

            if (concealedMessage.includes(substring)) {
                concealedMessage = concealedMessage.split(substring);
                concealedMessage = concealedMessage.join(replacement);

                console.log(concealedMessage);
            }
        }
        command = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);