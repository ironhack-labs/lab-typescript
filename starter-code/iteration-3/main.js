"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        addTask(word, string);
        {
            this.todoItems.push(word);
            console.log(word);
            return todoItems.length;
        }
        listAllTasks();
        {
            this.todoItems.forEach(function (word) {
                console.log(word);
            });
        }
        deleteTask(word, string);
        {
            this.todoItems.splice(this.todoItems.indexOf(word), 1);
            console.log(word);
            return todoItems.length;
        }
        var task1 = new TodoItem('This is our first task');
        var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
        var task3 = new TodoItem('Finish this iteration 1!! 🤓');
        var task4 = new TodoItem('Finish this iteration 2!! 🤓');
        var task5 = new TodoItem('Finish this iteration 3!! 🤓');
        var myTodos = new TodoList();
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
    }
    return TodoList;
}());
