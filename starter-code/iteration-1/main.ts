// Iteration 1
// 1. Create an array of strings

let tasks: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

let addTask = function (task: string): number {
  this.tasks.push(task);

  console.log("=========== NEW INSERTION ===========");
  console.log(`Task "${task}" inserted in the list`);

  return this.tasks.length;
}


// 3. Create a function to list all tasks, it must show in the console de task.

let listAllTasks = function (): void {
  console.log("========TASKS==========")

  this.tasks.forEach((task, index) => {
      console.log(task);
  });

}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

let deleteTask = function (task: string): number {
  var index = this.tasks.indexOf(task);
  this.tasks.splice(index, 1);

  console.log("==========NEW DELETION===========")
  console.log(`Task "${task}" removed from the list`);

  return this.tasks.lenght;
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
