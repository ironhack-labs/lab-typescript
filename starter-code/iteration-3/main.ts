// Add the reference to the interface
interface listItemInterface {
  title:string;
  status:boolean;
  updatedAt:string;
  toggleStatus():boolean;
}

interface todoListInterface {
  listItemElements:listItemInterface[];
  addTask(todoItem: listItemInterface):number;
  listAllTasks():void;
  deleteTask(todoItem:listItemInterface):number;
}


// Create class TodoItem that implements the corresponding interface

class TodoItem implements listItemInterface {
  status:boolean;
  updatedAt:date;

  constructor(public title:string){
    this.title = title;
    this.status = false;
    this.updatedAt = new Date();
  }
  toggleStatus():boolean {
    return !this.status;
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements todoListInterface {
  listItemElements:TodoItem[] = [];
  addTask(todoItem: TodoItem):number{
    this.listItemElements.push(todoItem);
    console.log(`Task ${todoItem.title} inserted to the list`);
    return this.listItemElements.length;
  };
  listAllTasks():void{
    this.listItemElements.forEach(listItem => {
      console.log(listItem.title, listItem.status, listItem.updatedAt);
    })
  };
  deleteTask(todoItem:TodoItem):number{
    let position = this.listItemElements.indexOf(todoItem);
    this.listItemElements.splice(position,1);
    console.log(`${todoItem.title} removed from the list`);
    return this.listItemElements.length;
  };
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
//myTodos.listUncomplete();
