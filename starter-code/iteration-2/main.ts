
//  interface whatever {
// list:Array<string>;
// addTask(s):void;
// listAllTasks():void;
// deleteTask(s):void;
//
// }


// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements whatever {

    public name :string;
    constructor(nam:string){
      this.name = nam;
    }
    public list:  Array<string>=[];

    // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
    public addTask(newTask):void{

      this.list.push(newTask);
      console.log("=========== TASK ADDED ===========");
      console.log('Task "'+newTask+'" added to the list')
    }
    // 3. Create a function to list all tasks, it must show in the console de task.
    public listAllTasks():void{
      this.list.forEach((oneItem)=>{
        console.log((this.list.indexOf(oneItem)+1)+oneItem);
      });
    }
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  public deleteTask(task):void{
    if(this.list.indexOf(task) > -1 ){
      this.list.splice(task);
      console.log("=========== TASK Remove ===========");
      console.log('Task "'+task+'" remove from the list')
    }

  }



}
// Execution
let myTodos = new Todo('my todo list');
console.log("Number of items:", myTodos.addTask('This is our first task,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
