// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.


//Interface contains the properties that your constructor MUST have
interface UserInterface {
  item:                  string;
}
//Public class and constructor that will implement Interface properties/variables once implemented
class ToDo implements UserInterface {
  constructor (public item:string) {
  }
  addTask(task1) {
    console.log(task1);
  }
  deleteTask(task2) {
    console.log(task2);
  }
  listAllTasks() {
    console.log();
  }
}
