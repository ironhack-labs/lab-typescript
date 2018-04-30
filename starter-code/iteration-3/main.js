class TodoItem {
    constructor(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    toggleStatus() {
        if (status == 'false') {
            return 'unfinished';
        }
        else {
            return 'finished';
        }
    }
}
class TodoList {
    constructor(TodoItem = []) {
        this.TodoItem = TodoItem;
    }
    addTask(list) {
        console.log(`There is ${TodoItem} adedd`);
        return list;
    }
    listAllTasks() {
        for (let i = 0; i < this.TodoItem.length; i++) {
            console.log(this.TodoItem[i]);
        }
    }
    deleteTask(list) {
        for (let i = 0; i < this.TodoItem.length; i++) {
            if (this.TodoItem[i] == list) {
                this.TodoItem.splice(i, 1);
            }
        }
        console.log(`There is ${list} deleted`);
        return TodoItem.length;
    }
}
