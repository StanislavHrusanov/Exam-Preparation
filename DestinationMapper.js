function destinationMapper(input) {

    let pattern = /([\=\/])([A-Z][a-zA-Z]{2,})\1/g
    let destinations = [];
    let travelPoints = 0;
    let match = pattern.exec(input);

    while (match != null) {

        let destination = match[2];
        destinations.push(destination);
        travelPoints += destination.length;

        match = pattern.exec(input);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");