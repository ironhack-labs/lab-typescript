// Iteration 1
// 1. Create an array of strings
var allTask: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
  function addTask(task) {
      this.task = task;
      return allTask.push(this.task)
  }

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  allTask.forEach(function (allOfTheTask){
    console.log(allOfTheTask)
    console.log('===============>>>>>>>>>>')
  })
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
  var i = allTask.indexOf(task);
  if (i != -1) {
      allTask.splice(i, 1);
  }
  return allTask
}



// Execution
console.log("Number of items:", addTask('This is our first task'), "YEAH YOU RIGHT");
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'), "YEAH YOU RIGHT 2");
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'), "YEAH YOU RIGHT 3");
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'), "YEAH YOU RIGHT 4");
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'), "YEAH YOU RIGHT 5");
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
