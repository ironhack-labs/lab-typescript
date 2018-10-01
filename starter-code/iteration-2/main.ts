let firstArray = [];

interface TaskInterface {
  task: string;
}

class Todo implements TaskInterface {
  task: string;

  constructor(element: string){
    this.task = element;
  }

  addTask(task){
    firstArray.push(task);
    return firstArray;
  }

  listAllTasks() {
    firstArray.forEach ((element) => {
      console.log(element)
    }) 
  }

  deleteTask(task){
    firstArray.splice(0, 1, task);
    console.log(`${task} have been removed`);
    console.log(`the current number of elements is ${task.length}`);
    return task.length;
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
