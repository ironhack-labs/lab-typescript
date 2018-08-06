// Add the reference to the interface
interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus():any;
}

interface TodoListInterface {
  vector: Array<TodoItemInterface>;
  addTask(TodoItem):number;
  listAllTasks():void;
  deleteTask(TodoItem):number;
}
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  status: boolean;
  constructor(public title: string, public updatedAt: Date = new Date()) {}  

  toggleStatus(): void {
    this.updatedAt = new Date();
    this.status = false;
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  vector: Array<TodoItemInterface>;
  
  addTask(task: TodoItemInterface):number {
    this.vector.push(task);    
    console.log('=========== NEW TASK ===========');
    console.log(`Task ${task} inserted in the list`);
    return this.vector.length;    
  }

  listAllTasks():void {
    console.log(this.vector);
  }

  deleteTask(task: TodoItemInterface):number {
    for (let i = 0; task !== this.vector[i]; i++) {
      if (task === this.vector[i]) this.vector.splice(i,1);      
    }
    console.log('=========== TASK REMOVED ===========');
    console.log(`Task ${task} removed from the list`);
    return this.vector.length;
  }

}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
