![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Typescript | Basic Exercises

## Learning Goals

After this lesson, you will be able to:

- Develop some basic TypeScript functions.
- Create a TypeScript interface, and use it from a class.
- Implement two different interfaces and use them from classes.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/).
- Clone this repo into your `~/code/labs` folder.
- Install TypeScript in your computer
  ```
  $ npm install -g typescript
  ```
- It's recommended to install the [atom-typescript](https://atom.io/packages/atom-typescript) extension.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m"done"
$ git push origin master
```

## Introduction

When we are studying, it's very common to create lists to remember different things: finish exercises, create a pull-request with the solution, eat, sleep... some of them are more important than others, but we have to remember all of them.

We are going to help you with this. How? We are going to create a ToDo list project in TypeScript. We are going to create different lists following different strategies with TypeScript, covering different topics: variable types, functions, and interfaces.

### Project Structure

The project structure is the following one:

```
starter-code/
├── iteration-1
│   ├── index.html
│   ├── main.js
│   └── main.ts
├── iteration-2
│   ├── index.html
│   ├── main.js
│   ├── main.ts
│   ├── todointerfaces.js
│   └── todointerfaces.ts
└── iteration-3
    ├── index.html
    ├── main.js
    ├── main.ts
    ├── interfaces.js
    └── interfaces.ts
```

You are going to work over the `*.ts` files in the different folders, one for each iteration that we are going to cover.

<!-- :::info -->
**Note**:
Remember that the `*.js` files are generated every time we save the TypeScript files in our solution.
<!-- ::: -->

### Iteration #1: Functions

In the first iteration of the exercise we are going to create our ToDo list using functions. Let's analyze what we need to implement it.

First of all, we need somewhere to save the tasks we have to do. This will be an array. Over this array we will be able to:

- Add a new task (a string).
- Remove a task that we've done.
- Iterate over all the tasks so that we can see them.

Each of these features is a function that we will have to create. To add and remove tasks, we will need to specify as a parameter the string for the task itself ("Buy eggs", for example).

Once we have inserted or removed the task, we should return the number of elements that are in the list. We should also print the following in the console:

**For adding a task**

```
=========== NEW TASK ===========
Task "Buy eggs" inserted in the list
```

**For removing a task**

```
=========== TASK REMOVED ===========
Task "Buy eggs" removed from the list
```

In both cases, "Buy eggs" is the text of the task we just inserted/deleted.

<!-- :::info -->
**Example**:
If the first task we add is "Start working with TypeScript", the output should be the following:

```
=========== NEW TASK ===========
Task "Start working with TypeScript" inserted in the list
Number of items: 1
```
<!-- ::: -->

For the function to list all the tasks, print in console all the items in our list. This function doesn't need a return value.

Once you have implemeneted all these features, you will have the first iteration completetd.

**Tasks**

- Create an array of strings.
- Create an `addTask` function:
  - It receives a `string` as a parameter called `task`.
  - It adds the task to the array.
  - It prints a message indicating the insertion.
  - It returns the number of elements in the list after the insertion.
- Create a `listAllTasks` function:
  - It iterates over all the tasks in the list.
  - It print each list item in the console.
- Create a `deleteTask` function:
  - It receives a `string` as a parameter called `task`.
  - It removes that string from the array.
  - It prints in console a message indicating the deletion.
  - It returns the number of elements in the list after the deletion.


### Iteration #2: Class with one Interface

In this iteration we are going to implement the same functionality by using an Interface. We are going to be working over the `iteration-2` folder.

Remember that an interface specifies all the functions that a class will have, and also the parameters of each function.

We will create an Interface in the `todointerface.ts` file that will specify the different methods described in the iteration #1:

- Array of strings.
- A function to add tasks, that will receive the task as a parameter.
- A function to list all the tasks.
- A function to delete tasks, that will receive the task as a parameter.

Once we have defined and exported the Interface, we will create a class called `Todo` that will implement the interface and its methods. We are going to add this class in the `main.ts` file.

We have to keep the same inputs and outputs we have used in the previous iteration.

**Tasks**

**Interface (`todointerface.ts`)**

- Array of strings.
- `addTask` function:
  - It receives a `string` as a parameter
  - It returns a number.
- `listAllTasks` function:
  - It has no parameters.
  - It doesn't return anything.
- `deleteTask` function:
  - It receives a `string` as a parameter
  - It returns a number.

**Class (`main.ts`)**

- Create a class that implements the Interface:
  - Remember that you need to import the interface before use it.
- Implement all the properties and functions indicated in the interface:
  - Create an array of strings.
  - Create an `addTask` function:
    - It receives a `string` as a parameter.
    - It prints in console the same message as iteration 1.
    - It returns the number of elements in the list after the insertion.
  - Create a `listAllTasks` function:
    - It prints in console all the tasks of the list.
    - It doesn't return anything.
  - Create a `deleteTask` function:
    - It receives a `string` as a parameter.
    - It prints in console the same message as iteration 1.
    - It returns the number of elements in the list after the deletion.


### Iteration #3: Two classes with two interfaces

To finish up with this exercise, we are going to create the same Todo list by adding a new interface to our implementation. In the last iteration, we will be working with the code in the `iteration-3` folder.

When we have different elements in a project, it's very common (and also a good practice) to treat each of them as an independent element. In this case, we have been creating a Todo list without considering the possibility of splitting that into two different parts: the list, and the items.

In this last iteration, we are going to create two different interfaces, one for the list elements, and another one for the list itself. So inside the list, we are going to have a reference to the other interface.

The list item interface will have the following properties:

- Title of the task, that will be an string.
- Status of the task, represented by a boolean value.
- Updated At, that will store the date where the task has been modified.
- Toggle Status function, that will set the status as true if it's false, and viceversa.

In the Todo list interface, we will have the following properties:

- An array of list item elements.
- A function to add tasks, that will receive the TodoItem as a parameter.
- A function to list all the items of the list.
- A function to delete tasks, that will receive the TodoItem as a parameter.

Once we have implemented both interfaces, we will have to create the classes that will implement them. In the `main.ts` file, we will add a `TodoItem` class, that has to implement the `TodoItemInterface`, and the `TodoList` class, that has to implement the `TodoListInterface` interface.

Once you are done with that, the exercise will be finished!

**Tasks**

**Interfaces (`interfaces.ts`)**

- TodoItemInterface
  - Define a `title` as string.
  - Add a `status` as a boolean.
  - `updatedAt` is a Date that represents where the task has been updated.
  - Add a function called `toggleStatus` that will update the task status.
- TodoListInterface
  - Define an Array of `TodoItem`.
  - Create an `addTask` function:
    - It receives a `TodoItem` as a parameter.
    - It returns the number of elements in the list.
  - Add a `listAllTasks` function:
    - It doesn't return anything.
  - Create a `deleteTask` function:
    - It receives a `TodoItem` as a parameter.
    - It returns the number of elements in the list.

**Class (`main.ts`)**

- Create a `TodoItem` class that implements the `TodoItemInterface` interface, adding all the required properties and functions specified in the interface:
  - `title` string field, to indicate what we have to do in the task.
  - `status` that will indicate if the task is completed or not.
  - `updatedAt` date field, to indicate which is the date that the task was updated.
  - We have to add a `constructor` to the class to set up the task `title` and the `updatedAt` values when creating a task.
  - `toggleStatus` function to change the status of a `TodoItem`. It has to:
    - Change the status of the task. If it's done, the new status will be not done, and viceversa.
    - Update the `updatedAt` value, by setting up the current date.
    <!-- :::warning -->
    **Note it doesn't receive any parameter, how would you be able to change its status?**
    <!-- ::: -->

- Create a `TodoList` class that implements the `TodoListInterface` interface, adding all the required properties and functions specified in the interface:
  - An `Array` of `TodoItem` to be able to save the different tasks you want to do.
  - Create an `addTask` function:
    - It receives a string as a parameter.
    - It prints in console the same message as iteration 1.
    - It returns the number of elements in the list after the insertion.
  - Create a `listAllTasks` function:
    - It prints in console all the tasks of the list. In this case, we want to print the title and the updated date of the task.
    - It doesn't return anything.
  - Create a `deleteTask` function:
    - It receives a string as a parameter.
    - It prints in console the same message as iteration 1.
    - It returns the number of elements in the list after the insertion.

/Happy coding!

## Extra Resources

[Typescript Documentation](https://www.typescriptlang.org/docs/tutorial.html)
