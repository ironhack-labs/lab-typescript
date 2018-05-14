class Todo {
    constructor() {
        this.array = [];
        this.addTask = (task) => {
            this.array.push(task);
            console.log(`Task ${task} inserted in the list`);
            return this.array.length;
        };
        this.listAllTasks = () => {
            this.array.forEach((element) => {
                console.log(element);
            });
        };
        this.deleteTask = (task) => {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] === task) {
                    this.array.splice(i, 1);
                    break;
                }
            }
            console.log(`Task ${task} removed from the list`);
            return this.array.length;
        };
    }
}
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
