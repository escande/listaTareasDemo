import './styles.css'
import {Todo, TodoList} from './classes';
// import { Todo } from './classes/todo.class';
 import { crearTodoHtml } from './js/componentes';
//import { TodoList } from './classes/todo-list.class';
//saludar('Buenos días, como estás');

export const todoList = new TodoList();


//todoList.todos.forEach(element => crearTodoHtml(element));

//Otra forma de llamar al foreach -> Si solo pasamos un argumento podemos obiar declaralo y pasarlo
todoList.todos.forEach(crearTodoHtml);
// const tarea = new Todo('Aprender javaScript !!!');

// todoList.nuevoTodos(tarea);
// const num = todoList.todos.length;
// console.log(num);
// tarea.imprimirTarea();

 todoList.todos[todoList.todos.length-1].imprimirTarea();
 //todoList[todoList.length].imprimirT  area();


// //tarea.completado = true;

// crearTodoHtml(tarea);