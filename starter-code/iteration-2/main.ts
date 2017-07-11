// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  listOfTasks: string[] = [];
  constructor (){}

  listAllTasks() {
    this.listOfTasks.forEach((task) => {
      console.log(task);
    });
  },

  addTask(task: string) {
    this.listOfTasks.push(task);
    console.log('Task ' + task + ' inserted in the list');
  },

  deleteTask(task: string) {
    const index = this.listOfTasks.indexOf(task);
    if (index) {
      this.listOfTasks.splice(index, 1);
      console.log('Task ' + task + ' removed from the list');
    } else {
      console.log('Task doesn\'t exist');
    }
  }

}//----------------END OF CLASS--------------------

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
