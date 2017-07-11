// Iteration 1
// 1. Create an array of strings
let newTaskList: string[] = [""];
newTaskList = ["eating Breakfast", "Doing Dishes", "Clean"];
console.log(newTaskList);

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(newTask) {
  newTaskList.push(newTask);
  newTaskList.forEach(function(newTask) {
    console.log(newTaskList);
  });

};

addTask("laundry");

// 3. Create a function to list all tasks, it must show in the console de task.



// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(num,pos) {
  newTaskList.splice(num,pos);
}

deleteTask(1,2);



// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
// console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks();
