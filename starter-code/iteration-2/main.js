class Todo {
    constructor(taskList) {
        this.taskList = taskList;
        this.todoList = [];
    }
    addTask(task) {
        this.todoList.push(task);
        console.log("the new task has been added to the list", this.todoList.length);
        return this.todoList.length;
    }
    listAllTasks() {
        console.log(this.todoList);
        this.todoList.forEach((task) => {
            console.log(task);
        });
    }
    deleteTask(task) {
        let index = this.todoList.indexOf(task);
        this.todoList.splice(index, 1);
        console.log("the task has been deleted from the list", this.todoList.length);
        return this.todoList.length;
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
