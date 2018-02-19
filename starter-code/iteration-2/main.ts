// Add the reference to the "TodoInterface"

interface ToDoList {
    tasks: Array<string>
    addTask(task: string): number;
    listAllTasks();
    deleteTask(task: string): number;
}


const tasks: Array<string> = ['This is our first task', 'Eat pizza 🍕 yummy!!!', 'Finish this iteration 1!! 🤓'];

// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoList {
    constructor(public tasks: Array<string>) {}
    addTask(task: string): number {
        this.tasks.push(task);
        console.log('=========== NEW TASK ===========')
        console.log('Task "' + task + '" inserted in the list');
        console.log('Number of items: ' + this.tasks.length);
        return this.tasks.length;
    }
    listAllTasks(): void {
        this.tasks.forEach((element: string) => {
            console.log(element);
        });
    }
    deleteTask(task: string): number {
        const index: number = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log('=========== TASK REMOVED ===========')
        console.log('Task "' + task + '" removed from the list');
        console.log('Number of items: ' + this.tasks.length);
        return this.tasks.length;
    }
}

// Execution
let myTodos = new Todo(tasks);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
// myTodos.listAllTasks();
