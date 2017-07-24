"use strict";
exports.__esModule = true;
var TodoList = (function () {
    function TodoList() {
        this.toDos = [];
    }
    TodoList.prototype.addTask = function (toDo) {
        this.toDos.push(toDo);
        console.log("Se ha añadido la tarea " + toDo);
        return this.toDos.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.toDos.forEach(function (todo) {
            console.log(todo);
        });
    };
    TodoList.prototype.deleteTask = function (toDoToDelete) {
        var index = this.toDos.indexOf(toDoToDelete);
        console.log("Se ha eliminado la tarea " + this.toDos[index]);
        this.toDos.splice(index, 1);
        return this.toDos.length;
    };
    return TodoList;
}());
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
