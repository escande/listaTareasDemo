import {Todo} from '../classes';
import {todoList} from '../index';
// import '../css/componentes.css';

// export const saludar = (nombre) => {

//     console.log('Creando etiqueta h1');

//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola ${nombre} que tal estás, plim??`;
//     const body = document.querySelector('body');
//     body.append(h1);
// }

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilter  = document.querySelector('.filters');
const aFiltro = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) =>{

    const htmlTodo = `
    <li class="${(todo.completado ? 'completed' : '')}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado ? 'checked' : '')}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', (event)=> {

    //console.log(event);
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);

        todoList.nuevoTodos(nuevoTodo);
        console.log(todoList);

        crearTodoHtml(nuevoTodo);

        txtInput.value = '';
    }
})


divTodoList.addEventListener('click', (event)=>{

    //console.log(event.target);
    //Obtengo del evento el elemento sobre ell que se hizo click
    const nombreElemento = event.target.localName; //Label, Input, button
    console.log(nombreElemento);
    //Se obtiene el elemnto padre del contenedor del ul
    const todoElemento = event.target.parentElement.parentElement;
    //Se obtiene el atribute, es una instruccion js y se obtiene el id, class, etc...
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoId);

    //.includes es como el contains en c#
    if(nombreElemento.includes('input')){

        todoList.marcarCompletado(todoId);
        //classList toggle -> para alternar en  poner una clase o no
        todoElemento.classList.toggle('completed');
    }
    else if(nombreElemento.includes('button')){

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
        console.log(todoList);
    }
})

btnBorrar.addEventListener('click', ()=>{

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1; i >= 0; i-- ){

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){

            divTodoList.removeChild(elemento);
        }
        console.log(elemento);
    }
})

ulFilter.addEventListener('click', (event) => {

    const filtro = event.target;
    console.log(filtro.text);
    
    if(!filtro.text){return;}

    aFiltro.forEach(item => item.classList.remove('selected'))

    filtro.classList.add('selected');

    for(const elemento of divTodoList.children){

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch(filtro.text){

            case 'Pendientes':
                if(completado){

                    elemento.classList.add('hidden');
                }
                break;
            
                case 'Completados':
                    if(!completado){
    
                        elemento.classList.add('hidden');
                    }
                    break;
        }
    }

})