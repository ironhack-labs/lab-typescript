class TodoItem {
    constructor(title, updatedAt) {
        this.title = title;
        this.updatedAt = updatedAt;
        this.updatedAt = new Date();
        this.status = "unfinished";
    }
    toggleStatus() {
        if (this.status == "unfinished") {
            this.status = "finished";
            this.updatedAt = new Date();
            return true;
        }
        else if (this.status == "finished") {
            this.status = "unfinished";
            this.updatedAt = new Date();
            return false;
        }
    }
}
class TodoList {
    constructor(itemList = []) {
        this.itemList = itemList;
    }
    addTask(TodoItem) {
        this.itemList.push(TodoItem);
        console.log(`Add ${TodoItem} to the to do list`);
        console.log(this.itemList.length);
        return this.itemList.length;
    }
    listAllTasks() {
        this.itemList.forEach((oneItem) => {
            console.log(oneItem.title);
        });
    }
    deleteTask(TodoItem) {
        for (var i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i] == TodoItem) {
                this.itemList.splice(i, 1);
            }
        }
        console.log(`Delete ${TodoItem} to the to do list`);
        console.log(this.itemList.length);
        return this.itemList.length;
    }
}
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
myTodos.listUncomplete();
