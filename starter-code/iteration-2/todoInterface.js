"use strict";

interface ToDoInterface {
    tasksToComplete: array;
    addTask(task: string): string;
    listAllTasks(task: array): void;
    deleteTask(task: string): number;
}