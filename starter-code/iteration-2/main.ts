import inter from "./todoInterface"
// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements inter {
    array: Array<String> = [];
    addTask(task:String):void{
        this.array.push(task)
    }

    listAllTasks():void{
        this.array.forEach(elem=>console.log(elem))
    }

    deleteTask(task:String):void{
        this.array.splice(this.array.indexOf(task),1)
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
