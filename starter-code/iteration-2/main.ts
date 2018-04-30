// Add the reference to the "TodoInterface"
import{Task} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements Task {

  constructor(public list:Array<string>){}

  addTask(str:string):Number{
    list.push(str);
    console.log(list.length)
    return list.length
  }

  listAllTasks(){
    for(let i=0;i<list.length;i++){
      console.log(list[i]);
    }
  }
  deleteTask(str:string){
    list.splice(list.indexOf(str),1)
    console.log(list.length)
    return list.length;
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
