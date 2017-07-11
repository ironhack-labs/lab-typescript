// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: boolean = false;
  constructor(
    public title: string,
    public updatedAt = new Date(),
  ){}

  toggleStatus(){
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  listOfTasks: TodoItem[] = [];
  constructor(){}

  addTask (task: TodoItemInterface) {
    this.listOfTasks.push(task);
    return this.listOfTasks.length;
  }

  listAllTasks () {
    this.listOfTasks.forEach((oneTask) => {
      console.log(oneTask);
    })
  }
  deleteTask (task: TodoItemInterface) {
    let indexOfString = this.listOfTasks.indexOf(task);
    if (indexOfString) {
      this.listOfTasks.splice(indexOfString, 1);
      console.log(task+' has been deleted');
    }
    else {
      console.log("Task does not exist");
    }
    return this.listOfTasks.length;
  }

  listIncomplete() {
    const  incompleteList = this.listOfTasks.filter((oneTask) => {
      return !oneTask.status
    });
    console.log(incompleteList);
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

myTodos.listIncomplete();
