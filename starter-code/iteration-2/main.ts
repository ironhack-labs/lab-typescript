// Add the reference to the "TodoInterface"
import { ToDoInterface } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class ToDo implements ToDoInterface{
    constructor(public tasksArray:Array<string> = []){}
    addTask(task:string):number{ // SIPONGO QUE RETORNA NUMBER PERO EN INTERFAZ PONE VOID PORQUE NO ME SALE ERRROR? 
        this.tasksArray.push(task);
        return this.tasksArray.length;  
    }
    
    listAllTasks():void{
        this.tasksArray.forEach(elem => {
            console.log(elem);
        });
    }
    
    deleteTask(task:string):number{
        this.tasksArray.splice(this.tasksArray.indexOf(task), 1);
        console.log(`Task "${task}" has been deleted`);
        return this.tasksArray.length;
    }
}
// Execution 
let myToDos:ToDo = new ToDo();

console.log("Number of items:", myToDos.addTask('first task'));
console.log("Number of items:", myToDos.addTask('second task'));
console.log("Number of items:", myToDos.addTask('third task'));
console.log("Number of items:", myToDos.addTask('fourth task'));
console.log("Number of items:", myToDos.addTask('fifth task'));

myToDos.listAllTasks();
console.log("Number of items:", myToDos.deleteTask('third task'));
myToDos.listAllTasks();



