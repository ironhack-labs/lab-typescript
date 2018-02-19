// Add the reference to the "TodoInterface"
interface TodoInterface {
    list : string[];
    addTask(newTask);
    listAllTasks(tasks);
    deleteTask(task);
}

// let TodoInterface = require('todointerface').default


// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    constructor(public list: string[]){

    }
    addTask(newTask){
        this.list.push(newTask)
    }
    listAllTasks(){
        console.log(this.list)
    }
    deleteTask(task){
        for (var i = this.list.length - 1; i >= 0; i--) {
            if (this.list[i] === task) {
                //    const position = Number(tasks.indexOf(tasks[i]))
                return this.list.splice(i, 1);
            }
        }
    }

}
// Execution
let myTodos = new Todo(['cat', 'dog']);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
