// Add the reference to the interface
import  {TodoItemInterface, TodoListInterface} from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
status: boolean = false;
updatedAt: Date;

  constructor(public title: string){
    this.status = this.status, 
    this.updatedAt = new Date()
  }

  toggleStatus():void{
    if (this.status === true){
      this.status = false
    }
    else if(this.status === false){
      this.status = true
    }
    this.updatedAt = new Date();
  }

  updateDate():Date{
    return this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  constructor(public TodoItems: Array<TodoItem>){}

  addTask(item: TodoItem): number{
    this.TodoItems.push(item)
    item.updateDate();
    return this.TodoItems.length
  }

  listAllTasks(): void{
    for (let item of this.TodoItems){
        console.log(item)
    }
  }

  deleteTask(item: TodoItem):number{
      item.toggleStatus()
      var remove = this.TodoItems.indexOf(item);
      this.TodoItems.splice(remove, 1)
      return this.TodoItems.length
  }

  listUncomplete(): void{
    for (let item of this.TodoItems){
      if(item.status === false){
        console.log(item)
      }
    }
    
  }
}



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([]);

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
console.log(task1)
