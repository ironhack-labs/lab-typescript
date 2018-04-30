// Add the reference to the "TodoInterface"
interface TodoInterface{
  array: Array<string>

addTask(task :string):number 
listAllTasks():void
deleteTask(task:string):number
}
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface{
  array: Array<string> = []
  constructor(){}
    
  addTask(task:string){
    return this.array.length;
      }

      listAllTasks(){
      console.log('nothing');
      }
      deleteTask(task:string){
        this.array.splice(this.array.indexOf(task),1);
        return this.array.length;
      }
  }







// Execution
 let myTodo = new Todo();
 console.log("Number of items:", myTodo.addTask('This is our first task'));
 console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
 console.log("Number of items:", myTodo.addTask('Finish this iteration 1!! 🤓'));
 console.log("Number of items:", myTodo.addTask('Finish this iteration 2!! 🤓'));
 console.log("Number of items:", myTodo.addTask('Finish this iteration 3!! 🤓'));
 myTodo.listAllTasks();
 console.log("Number of items:", myTodo.deleteTask('Finish this iteration 1!! 🤓'));
 console.log("Number of items:", myTodo.deleteTask('Finish this iteration 2!! 🤓'));
 myTodo.listAllTasks();
