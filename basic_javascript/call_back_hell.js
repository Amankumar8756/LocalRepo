
//
// Callback Hell:
// Callback Hell is a term used to describe a situation in JavaScript where multiple nested callbacks are used to perform asynchronous tasks. It leads to deeply nested and difficult-to-read code, often referred to as the "Pyramid of Doom."

// This happens because each asynchronous operation depends on the result of the previous one, creating multiple levels of nesting.


// Benefits of Avoiding Callback Hell
// Improved Readability: The code is easier to understand and maintain.
// Centralized Error Handling: Using .catch() in Promises or try-catch with Async/Await makes error handling straightforward.
// Scalability: It’s easier to add or modify logic in well-structured asynchronous code.
// Let me know if you'd like further clarification or examples!









function task1(callback) {
  setTimeout(() => {
      console.log("Task 1 completed");
      callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
      console.log("Task 2 completed");
      callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
      console.log("Task 3 completed");
      callback();
  }, 1000);
}

// Nested Callbacks
task1(() => {
  task2(() => {
      task3(() => {
          console.log("All tasks completed");
      });
  });
});


// How to Avoid Callback Hell
// Use Named Functions Instead of nesting anonymous callbacks, use named functions to flatten the structure.

function handleTask3() {
  console.log("Task 3 ---completed");
  console.log("All tasks completed");
}

function handleTask2() {
  task3(handleTask3);
}

function handleTask1() {
  task2(handleTask2);
}

task1(handleTask1);
