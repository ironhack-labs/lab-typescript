// Iteration 1
// 1. Create an array of strings
const myList = [];
// 2. Create a function to add a task in to the array, call it `addTask`,
// the function has to accept a string and don't have to return anything.
function addTask(taskItem) {
    var task = taskItem;
    myList.push(task);
      console.log("Task added!");
    return myList.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    myList.forEach(function (item) {
        console.log(item);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(eatPizza) {
  let deletedIndex = myList.indexOf(eatPizza);

  myList.splice(deletedIndex, 1);
    console.log("Task deleted!");
  return myList.length;
}





// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));

console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();

console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

console.log(myList);
