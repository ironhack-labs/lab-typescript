// Add the reference to the "TodoInterface"
import todo from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.

class Todo implements todo {
    tasks: Array<string> = []
    addTask(task: string) {
        this.tasks.push(task)
        console.log('Task Inserted')
        console.log(this.tasks.length)
        return this.tasks.length
    }
    listAllTasks() {
        this.tasks.forEach(e => console.log(e))
    }
    deleteTask(task:string) {
        const index: number = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        console.log('Task Deleted')
        console.log(this.tasks.length)
        return this.tasks.length
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
