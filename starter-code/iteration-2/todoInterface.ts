// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.


interface ToDoTasks {
  taskArray: string[];
  addTask(task: string): number;
  listAllTasks();
  deleteTask(task: string): number;
}

class Task implements ToDoTasks {
  taskArray: string[] = [ 'Complete assignment', 'Eat lunch' ];
  addTask(newTask: string) {
    taskArray.push(newTask);
    return taskArray.length,

    console.log("============= NEW TASK =============="),
    console.log("Task: " + newTask + "inserted in the list"),
    console.log("Number of items: " + taskArray.length);
  }

  listAllTasks() {
    // this.taskArray = taskArray;
    taskArray.forEach((eachTask) => {
    console.log(eachTask);
  }
}
