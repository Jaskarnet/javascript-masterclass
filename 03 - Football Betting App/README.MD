# ⚽ Football Betting App – Coding Challenge #1

This project is part of the course **"The Complete JavaScript Course"** and focuses on using modern JavaScript features such as **destructuring**, **spread/rest operators**, **logical operators**, and **short-circuiting**.

We simulate the logic for a basic football (soccer) betting app based on hardcoded data from a fictional match between **Bayern Munich** and **Borrussia Dortmund**.

---

## 📋 Challenge Overview

You are provided with a `game` object containing details about a football match. The challenge tasks are:

1. Extract player arrays for each team.
2. Separate the goalkeeper and field players.
3. Combine all players into one array.
4. Add substitute players to one team.
5. Destructure betting odds.
6. Implement a flexible `printGoals` function.
7. Determine which team is more likely to win using logical operators.

---

## 🧠 Concepts Practiced

- Array and object destructuring
- Spread and rest syntax
- Logical assignment and short-circuiting
- ES6+ syntax and functions

---

## ✅ Features Demonstrated

### 🔹 1. Players Destructuring

Split the players of each team into individual arrays:

```js
const [players1, players2] = game.players;
```

### 🔹 2. Goalkeeper and Field Players

Extract the goalkeeper and the rest of the team:

```js
const [gk, ...fieldPlayers] = players1;
```

### 🔹 3. Combine All Players

Combine players from both teams:

```js
const allPlayers = [...players1, ...players2];
```

### 🔹 4. Add Substitute Players

Add new players to the team during the game:

```js
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
```

### 🔹 5. Destructuring Odds

Extract nested values from the `odds` object:

```js
const {
  odds: { team1, x: draw, team2 },
} = game;
```

### 🔹 6. `printGoals` Function

Print the players and the number of goals:

```js
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach(player => console.log(player));
}
```

### 🔹 7. Predict Match Winner

Use logical short-circuiting to determine the likely winner:

```js
team1 < team2 && console.log(`${game.team1} is more likely to win`);
```

---

## 🧾 Project Structure

```
📁 project-root/
├── index.html          # Basic UI with styled background and heading
├── script.js           # All JS logic for the challenge
└── README.md           # This file
```
