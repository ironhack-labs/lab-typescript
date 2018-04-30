interface TasksToDo {
  tasks: Array<string>;
  addTask(task: string): number;
  listAllTasks(): void;
  deleteTask(task: string): number;
}

class Todo implements TasksToDo {
  constructor(public tasks: Array<string>) { }
  
  addTask(task) {
    tasks.push(task);
    console.log(`${task} has been added to tasks`);
    return tasks.length;
  }

  listAllTasks() {
    tasks.forEach((item) => {
      console.log(item);
    })
  }

  deleteTask(task) {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
    console.log(`${task} has been deleted. Now we have ${tasks.length} tasks left`);
    return tasks.length;
  }

}

// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.T('This is our first task'));
console.log("Number of items:", myTodos.T('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
