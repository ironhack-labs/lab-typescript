// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution

class toDolist {

  private tasks: string[];
  private task: string;

  constructor ( listName: string ) {
    console.log("Created new To Do List called" + listName);
    this.tasks = [];
  }



  addTask(task) {
    this.tasks.push(task);
    console.log("Added " + task)
    return this.tasks.length;
  }

  listAllTasks() {
    console.log("--------------- Task List -------------")
    for (let listItem of this.tasks) {
      console.log(listItem);
    }
  }

  deleteTask(str) {
    let findTask = this.tasks.indexOf(str);
    console.log("Task # " + findTask);
    this.tasks.splice(findTask, 1);
    return this.tasks.length;
  }
}

let tasklist = new toDolist("Typescript ToDo List Bruh");
//
console.log("Number of items:", tasklist.addTask('This is our first task'));
console.log("Number of items:", tasklist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 3!! 🤓'));

tasklist.listAllTasks();
console.log("Number of items:", tasklist.deleteTask('Finish this iteration 1!! 🤓'));
tasklist.listAllTasks();
