// Iteration 1
// 1. Create an array of strings

var tasksList: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(nameTask:string){
  tasksList.push(nameTask);
  console.log("Task: " + nameTask + " inserted in the list");
  return tasksList.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  for(var i =0; i<tasksList.length; i++){
    console.log(tasksList[i]);
  }
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(taskName){
  var position = tasksList.indexOf(taskName);
  if(position === -1){
    console.log("no match");
  } else{
    tasksList.splice(position, 1);
    console.log("Task: " + taskName + " deleted from the list");
    return tasksList.length;
  }
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
