function adAstra(input) {
    let text = input.shift();
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let foodInfo = [];
    let totalFoodCalories = 0;
    let match = pattern.exec(text);

    while (match != null) {
        let foodType = match.groups['item'];
        let expDate = match.groups['expDate'];
        let calories = Number(match.groups['calories']);

        foodInfo.push({ foodType, expDate, calories });
        totalFoodCalories += calories;

        match = pattern.exec(text);
    }

    console.log(`You have food to last you for: ${Math.floor(totalFoodCalories / 2000)} days!`);

    foodInfo.forEach(item => console.log(`Item: ${item.foodType}, Best before: ${item.expDate}, Nutrition: ${item.calories}`));
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);