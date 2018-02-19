// Iteration 1
// 1. Create an array of strings

class List {
  taskList: Array<string> = [];
  constructor (taskList:Array<string>) { }
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
  addTask (task: string): number {
  this.taskList.push(task);
  console.log("====== NEW TASK ======");
  console.log(`Task ${task} added to the list`);
  console.log("Number of items: " + this.taskList.length);
  return this.taskList.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks(): void {
  for (var i = 0; i < this.taskList.length; i++) {
      console.log(this.taskList[i]);
  }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
  deleteTask (task: string): number {
  let index = this.taskList.indexOf(task);
  this.taskList.splice(index);
  console.log("====== TASK REMOVED ======");
  console.log(`Task ${task} removed from the list`);
  console.log("Number of items: " + this.taskList.length);
  return this.taskList.length;
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
