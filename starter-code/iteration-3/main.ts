// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface{

  done: boolean;
  updateAt: Date;

  constructor(public title:string) {};
  toggleDone():void{
    this.done = !this.done;
  };
};

class TodoList implements TodoInterface{
  todoItems: TodoItemInterface[]=[];

  addTask(task:TodoItemInterface):void{
    this.todoItems.push(task);
  };
  listAllTasks():void{
    this.todoItems.forEach( task  => console.log(task.title));
  }
  deleteTask(task:TodoItemInterface):void{
    let index = this.todoItems.indexOf(task);
    this.todoItems.splice(index, 1);
  };
  listUncomplete():void{
    this.todoItems.forEach(task => {
      if (task.done == false) {
        console.log(task.title);
      }
    })
  };
}


// Create class TodoList that implements the corresponding interface

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
