// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor (
    public tasks: Array<string>
  )


  listAllTasks() {
    this.tasks.forEach((task) => {
      console.log(task);
    });
  },

  addTask(task: String) {
    this.tasks.push(task);
    console.log('Task ' + task + ' inserted in the list');
  },

  deleteTask(task: String) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log('Task ' + task + ' removed from the list');
    console.log(tasks);
  }
}

let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();



class ToDo
