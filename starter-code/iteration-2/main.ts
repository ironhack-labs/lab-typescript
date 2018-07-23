// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
    myArray: Array<string>

    addTask(task:string): number{
        this.myArray.push(task);
        console.log(task)
        console.log(this.myArray.length)
        return this.myArray.length;
    }
    listAllTasks(): void{
        this.myArray.forEach(function(element){
            console.log(element);
        })
    }
    deleteTask(task:string): number{
        let lastElement = this.myArray.pop()
        console.log(lastElement)
        console.log(this.myArray.length)
        return this.myArray.length;
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
