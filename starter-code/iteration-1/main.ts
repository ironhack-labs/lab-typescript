// Iteration 1
// 1. Create an array of strings
let myTasks: Array<string> = [];
console.log("Number of items:", addTask('This is our first task'));


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string) {
myTasks.push(task);
return myTasks;
}
addTask("Some shit");
addTask("More shit");
addTask("Even more shit");
console.log(`Number of items: ${myTasks.length}, addTask('Eat pizza 🍕 yummy!!!')`);
// console.log(myTasks.length);



// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks () {
  myTasks.forEach((task) => {
    console.log(task);
  });
 }
 // listAllTasks();
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask (task: string) {
  myTasks.splice(myTasks.indexOf(task), 1);
    // console.log()
}
deleteTask("Some shit");
listAllTasks();
// Execution
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
