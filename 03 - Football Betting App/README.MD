# ⚽ Football Betting App – Coding Challenge Series

This project is part of the course **"The Complete JavaScript Course"** and focuses on using modern JavaScript features such as **destructuring**, **spread/rest operators**, **logical operators**, and **short-circuiting**.

We simulate logic for a basic football (soccer) betting app based on hardcoded data from a fictional match between **Bayern Munich** and **Borrussia Dortmund**.

---

## 📚 Challenges Overview

### 💡 Challenge #1 – Team Setup & Odds

Work with arrays and objects to extract and manipulate player data and betting odds.

### 💡 Challenge #2 – Match Analysis & Formatting

Analyze game results, calculate averages, and present match data in a clean, dynamic way.

### 💡 Challenge #3 – Game Events & Logging

Work with a `Map`, remove and format events, and calculate average timings.

### 💡 Challenge #4 – camelCase Converter

Receive a list of variable names in `underscore_case` and convert them to `camelCase`, formatting the output nicely.

---

## 🧠 Concepts Practiced

- Array and object destructuring
- Spread and rest syntax
- Logical assignment and short-circuiting
- Iterating with `for...of`, `entries()`, and `Object` methods
- Using `Map`, `Set`, and working with DOM elements
- Basic string manipulation and formatting

## 🏆 Challenge #1 – Team Setup & Odds

### ✅ Tasks

1. Extract player arrays for each team.
2. Separate the goalkeeper and field players.
3. Combine all players into one array.
4. Add substitute players to one team.
5. Destructure betting odds.
6. Implement a flexible `printGoals` function.
7. Determine which team is more likely to win using logical operators.

### 🔍 Code Snippets

#### 🧍 1. Players Destructuring

```js
const [players1, players2] = game.players;
```

#### 🧤 2. Goalkeeper and Field Players

```js
const [gk, ...fieldPlayers] = players1;
```

#### 🤝 3. Combine All Players

```js
const allPlayers = [...players1, ...players2];
```

#### 🔁 4. Add Substitute Players

```js
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
```

#### 🎲 5. Destructuring Odds

```js
const {
  odds: { team1, x: draw, team2 },
} = game;
```

#### 🎯 6. `printGoals` Function

```js
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach(player => console.log(player));
}
```

#### 🏁 7. Predict Match Winner

```js
team1 < team2 && console.log(`${game.team1} is more likely to win`);
```

---

## 📊 Challenge #2 – Match Analysis & Odds Formatting

### ✅ Tasks

1. **Log goal scorers with goal numbers**

```js
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}
```

2. **Calculate average betting odd**

```js
let oddsSum = 0;
for (const odd of Object.values(game.odds)) {
  oddsSum += odd;
}
const oddsAvg = oddsSum / Object.values(game.odds).length;
console.log(oddsAvg);
```

3. **Print odds in a formatted way**

```js
for (const [team, odd] of Object.entries(game.odds)) {
  const label = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${label}: ${odd}`);
}
```

4. **(Bonus) Create a scorers object**

```js
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
```

## ⏱ Challenge #3 – Game Events & Logging

### ✅ Tasks

1. Create an array `events` of unique game events (no duplicates).
2. Remove the unfair yellow card at minute 64.
3. Calculate average time between events.
4. Log each event with indication of `FIRST HALF` or `SECOND HALF`.

### 🔍 Code Snippets

```js
const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}
```

---

## ✍️ Challenge #4 – camelCase Converter

### ✅ Tasks

1. Create a textarea and button in the DOM.
2. On button click, read the textarea value line-by-line.
3. Convert each variable name from `underscore_case` to `camelCase`.
4. Format output: pad to 20 characters and append ✅ emojis based on line number.

### 📋 Test Input Example

```
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
```

### 💻 Output

```
underscoreCase       ✅
firstName            ✅✅
someVariable         ✅✅✅
calculateAge         ✅✅✅✅
delayedDeparture     ✅✅✅✅✅
```

### 🔍 Code Snippet

```js
function listCamelCase() {
  const text = document.querySelector('textarea').value;
  for (const [index, row] of text.split('\n').entries()) {
    const [first, ...rest] = row.toLowerCase().trim().split('_');
    for (const [i, word] of rest.entries()) {
      rest[i] = word[0].toUpperCase() + word.slice(1);
    }
    console.log(
      (first + rest.join('')).padEnd(20, ' ') + '✅'.repeat(index + 1)
    );
  }
}
```

---

## 🧾 Project Structure

```
📁 project-root/
├── index.html          # Basic UI with styled background and heading
├── script.js           # All JS logic for the challenges
└── README.md           # This file
```
