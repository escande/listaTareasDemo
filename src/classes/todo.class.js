export class Todo{

    static _crearTodo({id, tarea, completado, creado}){

        const newTodo = new Todo(tarea);

        newTodo.id = id;
        newTodo.completado = completado;
        newTodo.creado = creado;

        return newTodo;
    }

    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime(); //12131231546
        this.completado = false;
        this.creado = new Date();
    }

    imprimirTarea(){

        console.log(`${this.tarea} - ${this.id}`);
    }
}