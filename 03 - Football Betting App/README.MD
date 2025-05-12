# ⚽ Football Betting App – Coding Challenge Series

This project is part of the course **"The Complete JavaScript Course"** and focuses on using modern JavaScript features such as **destructuring**, **spread/rest operators**, **logical operators**, and **short-circuiting**.

We simulate logic for a basic football (soccer) betting app based on hardcoded data from a fictional match between **Bayern Munich** and **Borrussia Dortmund**.

---

## 📚 Challenges Overview

### 💡 Challenge #1 – Team Setup & Odds

Work with arrays and objects to extract and manipulate player data and betting odds.

### 💡 Challenge #2 – Match Analysis & Formatting

Analyze game results, calculate averages, and present match data in a clean, dynamic way.

---

## 🧠 Concepts Practiced

- Array and object destructuring
- Spread and rest syntax
- Logical assignment and short-circuiting
- Iterating with `for...of`, `entries()`, and `Object` methods
- Optional chaining and dynamic property access

---

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

---

## 🧾 Project Structure

```
📁 project-root/
├── index.html          # Basic UI with styled background and heading
├── script.js           # All JS logic for the challenges
└── README.md           # This file
```
