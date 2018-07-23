// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

// Execution
interface TodoItemInterface {
    title: string;
    status: boolean;
    updatedAt: Date;
    toogleStatus(status:boolean) 
}

interface TodoListInterface {
    newArr: Array<TodoItem>; 
    addTask(newTask: TodoItem) :number; 
    listAllTasks()
    deleteTask(task:TodoItem): number
}


class TodoItem implements TodoItemInterface {
    constructor(public title) {
    }
    status = false;
    updatedAt = new Date();
    toogleStatus() {
        this.status=!this.status
        this.updatedAt = new Date()
    }
  }


class TodoList implements TodoListInterface {
    constructor(public newArr = []) {}
    addTask(task:TodoItem) {
      this.newArr.push(task);
      console.log(`Nueva tarea ${task.title}`);
      console.log(this.newArr.length);
      return this.newArr.length;
    }
    listAllTasks() {
      this.newArr.forEach(function(e) {
        return console.log(e);
      });
    }
  
    deleteTask(task:TodoItem) {
      this.newArr.splice(this.newArr.indexOf(task), 1);
      console.log("Eliminada tarea " + task.title);
      console.log(this.newArr.length);
      return this.newArr.length;
    }
  }


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
