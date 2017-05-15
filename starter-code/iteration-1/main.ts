// Iteration 1
// 1. Create an array of strings
let myTask: Array<string> = []
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string):number{
  this.myTask.push(task);
  console.log("=========== NEW TASK ===========");
  console.log(`Task ${task} inserted in the list`);
 return myTask.length
}

// 3. Create a function to list all tasks, it must show in the console the task.
function listAllTasks(){
for (let i of this.myTask) {
   console.log(i);
}
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string):number{
  for (let i in this.myTask) {
     if(this.myTask[i] === task) {
      this.myTask.splice(i, 1);
      console.log("=========== TASK REMOVED ===========");
      console.log("Task "+task+" removed from the list");
    }
  }
 return myTask.length
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
