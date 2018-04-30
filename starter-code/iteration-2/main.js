class Todo {
    constructor(myArray) {
        this.myArray = myArray;
    }
    addTask(task) {
        this.myArray.push(task);
        console.log(`=========== NEW TASK ===========
Task ${task} inserted in the list
Number of items: ${this.myArray.length}`);
        return this.myArray.length;
    }
    listAllTasks() {
        this.myArray.forEach((e) => {
            console.log(e);
        });
    }
    deleteTask(task) {
        let position = this.myArray.indexOf(task);
        this.myArray.splice(position, 1);
        console.log(`=========== TASK REMOVE ===========
Task ${task} remove in the list
Number of items: ${this.myArray.length}`);
        return this.myArray.length;
    }
}
let myTodos = new Todo([]);
console.log('Number of items:', myTodos.addTask('This is our first task'));
console.log('Number of items:', myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log('Number of items:', myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
