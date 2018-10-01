// Write the interface for class TodoItem. It must have:
interface TodoItemInterface {
  title:string;
  status: boolean;
  updatedAt: Date;
  toggleStatus():void;
}

// Write the interface for class Todo. It must have:
interface TodoListInterface {
  array: Array<string>;
  addTask(TodoItem:string):number;
  listAllTasks():void;
  deleteTask(TodoItem:string):number;
}


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title:string = ``;
  status: boolean = true;
  updatedAt: Date;

  constructor(title:string){
    this.title = title;
    this.updatedAt = new Date();
  }

  toggleStatus () {
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}


// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
  array: Array<string>;

  addTask(task:string):number{
    this.array.push(task);
    console.log(`${task} has been added`)
    console.log(task.length)
    return task.length;
  }

  listAllTasks():void {
    console.log(this.array)
  }

  deleteTask(task:string):number {
    const index = this.array.indexOf(task)
    this.array.splice(index, 1);
    console.log (`the ${task} has been deleted`)
    return this.array.length;
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
myTodos.listUncomplete();
