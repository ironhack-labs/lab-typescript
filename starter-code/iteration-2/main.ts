// Add the reference to the "TodoInterface"
interface todointerface {
  arrayList: string[];
  addTask(task: string):number;
  listAllTasks();
  deleteTask(task: string): number
}

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todointerface {
  arrayList: string[];

  constructor (){
    this.arrayList = [];
  }

  addTask(task: string):number {
    this.arrayList.push(task);
    return this.arrayList.length;
  }

  listAllTasks(){
    this.arrayList.forEach(task => {
      console.log(task);
    });
  }

  deleteTask(task: string): number {
    this.arrayList.splice(this.arrayList.indexOf(task), 1);
    return this.arrayList.length;
  }

}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
