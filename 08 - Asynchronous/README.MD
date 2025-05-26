# 📦 Understanding Promises Through Image Loading

This project is designed to help you **grasp JavaScript Promises** by applying them to a real, visual task: loading images onto a web page **asynchronously**.

---

## 🤔 What is a Promise?

> A **Promise** is a JavaScript object that represents a **future value** — something that will be available **later**, after an asynchronous task finishes.

In other words, it’s a placeholder for a result we don’t have _yet_.

### A Promise has 3 states:

1. **Pending** – the operation hasn't finished yet.
2. **Fulfilled** – the operation completed successfully (→ `.then()`).
3. **Rejected** – the operation failed (→ `.catch()`).

---

## 🧪 Why Use Promises?

Without Promises, asynchronous code often ends up deeply nested — hard to read and maintain (aka “callback hell”). Promises let us write **flatter**, cleaner, more readable asynchronous code by chaining steps.

---

## 🔧 Core Functions Explained

### `createImage(imgPath)`

This function creates a Promise that:

- Tries to load an image (`img.src = ...`)
- Resolves (succeeds) when the image loads (`.addEventListener('load')`)
- Rejects (fails) if loading fails (`.addEventListener('error')`)

```js
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img); // Image loaded successfully
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not Found')); // Loading failed
    });
  });
};
```

✅ If the image loads → `resolve(img)`

❌ If it fails → `reject(error)`

---

### `wait(seconds)`

This is a Promise-based delay function:

```js
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
```

It resolves automatically after a number of seconds, giving us a “pause” we can use in a Promise chain.

---

## 🔁 Putting It Together: Chaining Promises

We load one image → wait 2 seconds → hide it → load the next one. This is done step-by-step using `.then()` chaining.

```js
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2); // Wait 2 seconds
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg'); // Load next image
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2); // Wait again
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg'); // Load third image
  })
  .catch(err => console.error(err)); // Catch any error
```

### 👇 This chain shows:

- How we wait for each asynchronous step to finish before moving to the next.
- How `.then()` gives access to the result from the previous step.
- How `.catch()` catches any error in the whole chain.

---

## 🧠 Recap: Why Promises Matter

| Without Promises                  | With Promises                  |
| --------------------------------- | ------------------------------ |
| Messy, deeply nested callbacks    | Clean, flat chaining           |
| Hard to read/debug                | Easier to understand           |
| Error handling is fragmented      | Centralized with `.catch()`    |
| No return values from async steps | Can pass results through chain |
