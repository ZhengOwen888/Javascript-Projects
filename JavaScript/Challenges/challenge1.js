"use strict";

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = [game.team1, ...game.players[0]];
const players2 = [game.team2, ...game.players[1]];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Countinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
    console.log(players.length);
};

team1 < team2 && console.log("Team 1 is more likely to win!");
team2 < team1 && console.log("Team 2 is more likely to win!");

// scored players
for (const [key, player] of game.scored.entries()) {
    console.log(`Goal ${key + 1}: ${player}`);
}

// average score
const oddsValues = Object.values(game.odds);
let avg = 0;
for (const odds of oddsValues) {
    avg += odds;
}
avg /= oddsValues.length;

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`Odds of ${teamStr}: ${odd}`);
}

const scorers = {};

for (const player of game.scored) {
    if (player in scorers) {
        scorers[player] += 1;
    } else {
        scorers[player] = 1;
    }
}

console.log(scorers);

const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🔶 Yellow card"],
]);

const visited = new Set();
const events = [];

for (const [key, value] of gameEvents) {
    if (visited.has(value) === false) {
        events.push([key, value]);
        visited.add(value);
    }
}

// remove event at the 64 minute mark
gameEvents.delete(64);

const eventTime = [...gameEvents.keys()];
const gameTime = 90;
let averageMinute = 0;
for (let i = 1; i < eventTime.length; i++) {
    if (eventTime[i] <= 90) {
        averageMinute += eventTime[i] - eventTime[i - 1];
    }
}
averageMinute /= eventTime.length;
console.log(`An event happened, on average, every ${averageMinute} minutes`);

for (const [min, event] of gameEvents) {
    const half = min > 45 ? "[SECOND HALF]" : "[FIRST HALF]";
    console.log(`${half}${min}: ${event}`);
}
