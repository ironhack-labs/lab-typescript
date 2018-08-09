// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        return !this.status;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.listItemElements = [];
    }
    TodoList.prototype.addTask = function (todoItem) {
        this.listItemElements.push(todoItem);
        console.log("Task " + todoItem.title + " added to the list");
        return this.listItemElements.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.listItemElements.forEach(function (listItem) {
            console.log(listItem.title, listItem.status, listItem.updatedAt);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (todoItem) {
        var position = this.listItemElements.indexOf(todoItem);
        this.listItemElements.splice(position, 1);
        console.log(todoItem.title + " removed from the list");
        return this.listItemElements.length;
    };
    ;
    return TodoList;
}());
