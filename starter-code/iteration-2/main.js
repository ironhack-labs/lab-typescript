class Todo {
    constructor(arrayTasks = []) {
        this.arrayTasks = arrayTasks;
        this.addTask = (task) => {
            console.log(`=========== NEW TASK ===========`);
            this.arrayTasks.push(task);
            console.log(`Insertion done!!!!`);
            return this.arrayTasks.length;
        };
        this.listAllTasks = () => {
            this.arrayTasks.forEach((task, i) => {
                console.log(`Task ${i}: ${task}`);
            });
        };
        this.deleteTask = (task) => {
            console.log(`=========== DELETE TASK ===========`);
            this.arrayTasks.forEach((taskInArray, i) => {
                if (taskInArray === task)
                    this.arrayTasks.splice(1, i);
            });
            console.log(`Deletion done!!!!`);
            return this.arrayTasks.length;
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
