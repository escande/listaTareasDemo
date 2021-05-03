import { Todo } from ".";

export class TodoList{

    constructor(){

        //this.todos = [];
        this.cargarLocalStorge();
    }

    nuevoTodos(todo){

        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){
            
            console.log(id, todo.id);
            if(id == todo.id){

                todo.completado = !todo.completado;
                console.log(todo);
                break;
            }
        }
    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
        console.log(this.todos);
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorge(){

        // if(localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('Mis Todos: ', this.todos);
        // }else{

        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []);

        this.todos = this.todos.map(item => Todo._crearTodo(item));

        console.log('Mis Todos: ', this.todos);
    }
}