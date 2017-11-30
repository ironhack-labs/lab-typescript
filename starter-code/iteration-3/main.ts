// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItem {
    constructor(public title: string) {}

    status: boolean = false;
    updatedAt: Date;
    toggleStatus() {
        return !this.status;
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    constructor(public todolist: string[TodoItem] = []) {}

    addTask(task): number {
        console.log('Adding ' + task.title);
        this.todolist.push(task);
        return this.todolist.length;
    }

    listAllTasks(): void{
        this.todolist.forEach( function(task) {
            console.log(task);
        }
    }

    deleteTask(task): number {
        var i = this.todolist.indexOf(task);
        this.todolist.splice(i, 1);
        console.log( task.title + " removed");
        return this.todolist.length;
    }

    listIncomplete(): void {
        this.todolist.forEach( (task) => {
            if (!task.status) {
                console.log('Incomplete Task: ');
                console.log(task.title);
            }
        });
    }
}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listIncomplete();
