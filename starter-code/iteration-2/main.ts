// Add the reference to the "TodoInterface"

const testArray = [''];

interface Task {
  task: string;
}


// 1. Create a class Todo that implements the Interface created before.

class Todo implements Task {
  task: string;

  constructor (element: string) {
    this.task = element;
  }
  
  addTask(task) {
    testArray.push(task)
    return testArray 
  }

  listAllTasks() {
    testArray.forEach((element) => {
      console.log(element)
    })
  }

  deleteTask(task) {
    const removePosition = testArray.indexOf(task)
    testArray.splice(removePosition, 1)
  }

}

// Execution
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
