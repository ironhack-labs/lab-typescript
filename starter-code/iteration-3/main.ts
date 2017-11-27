// Add the reference to the interface
class TodoItem implements TodoItemInterface {
  status = false;
  // updatedAt = new Date();
  constructor(public title: string) { }

  toggleStatus(): boolean {
    if (this.status === true) {
      return false;
    } else {
      return true;
    }
  }
  updatedAt = new Date();
}


class TodoList implements TodoListInterface {
  TodoItem = [];

  addTask(task:string):number {
    this.TodoItem.push(task);
    return this.TodoItem.length;
  }

  listAllTasks(): void {
    for(var i= 0; i < this.TodoItem.length; i++){
      console.log(i);
    }
  }

  deleteTask(task:string):number {
    let taskIndex = this.TodoItem.indexOf(task);
    this.TodoItem.splice(taskIndex, 1);
    return this.TodoItem.length;
  }

}

// Create class TodoItem that implements the corresponding interface

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
