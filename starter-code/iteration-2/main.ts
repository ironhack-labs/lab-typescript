// Add the reference to the "TodoInterface"
interface List {
  toDoArr: string[];
  toDoListLength: number;
  addTask(task: string): number;
  listAllTasks();
  deleteTask(task: string): number;
}

// 1. Create a class Todo that implements the Interface created before.
class Todo implements List {
  constructor (public toDoArr: string[], public toDoListLength: number ){

  }
  addTask(task: string){
    this.toDoArr.push(task);
    this.toDoListLength = this.toDoArr.length;
    console.log('Task ' + task + ' inserted in the list');
    return this.toDoListLength;
  }
  listAllTasks(){
    this.toDoArr.forEach((task)=>{
      console.log(task);
    });
  }
  deleteTask(task: string) {
    let index = this.toDoArr.indexOf(task);
    if (index > -1) {
      this.toDoArr.splice(index, 1);
    }
    console.log('Task ' + task + ' was deleted');
    this.toDoListLength = this.toDoArr.length;
    return this.toDoListLength;
  }
}
// Execution
let myTodos = new Todo([''], 0);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
