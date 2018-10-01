// Add the reference to the interface

const testArray = [];

interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
}

interface TodoListInterface {
  TodoItems: Array<any>;
}

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date = new Date;

  constructor (taskTitle: string, update: Date = new Date) {
    this.title = taskTitle;
    this.updatedAt = update;
  }

  toggleStatus() {
    if (status === 'finished') {
      this.status = false;
    } else {
      this.status = true;
    }

    this.updatedAt = new Date();
  }

}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  TodoItems: Array<any>;

  constructor (item: any) {
    this.TodoItems = item;
  }

  addTask(task) {
    testArray.push(task)
    console.log(testArray.length);
    return testArray.length
  }

  listAllTasks() {
    testArray.forEach((element) => {
      console.log(element.title + "update at " + element.updatedAt)
    })
  }

  deleteTask(task) {
    const removePosition = testArray.indexOf(task)
    testArray.splice(removePosition, 1)
    console.log('deletion successful')
    return testArray.length
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
