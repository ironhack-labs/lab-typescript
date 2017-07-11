// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoList{
  listOfTasks: string[] = [];
  constructor(){}

  addTask (task: string) {
    this.listOfTasks.push(task);
    return this.listOfTasks.length;
  }
  // 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks () {
    this.listOfTasks.forEach((oneTask) => {
      console.log(oneTask);
    })
  }
  // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  deleteTask (task: string) {
    let indexOfString = this.listOfTasks.indexOf(task);
    if (indexOfString) {
      this.listOfTasks.splice(indexOfString, 1);
      console.log(task+' has been deleted');
    }
    else {
      console.log("Task does not exist");
    }
    return this.listOfTasks.length;
  }

}

// Execution
let myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();
