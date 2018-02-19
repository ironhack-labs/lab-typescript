// Add the reference to the "TodoInterface"
interface taskTemplate {
    taskArray : Array <string>;
    addTask(task : string) : number;
    listAllTasks() : void;
    deleteTask(task : string) : number;
}
// 1. Create a class Todo that implements the Interface created before.
class Todo implements taskTemplate {
    task : string;

    constructor (public taskArray : Array <string>) {} 
   
     addTask (task) : number {
        this.taskArray.push(task);
        console.log(`=========== NEW TASK ===========
            Task ${task} inserted in the list
            Number of items: ${this.taskArray.length}`);
        return this.taskArray.length;
    }
    
    // 3. Create a function to list all tasks, it must show in the console de task.
     listAllTasks() : void {
        this.taskArray.forEach(element => {
            console.log(element);
        }) 
    }
    
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
     deleteTask(task) : number {
        const position = this.taskArray.indexOf(task);
        this.taskArray.splice(position,1);
        console.log(`=========== TASK REMOVED ===========
            Task ${task} removed from the list
            Number of items: ${this.taskArray.length}`);
        return this.taskArray.length;
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
