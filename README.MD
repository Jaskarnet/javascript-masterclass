<!-- omit from toc -->
# JavaScript Course Notes

📘 This repository contains my personal notes as I follow [**The Complete JavaScript Course** on Udemy](https://www.udemy.com/course/the-complete-javascript-course). It's a living document meant to reinforce what I'm learning and serve as a future reference.

<!-- omit from toc -->
## 📚 Table of Contents
- [1. Fundamentals](#1-fundamentals)
  - [1.1. 🧠 What is JavaScript?](#11--what-is-javascript)
  - [1.2. 🧾 Variable Naming Conventionss](#12--variable-naming-conventionss)
  - [1.3. 🧮 Data Types](#13--data-types)
    - [1.3.1. `Number`](#131-number)
    - [1.3.2. `String`](#132-string)
    - [1.3.3. `Boolean`](#133-boolean)
    - [1.3.4. `Undefined`](#134-undefined)
    - [1.3.5. `Null`](#135-null)
    - [1.3.6. `Symbol` *(ES6 / 2015)*](#136-symbol-es6--2015)
    - [1.3.7. `BigInt` *(ES2020)*](#137-bigint-es2020)
  - [1.4. 📦 Variable Declarations](#14--variable-declarations)
    - [1.4.1. `let`](#141-let)
    - [1.4.2. `const`](#142-const)
    - [1.4.3. `var` (❗avoid using it)](#143-var-avoid-using-it)
  - [1.5. ➗ Operators](#15--operators)
  - [1.6. 📝 Template Literals](#16--template-literals)
  - [1.7. 🔄 Type Conversion and Coercion](#17--type-conversion-and-coercion)
    - [1.7.1. Type Conversion (Manual)](#171-type-conversion-manual)
    - [1.7.2. Type Coercion (Automatic)](#172-type-coercion-automatic)
  - [1.8. ⚖️ Truthy and Falsy Values](#18-️-truthy-and-falsy-values)
  - [1.9. 🟰 Equality Operators](#19--equality-operators)
    - [1.9.1. Strict Equality (`===`)](#191-strict-equality-)
    - [1.9.2. Loose Equality (`==`)](#192-loose-equality-)
    - [1.9.3. Inequalities](#193-inequalities)
    - [1.9.4. Best Practice](#194-best-practice)
  - [1.10. 🧷 Strict Mode](#110--strict-mode)
  - [1.11. 📐 Function Declarations vs Expressions](#111--function-declarations-vs-expressions)
  - [1.12. 🏹 Arrow Functions](#112--arrow-functions)
  - [1.13. 🔢 Arrays](#113--arrays)
    - [1.13.1. Basic Array Operations (Methods)](#1131-basic-array-operations-methods)
      - [1.13.1.1. Adding elements](#11311-adding-elements)
      - [1.13.1.2. Removing elements](#11312-removing-elements)
      - [1.13.1.3. Finding elements](#11313-finding-elements)
  - [1.14. 🧱 Objects](#114--objects)
    - [1.14.1. Dot vs. Bracket Notation](#1141-dot-vs-bracket-notation)
    - [1.14.2. Object Methods](#1142-object-methods)

# 1. Fundamentals

## 1.1. 🧠 What is JavaScript?

JavaScript is a **high-level, object-oriented, multi-paradigm programming language** 

It has evolved significantly since its creation:

- **ES5 (2009)**: Served as the standard for many years.
- **ES6 / ES2015 (2015)**: A major update introducing many modern features:
  - `let` / `const`
  - Arrow functions (`=>`)
  - Template literals
  - Classes
  - Destructuring
  - And many more
- **ES2016 – ES2022**: Smaller annual updates adding new features.

Modern browsers automatically support the latest features.  
For older browsers, tools like **Babel** can transpile modern code to ES5.

The language continues to evolve, with new features proposed through a **4-stage process** before being officially included in the standard.

## 1.2. 🧾 Variable Naming Conventionss

In JavaScript, the standard for naming variables is **camelCase**, starting with a lowercase letter.

```js
let userAge = 25;
let totalPrice = 19.99;
```

Variable names **cannot begin with a number**, but they can include letters, digits, underscores (`_`), and dollar signs (`$`).

```js
let 1stUser = 'John';     // ❌ Invalid: starts with a number
let count1 = 1;           // ✅ Valid
let _internal = 'yes';    // ✅ Valid
let $response = 200;      // ✅ Valid
```

**Reserved keywords** like `let`, `function`, or `return` cannot be used directly as variable names.

```js
let let = 5;              // ❌ Invalid: 'let' is reserved
```

While you technically can prefix reserved words with `_` or `$` (e.g., `_class`, `$return`), it’s discouraged for clarity and readability.

```js
let _class = 'Warrior';   // ✅ Legal, but discouraged
let $return = 'value';    // ✅ Legal, but discouraged
```

The variable name `name` is technically allowed, but it can conflict with built-in browser objects, so it's best avoided.

```js
let name = 'Alice';       // ⚠️ Allowed, but may cause issues
```

Constants that **never change** should be written in **all uppercase**, using underscores to separate words.

```js
const MAX_USERS = 100;
const API_KEY = 'abc123';
```

Regardless of syntax rules, always aim for **clear and descriptive** names that reflect the purpose of the variable.

```js
let x = 42;               // ❌ Vague
let userScore = 42;       // ✅ Descriptive
```


## 1.3. 🧮 Data Types

**JavaScript uses dynamic typing.**

You do **not** need to manually define the data type of a variable. The type is determined **automatically at runtime** based on the value assigned.

Keep in mind that **values** have types, not the variables themselves. Variables simply hold those values.

One quirky detail worth remembering — `null` is a primitive type, but `typeof null` returns `object` due to a long-standing bug in JavaScript's type system. It was never fixed to avoid breaking legacy code.

```js
console.log(typeof null); // "object" — known bug 🐞
```


### 1.3.1. `Number`  
Represents floating-point numbers. Used for both integers and decimals.

```js
let age = 23;
let price = 19.99;
```

### 1.3.2. `String`  
A sequence of characters, used for textual data. Can be written with single or double quotes.

```js
let firstName = 'Jonas';
let lastName = "Smith";
```

### 1.3.3. `Boolean`  
Logical type with only two possible values: `true` or `false`. Commonly used in conditionals.

```js
let isAdult = true;
let hasLicense = false;
```

### 1.3.4. `Undefined`  
A variable that has been declared but **not assigned** a value yet.

```js
let children;
console.log(children); // undefined
```

### 1.3.5. `Null`  
Represents an explicitly **empty** or unknown value.  
Often used intentionally to reset or clear a variable.

```js
let selectedProduct = null;
```

### 1.3.6. `Symbol` *(ES6 / 2015)*  
A unique and immutable value, often used as object property keys to avoid naming conflicts.

```js
const id = Symbol('id');
```

### 1.3.7. `BigInt` *(ES2020)*  
Used to represent integers **larger than the `Number` type can safely handle**.

```js
const huge = 1234567890123456789012345678901234567890n;
```

## 1.4. 📦 Variable Declarations

### 1.4.1. `let`
Use `let` to declare variables that can be reassigned (mutable).

```js
let age = 30;
age = 31; // ✅ valid
```

### 1.4.2. `const`
Use `const` for variables that should never change (immutable). You must assign a value immediately when using `const`.

```js
const birthYear = 1991;
birthYear = 1990; // ❌ Error: Assignment to constant variable

const job; // ❌ Error: Missing initializer in const declaration
```

### 1.4.3. `var` (❗avoid using it)
`var` is the old way of declaring variables before ES6. While it may appear similar to `let`, it behaves differently under the hood.

```js
var job = 'programmer';
job = 'teacher';
```

The key difference:  
- `let` is **block scoped**  
- `var` is **function scoped**

---
You can even assign a value to a variable without declaring it — but this is strongly discouraged.

```js
lastName = 'Schmedtmann'; // no let, const, or var
console.log(lastName);    // ⚠️ works, but...
```

This implicitly creates a global variable (adds a property to the global object), which can easily lead to bugs and hard-to-maintain code. **Avoid doing this**.


## 1.5. ➗ Operators

Exponentiation (`**`)
Raises the first number to the power of the second:

```js
console.log(2 ** 3); // 8
```

[Operator precedence table (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)

## 1.6. 📝 Template Literals

Template literals (introduced in ES6) are an easier, cleaner way to build strings in JavaScript.  
They allow embedding expressions directly inside the string using backticks <code>\` \`</code> and the `${}` syntax.


```js
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// Traditional string concatenation
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas); // "I'm Jonas, a 46 years old teacher!"

// Template literal version (cleaner)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew); // "I'm Jonas, a 46 years old teacher!"

// Multiline Strings with Template Literals
const multiline = `This is a string
that spans multiple
lines without using \\n`;
```

Template literals make the code more readable and easier to write, especially when mixing strings with variables or expressions even across multiple lines.

## 1.7. 🔄 Type Conversion and Coercion

### 1.7.1. Type Conversion (Manual)

**Type conversion** is when you manually convert a value from one type to another.

```js
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  // 1991 '1991'
console.log(Number(inputYear) + 18);        // 2009

console.log(Number('Jonas'));               // NaN → Not a Number
console.log(typeof NaN);                    // 'number' → NaN is still of type number

console.log(String(23));                    // '23' → Appears white in the console (string)
```

### 1.7.2. Type Coercion (Automatic)

**Type coercion** occurs when JavaScript automatically converts one data type to another behind the scenes.
It happens whenever an operation involves values of different types, and JavaScript attempts to make them compatible by converting one to match the other.

```js
console.log('I am ' + 23 + ' years old');   // 'I am 23 years old'
console.log('23' - '10' - 3);               // 10 → '-' forces number conversion
console.log('23' * '2');                    // 46 → '*' converts both to numbers

let n = '1' + 1;                            // '11' → '+' triggers string concatenation
n = n - 1;                                  // 10 → '-' coerces '11' to number
console.log(n);                             // 10

n = 2 + 3 + 4 + '5';                             
console.log(n);                             // '95' → 2+3+4=9 → '9'+'5' = '95'

n = '10' - '4' - '3' - 2 + '5';
console.log(n);                             // '15' → 10-4-3-2=1 → 1+'5' = '15'
```

Understanding when JavaScript converts types automatically helps you avoid unexpected bugs.

## 1.8. ⚖️ Truthy and Falsy Values

In JavaScript, **falsy values** are values that automatically convert to `false` when evaluated in a boolean context.

There are exactly **five falsy values**:
- `0`
- `''` (empty string)
- `undefined`
- `null`
- `NaN`
  
All other values are considered **truthy**, meaning they convert to `true`.

```js
console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean('Jonas'));    // true
console.log(Boolean({}));         // true
```

## 1.9. 🟰 Equality Operators

In JavaScript, there are two main types of equality operators:

### 1.9.1. Strict Equality (`===`)
The **strict equality operator** (`===`) checks whether two values are exactly the same **without performing type coercion**. This means both the value and the type must match.

```js
console.log(3 === 3);            // true  (same value and same type)
console.log('3' === 3);          // false (different types: string vs number)
console.log(true === 1);         // false (different types: boolean vs number)
console.log(undefined === null); // false (different types)
```

### 1.9.2. Loose Equality (`==`)
The **loose equality operator** (`==`) performs **type coercion**. This means it converts one or both values to the same type before making the comparison.

```js
console.log(3 == 3);            // true  (same value, same type)
console.log('3' == 3);          // true  (loose coercion, string '3' is converted to number 3)
console.log(true == 1);         // true  (loose coercion, true is converted to 1)
console.log(undefined == null); // true  (both are treated as "empty" values)
```
### 1.9.3. Inequalities
The strict inequality operator (`!==`) checks if two values are not equal in both value and type without type coercion, while the loose inequality operator (`!=`) does type coercion before checking inequality.

### 1.9.4. Best Practice
Always prefer strict equality (`===`) and strict inequality (`!==`) to avoid unexpected type coercion.

## 1.10. 🧷 Strict Mode

Strict mode helps you write cleaner, more secure JavaScript.  
Place `'use strict';` at the beginning of your script (or function) to enable it.

It prevents certain silent errors by throwing exceptions, forbids the use of reserved keywords, and generally enforces better coding practices.

```js
'use strict'; 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // ❌ Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; // ❌ Uncaught SyntaxError: Unexpected strict mode reserved word
```

## 1.11. 📐 Function Declarations vs Expressions

<!-- omit from toc -->
### Function Declaration
```js
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
```

<!-- omit from toc -->
### Function Expression
```js
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2); // Both produce the same result
```

The main difference is that **function declarations are hoisted**, meaning they can be called **before** they are defined in the code.  
**Function expressions**, however, are **not hoisted** and will throw an error if called before their definition:

```js
// ✅ This works
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// ❌ This causes an error
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
```

Both are valid in JavaScript. The choice often depends on personal preference and use case.

## 1.12. 🏹 Arrow Functions

Arrow functions were introduced in **ES6** as a more concise way to write function expressions — especially useful for **simple one-liners**.

<!-- omit from toc -->
### Examples

```js
// Arrow function with one parameter and implicit return
const square = number => number ** 2;
const result = square(5);
console.log(result); // 25

// Arrow function with multiple parameters and multiple lines
const greetPerson = (name, age) => {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return message;
};
console.log(greetPerson('Alice', 30)); // Hello, Alice! You are 30 years old.

```

<!-- omit from toc -->
### Key points about arrow functions:
- For one parameter and one-line body, you can omit parentheses around parameters and curly braces.
- With a one-liner without curly braces, the return is implicit.
- For multiple parameters, you need parentheses: `(param1, param2) => expression`.
- For multiple lines of code, you need curly braces and an explicit `return` statement.
- Arrow functions don't have their own `this` keyword (important for more advanced JavaScript).

## 1.13. 🔢 Arrays
Arrays allow us to store multiple related values in a single variable, rather than creating separate variables for each value.


```js
// Instead of this:
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// We can use an array:
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Alternative syntax (less common)
const years = new Array(1991, 1984, 2008, 2020);
```

Accessing array elements (using zero-based indexing).

```js
console.log(friends[0]); // Michael
console.log(friends[2]); // Peter
// Getting the array length
console.log(friends.length); // 3
// Getting the last element
console.log(friends[friends.length - 1]); // Pete
```

Arrays can be mutated even when declared with const.
```js
friends[1] = 'Jay'; // Replace 'Steven' with 'Jay'
console.log(friends); // ['Michael', 'Jay', 'Peter']
// However, this would not work:
// friends = ['Bob', 'Alice']; // Error! Cannot reassign const
variable
```

Arrays can hold values of **different types**.
```js
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',
friends];
console.log(jonas);
```

When you use the `+` operator between a string and an array, JavaScript converts the array to a string (comma-separated values) and then concatenates. When using the `-` operator with an array and a string (or number), JavaScript tries to convert both operands to numbers. If it fails (like when one is a string or an array of strings), the result is `NaN`.

```js
// + operator (concatenation)
console.log('Hello ' + [1, 2, 3]); // "Hello 1,2,3"

// - operator (numeric coercion)
console.log('Hello' - [1, 2, 3]); // NaN
```

### 1.13.1. Basic Array Operations (Methods)

JavaScript provides built-in methods to manipulate arrays:

#### 1.13.1.1. Adding elements

```js
const friends = ['Michael', 'Steven', 'Peter'];
// Add to end
friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// Add to beginning
friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
```
Push and unshift both return the new array length.

```js
const newLength = friends.push('Andrew');
console.log(newLength); // 6
```

#### 1.13.1.2. Removing elements

```js
// Remove from end
const popped = friends.pop();
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
console.log(popped); // 'Andrew'
// Remove from beginning
const shifted = friends.shift();
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(shifted); // 'John'
```

#### 1.13.1.3. Finding elements

```js
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1 (not found)
// ES6 method - returns boolean
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
```

The `includes` method is useful for conditionals.

```js
if (friends.includes('Peter')) {
 console.log('You have a friend called Peter!');
}
```

## 1.14. 🧱 Objects

While arrays are great for ordered data, objects let us define key-value pairs.

```js
const jonas = {
 firstName: 'Jonas',
 lastName: 'Schmedtmann',
 age: 2037 - 1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven'],
};
```

This is called an object literal syntax - we're literally writing down the object content.
Objects allow us to:
- Give each piece of data a name (key or property name)
- Store unstructured and related data
- Access data by its name rather than position

Unlike arrays, the order of properties in objects doesn't matter when retrieving data.

### 1.14.1. Dot vs. Bracket Notation

There are two ways to access object properties.

<!-- omit from toc -->
#### Dot Notation

```js
const jonas = {
 firstName: 'Jonas',
 lastName: 'Schmedtmann',
 age: 2037 - 1991,
 job: 'teacher',
 friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas.lastName); // 'Schmedtmann'
```

<!-- omit from toc -->
#### Bracket Notation

```js
console.log(jonas['lastName']); // 'Schmedtmann'
```

The main difference is that bracket notation allows us to use expressions.

```js
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // 'Jonas'
console.log(jonas['last' + nameKey]); // 'Schmedtmann'
// This would NOT work with dot notation:
// console.log(jonas.'last' + nameKey); // Error
```

Bracket notation is useful when we don't know which property to access until runtime.

```js
const interestedIn = prompt('What do you want to know about Jonas?');
if (jonas[interestedIn]) {
 console.log(jonas[interestedIn]);
} else {
 console.log(
 'Wrong request! Choose between firstName, lastName, age, job and
friends.',
 );
}
```

We can also add new properties to objects using either notation.

```js
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
```

### 1.14.2. Object Methods

Since functions are just values in JavaScript, we can add them as properties to objects.

```js
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // Method (function as property)
  calcAge: function () {
    // 'this' refers to the current object (jonas)
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} ${
    this.lastName
    } is a ${this.calcAge()}-year old ${this.job}. He has ${
    this.friends.length
    } friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's
    license.`;
  },
};
```

Functions attached to objects are called methods. We can call them like this.

```js
console.log(jonas.calcAge()); // 46
console.log(jonas['calcAge']()); // 46
console.log(jonas.age); // 46
// Using the getSummary method
console.log(jonas.getSummary()); // "Jonas Schmedtmann is a 46-year old teacher. He has 3 friends and a driver's license."
```