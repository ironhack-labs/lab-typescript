// Add the reference to the interface
interface ItemInterface {
  title: string;
  status: string;
  updatedAt: Date;
  toggleStatus();
}

interface ListInterface {
  todoItems: ItemInterface[];
  addTask(task: ItemInterface): number;
  listAllTasks();
  deleteTask(item: ItemInterface): number;
}






// Create class TodoItem that implements the corresponding interface
class TodoItem implements ItemInterface {
  status: string;
  updatedAt: Date;
  
  constructor(public title: string) {
    this.status = 'unfinished';
    this.updatedAt = new Date();
  }

  toggleStatus(){
    if (this.status === 'unfinished') {
      this.status = 'finished';
    } else {
      this.status = 'unfinished';
    }

    this.updatedAt = new Date;
  }

}

// Create class TodoList that implements the corresponding interface
class TodoList implements ListInterface {
  todoItems: TodoItem[];

  constructor() {
    this.todoItems = [];
  }

  addTask(task: TodoItem): number {
    this.todoItems.push(task);

    return this.todoItems.length;
  }
  
  listAllTasks() {
    this.todoItems.forEach(task => {
      console.log(task.title, task.updatedAt.now());
    });
  }
  
  deleteTask(item: TodoItem): number {
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
   
    return this.todoItems.length;
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
