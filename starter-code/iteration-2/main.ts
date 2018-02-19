// Add the reference to the "TodoInterface"

interface GeneralList {
    toDoList: string[];
    addTask(task: string): number;
    deleteTask(task: string): number;
    listAllTasks(): void;
} 

// 1. Create a class Todo that implements the Interface created before.

class Todo implements GeneralList {
    constructor(public toDoList: string[]) {}
    
    addTask(task: string): number {
        this.toDoList.push(task);
        console.log(`=====NEW TASK======
        Task "${task}" insterted to the list
        Number of items: ${this.toDoList.length}`)
    
        return this.toDoList.length;
    }

    deleteTask(task: string): number {
        let i = 0;
        this.toDoList.forEach((item)=>{
            if (item === task) {
                this.toDoList.splice(i, 1);
                console.log(`The item ${task} was deleted. Task left to do: ${this.toDoList.length}`);
            }
            i++;
        });
        return this.toDoList.length;
    }

    listAllTasks(): void {
        this.toDoList.forEach((item)=>{
            console.log(item);
        });
    };
};

// Execution
let myTodos = new Todo(['mop floor', 'write book']);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
