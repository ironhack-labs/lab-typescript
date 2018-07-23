// Add the reference to the "TodoInterface"
import {iToDo} from "./todoInterface"

class Todo implements iToDo {
constructor(public tasks: string[]=[]){}
addTask(task:string):number{
    this.tasks.push(task); 
    return this.tasks.length;
    }
listAllTasks():void{
    this.tasks.forEach(eachTask => {
        console.log(eachTask)
    });
}
deleteTask(task:string):number{
    this.tasks.splice(this.tasks.indexOf(task), 1)   
    return this.tasks.length;
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

