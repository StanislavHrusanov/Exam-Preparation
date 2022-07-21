function dictionary(input) {
    let notebook = {};

    let pairs = input.shift().split(' | ');

    for (let pair of pairs) {
        let [word, definition] = pair.split(': ');

        if (!notebook.hasOwnProperty(word)) {
            notebook[word] = [];
        }

        notebook[word].push(definition);
    }

    let words = input.shift().split(' | ');

    let command = input.shift();

    if (command == 'Test') {

        words.forEach(word => {
            if (notebook.hasOwnProperty(word)) {
                console.log(`${word}:`);
                notebook[word].forEach(definition => console.log(`-${definition}`));
            }
        });

    } else if (command == 'Hand Over') {
        console.log(Object.keys(notebook).join(' '));
    }
}
dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"]);


