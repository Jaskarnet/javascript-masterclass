<!-- omit from toc -->
# JavaScript Course Notes

📘 This repository contains my personal notes as I follow [**The Complete JavaScript Course** on Udemy](https://www.udemy.com/course/the-complete-javascript-course). It's a living document meant to reinforce what I'm learning and serve as a future reference.

<!-- omit from toc -->
## 📚 Table of Contents
- [🧠 What is JavaScript?](#-what-is-javascript)
- [🧾 Variable Naming Conventionss](#-variable-naming-conventionss)
- [🧮 Data Types](#-data-types)
  - [`Number`](#number)
  - [`String`](#string)
  - [`Boolean`](#boolean)
  - [`Undefined`](#undefined)
  - [`Null`](#null)
  - [`Symbol` *(ES6 / 2015)*](#symbol-es6--2015)
  - [`BigInt` *(ES2020)*](#bigint-es2020)
- [📦 Variable Declarations](#-variable-declarations)
  - [`let`](#let)
  - [`const`](#const)
  - [`var` (❗avoid using it)](#var-avoid-using-it)
- [➗ Operators](#-operators)
- [📝 Template Literals](#-template-literals)
- [🔄 Type Conversion and Coercion](#-type-conversion-and-coercion)
  - [Type Conversion (Manual)](#type-conversion-manual)
  - [Type Coercion (Automatic)](#type-coercion-automatic)
- [⚖️ Truthy and Falsy Values](#️-truthy-and-falsy-values)
- [🟰 Equality Operators](#-equality-operators)
  - [Strict Equality (`===`)](#strict-equality-)
  - [Loose Equality (`==`)](#loose-equality-)


## 🧠 What is JavaScript?

JavaScript is a **high-level, object-oriented, multi-paradigm programming language** 


## 🧾 Variable Naming Conventionss

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


## 🧮 Data Types

**JavaScript uses dynamic typing.**

You do **not** need to manually define the data type of a variable. The type is determined **automatically at runtime** based on the value assigned.

Keep in mind that **values** have types, not the variables themselves. Variables simply hold those values.

One quirky detail worth remembering — `null` is a primitive type, but `typeof null` returns `object` due to a long-standing bug in JavaScript's type system. It was never fixed to avoid breaking legacy code.

```js
console.log(typeof null); // "object" — known bug 🐞
```


### `Number`  
Represents floating-point numbers. Used for both integers and decimals.

```js
let age = 23;
let price = 19.99;
```

### `String`  
A sequence of characters, used for textual data. Can be written with single or double quotes.

```js
let firstName = 'Jonas';
let lastName = "Smith";
```

### `Boolean`  
Logical type with only two possible values: `true` or `false`. Commonly used in conditionals.

```js
let isAdult = true;
let hasLicense = false;
```

### `Undefined`  
A variable that has been declared but **not assigned** a value yet.

```js
let children;
console.log(children); // undefined
```

### `Null`  
Represents an explicitly **empty** or unknown value.  
Often used intentionally to reset or clear a variable.

```js
let selectedProduct = null;
```

### `Symbol` *(ES6 / 2015)*  
A unique and immutable value, often used as object property keys to avoid naming conflicts.

```js
const id = Symbol('id');
```

### `BigInt` *(ES2020)*  
Used to represent integers **larger than the `Number` type can safely handle**.

```js
const huge = 1234567890123456789012345678901234567890n;
```

## 📦 Variable Declarations

### `let`
Use `let` to declare variables that can be reassigned (mutable).

```js
let age = 30;
age = 31; // ✅ valid
```

### `const`
Use `const` for variables that should never change (immutable). You must assign a value immediately when using `const`.

```js
const birthYear = 1991;
birthYear = 1990; // ❌ Error: Assignment to constant variable

const job; // ❌ Error: Missing initializer in const declaration
```

### `var` (❗avoid using it)
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
console.log(lastName);    // ✅ works, but...
```

This implicitly creates a global variable (adds a property to the global object), which can easily lead to bugs and hard-to-maintain code. **Avoid doing this**.


## ➗ Operators

Exponentiation (`**`)
Raises the first number to the power of the second:

```js
console.log(2 ** 3); // 8
```

[Operator precedence table (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)

## 📝 Template Literals

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

## 🔄 Type Conversion and Coercion

### Type Conversion (Manual)

**Type conversion** is when you manually convert a value from one type to another.

```js
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  // 1991 '1991'
console.log(Number(inputYear) + 18);        // 2009

console.log(Number('Jonas'));               // NaN → Not a Number
console.log(typeof NaN);                    // 'number' → NaN is still of type number

console.log(String(23));                    // '23' → Appears white in the console (string)
```

### Type Coercion (Automatic)

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

## ⚖️ Truthy and Falsy Values

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

## 🟰 Equality Operators

In JavaScript, there are two main types of equality operators:

### Strict Equality (`===`)
The **strict equality operator** (`===`) checks whether two values are exactly the same **without performing type coercion**. This means both the value and the type must match.

```js
console.log(3 === 3);            // true  (same value and same type)
console.log('3' === 3);          // false (different types: string vs number)
console.log(true === 1);         // false (different types: boolean vs number)
console.log(undefined === null); // false (different types)
```

### Loose Equality (`==`)
The **loose equality operator** (`==`) performs **type coercion**. This means it converts one or both values to the same type before making the comparison.

```js
console.log(3 == 3);            // true  (same value, same type)
console.log('3' == 3);          // true  (loose coercion, string '3' is converted to number 3)
console.log(true == 1);         // true  (loose coercion, true is converted to 1)
console.log(undefined == null); // true (both are treated as "empty" values)
```
<!-- omit from toc -->
### Inequalities:
The strict inequality operator (`!==`) checks if two values are not equal in both value and type without type coercion, while the loose inequality operator (`!=`) does type coercion before checking inequality.

<!-- omit from toc -->
### Best Practice
Always prefer strict equality (`===`) and strict inequality (`!==`) to avoid unexpected type coercion.