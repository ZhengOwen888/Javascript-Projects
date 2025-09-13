const snakeToCamel = function (snake) {
    const words = snake.toLowerCase().split("_");
    const camels = [];

    if (words.length > 0) {
        camels.push(words[0]);
    }

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        camels.push(word.replace(word[0], word[0].toUpperCase()));
    }

    return camels.join("");
};

console.log(snakeToCamel("delayed_departure"));
