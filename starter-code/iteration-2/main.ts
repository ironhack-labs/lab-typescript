// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements listTaskInterface{
  constructor(public toDoList: Array<string> = []){
  }

  addTask(task:string): number{
    this.toDoList.push(task);
    console.log(`Task ${task} inserted in the list`)
    return this.toDoList.length;
  }

  listAllTasks():void{
    this.toDoList.forEach((task, index)=>{
      console.log(`task ${index+1}: ${task}`);
    })
  }

  deleteTask(task:string): number{

    var index = this.toDoList.indexOf(task);
    if(index>-1){
      this.toDoList.slice(index,1);
      console.log(`Task ${task} deleted from the list`)
      return this.toDoList.length;
    }
    console.log(`The task ${task} isn't in the list`)
    return this.toDoList.length;

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
