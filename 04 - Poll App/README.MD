# 📊 Poll App & Closure Logic – Coding Challenge Series

This project is part of the course **"The Complete JavaScript Course"** and focuses on practical JavaScript concepts like **object methods**, **event handling**, **closures**, and **IIFE (Immediately Invoked Function Expressions)**.

We build a basic **polling application** and explore the power of **closures in DOM interaction**, all while reinforcing the understanding of JavaScript's execution context and function scopes.

---

## 📚 Challenges Overview

### 💡 Challenge #1 – Poll Application

Create a poll system that accepts user input and dynamically displays results.

### 💡 Challenge #2 – DOM & Closures

Demonstrate how closures allow access to variables after the original scope has finished executing.

---

## 🧠 Concepts Practiced

- Object method creation
- `this` context and binding
- DOM interaction with `addEventListener()`
- Closures and scope chains
- `call()` for function context injection
- IIFE (Immediately Invoked Function Expressions)

---

## 📊 Challenge #1 – Poll Application

### ✅ Tasks

1. Prompt user to select a poll answer and update results.
2. Validate input to ensure it’s a valid option.
3. Add a method to display results as either an array or string.
4. Attach a button event listener using `bind()` to retain `this`.
5. BONUS: Reuse the `displayResults()` method to display external test data.

### 🔍 Code Snippets

#### 📝 Poll Object Structure

```js
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
```

#### 📥 Registering User Answers

```js
registerNewAnswer() {
  const answer = Number(
    prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
  );

  if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
    this.answers[answer]++;
  }

  this.displayResults();
  this.displayResults('string');
}
```

#### 📊 Displaying Results

```js
displayResults(type = 'array') {
  if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  } else {
    console.log(this.answers);
  }
}
```

#### 🖱 Event Listener Setup

```js
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
```

#### 🧪 Bonus Test Data Usage

```js
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
```

---

## 🔁 Challenge #2 – DOM & Closures

### ✅ Tasks

1. Change an `<h1>` element's color when the page loads.
2. Change its color again when the body is clicked, without reselecting it.
3. Explain why this works using the concept of **closures**.

### 🔍 Code Snippet

```js
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
```

### 💬 Why This Works

Even though the enclosing function has finished executing, the event listener’s callback **retains access** to the `header` variable because of **closures** — it keeps a reference to the scope where it was originally defined.

---

## 🧾 Project Structure

```
📁 poll-closure-challenges/
├── index.html          # Button and heading elements
├── script.js           # JS logic for poll and closure demo
└── README.md           # This file
```
