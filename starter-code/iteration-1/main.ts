// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution

let myArray = ["comprar huevos", "sacar al perro", "llevar a Luis a clase de piano"];

function addTask(task) {
  myArray.push(task);
  console.log(task + "inserted in the list");
  console.log("Number of items " + myArray.length);
  return myArray.length;
};

function listAllTasks() {
  for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    console.log("Number of items " + myArray.length);
  }
};

function deleteTask(task) {
  myArray.splice(myArray.indexOf(task), 1);
  console.log(task + "remove from the list");
  console.log("Number of items " + myArray.length);
  return myArray.length;
};




// class Greeter {
//     constructor(public message: string) { }
//     sayHi() {
//         return "<h1>" + this.message + "</h1>";
//     }
// }
//
// let greeter = new Greeter("Hello, world!");
//
// document.body.innerHTML = greeter.sayHi();


console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
