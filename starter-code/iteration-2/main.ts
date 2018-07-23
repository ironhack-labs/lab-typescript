// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
import { Cosa } from "./todoInterface"; 

const list: Array<string>=[]

class Todo implements Cosa {
    addTask(task: string):number {
        list.push(task)
        return list.length;
      }
    listAllTasks() {
        list.forEach((elem) => { console.log(elem)});
        console.log(list)
      }
    deleteTask(task: string):number {
        let i = list.indexOf(task, 0);
        if (i > -1){
        list.splice(i, 1);
    }
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
