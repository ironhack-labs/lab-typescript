// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

/* helloworld.ts */
interface Tareas {
  newArr: Array<string>;
  addTask(newTask: string);
  listAllTasks();
  deleteTask(task: string): number;
}

class Todo implements Tareas {
  constructor(public newArr = []) {}
  addTask(newTask) {
    this.newArr.push(newTask);
    console.log(`Nueva tarea ${newTask}`);
    console.log(this.newArr.length);
    return this.newArr.length;
  }
  listAllTasks() {
    this.newArr.forEach(function(e) {
      return console.log(e);
    });
  }

  deleteTask(task) {
    this.newArr.splice(this.newArr.indexOf(task), 1);
    console.log("Eliminada tarea " + task);
    console.log(this.newArr.length);
    return this.newArr.length;
  }
}

let myTodos1 = new Todo ()

console.log("Number of items:", myTodos1.addTask("This is our first task"));
console.log("Number of items:", myTodos1.addTask("Eat pizza 🍕 yummy!!!"));
console.log(
  "Number of items:",
  myTodos1.addTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos1.addTask("Finish this iteration 2!! 🤓")
);
console.log(
  "Number of items:",
  myTodos1.addTask("Finish this iteration 3!! 🤓")
);
myTodos1.listAllTasks();
console.log(
  "Number of items:",
  myTodos1.deleteTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos1.deleteTask("Finish this iteration 2!! 🤓")
);
myTodos1.listAllTasks();
