var myArray = [];
function addTask(message) { myArray.push(message); return myArray.length; }
function listAllTasks() { console.log(myArray); }
function deleteTask(message) { myArray.splice(myArray.indexOf(message), 1); return myArray.length; }
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
