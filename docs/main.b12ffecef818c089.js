(()=>{"use strict";function a(d){var e=c[d];if(void 0!==e)return e.exports;var f=c[d]={exports:{}};return b[d](f,f.exports,a),f.exports}var b={985:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0}),b.TodoList=b.Todo=void 0;var d=c(272),e=c(455);b.Todo=d.Todo,b.TodoList=e.TodoList},455:(a,b,c)=>{function d(a,c){var d="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!d){if(Array.isArray(a)||(d=e(a))||c&&a&&"number"==typeof a.length){d&&(a=d);var f=0,g=function(){};return{s:g,n:function(){return f>=a.length?{done:!0}:{done:!1,value:a[f++]}},e:function(a){throw a},f:g}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h,i=!0,j=!1;return{s:function(){d=d.call(a)},n:function(){var a=d.next();return i=a.done,a},e:function(a){j=!0,h=a},f:function b(){try{i||null==d["return"]||d["return"]()}finally{if(j)throw b}}}}function e(c,e){if(c){if("string"==typeof c)return f(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);return"Object"===a&&c.constructor&&(a=c.constructor.name),"Map"===a||"Set"===a?Array.from(c):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(c,e):void 0}}function f(b,c){(null==c||c>b.length)&&(c=b.length);for(var a=0,d=Array(c);a<c;a++)d[a]=b[a];return d}function g(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")}function h(c,d){for(var a,b=0;b<d.length;b++)a=d[b],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}function i(c,d,a){return d&&h(c.prototype,d),a&&h(c,a),c}Object.defineProperty(b,"__esModule",{value:!0}),b.TodoList=void 0;var j=c(985),k=b.TodoList=function(){function a(){g(this,a),this.cargarLocalStorge()}return i(a,[{key:"nuevoTodos",value:function(a){this.todos.push(a),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(b){this.todos=this.todos.filter(function(c){return c.id!=b}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(b){var e,a=d(this.todos);try{for(a.s();!(e=a.n()).done;){var f=e.value;if(console.log(b,f.id),b==f.id){f.completado=!f.completado,console.log(f);break}}}catch(c){a.e(c)}finally{a.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(a){return!a.completado}),this.guardarLocalStorage(),console.log(this.todos)}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorge",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(function(a){return j.Todo._crearTodo(a)}),console.log("Mis Todos: ",this.todos)}}]),a}()},272:(a,b)=>{function c(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")}function e(c,d){for(var a,b=0;b<d.length;b++)a=d[b],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}function d(c,d,a){return d&&e(c.prototype,d),a&&e(c,a),c}Object.defineProperty(b,"__esModule",{value:!0});b.Todo=function(){function g(b){c(this,g),this.tarea=b,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return d(g,[{key:"imprimirTarea",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}],[{key:"_crearTodo",value:function(h){var a=h.id,b=h.tarea,c=h.completado,d=h.creado,e=new g(b);return e.id=a,e.completado=c,e.creado=d,e}}]),g}()},685:(a,b,c)=>{Object.defineProperty(b,"__esModule",{value:!0}),b.todoList=void 0,c(279);var d=c(985),e=c(777),f=b.todoList=new d.TodoList;f.todos.forEach(e.crearTodoHtml),f.todos[f.todos.length-1].imprimirTarea()},777:(a,b,c)=>{function f(a,c){var f="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!f){if(Array.isArray(a)||(f=d(a))||c&&a&&"number"==typeof a.length){f&&(a=f);var g=0,h=function(){};return{s:h,n:function(){return g>=a.length?{done:!0}:{done:!1,value:a[g++]}},e:function(a){throw a},f:h}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,e=!0,j=!1;return{s:function(){f=f.call(a)},n:function(){var a=f.next();return e=a.done,a},e:function(a){j=!0,i=a},f:function b(){try{e||null==f["return"]||f["return"]()}finally{if(j)throw b}}}}function d(c,f){if(c){if("string"==typeof c)return e(c,f);var a=Object.prototype.toString.call(c).slice(8,-1);return"Object"===a&&c.constructor&&(a=c.constructor.name),"Map"===a||"Set"===a?Array.from(c):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(c,f):void 0}}function e(b,c){(null==c||c>b.length)&&(c=b.length);for(var a=0,d=Array(c);a<c;a++)d[a]=b[a];return d}Object.defineProperty(b,"__esModule",{value:!0}),b.crearTodoHtml=void 0;var g=c(985),h=c(685),i=document.querySelector(".todo-list"),j=document.querySelector(".new-todo"),k=document.querySelector(".clear-completed"),l=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),n=b.crearTodoHtml=function(c){var d="\n    <li class=\"".concat(c.completado?"completed":"","\" data-id=\"").concat(c.id,"\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(c.completado?"checked":"",">\n            <label>").concat(c.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>"),a=document.createElement("div");return a.innerHTML=d,i.append(a.firstElementChild),a.firstElementChild};j.addEventListener("keyup",function(b){if(13===b.keyCode&&0<j.value.length){console.log(j.value);var c=new g.Todo(j.value);h.todoList.nuevoTodos(c),console.log(h.todoList),n(c),j.value=""}}),i.addEventListener("click",function(d){var e=d.target.localName;console.log(e);var a=d.target.parentElement.parentElement,b=a.getAttribute("data-id");e.includes("input")?(h.todoList.marcarCompletado(b),a.classList.toggle("completed")):e.includes("button")&&(h.todoList.eliminarTodo(b),i.removeChild(a),console.log(h.todoList))}),k.addEventListener("click",function(){h.todoList.eliminarCompletados();for(var a,b=i.children.length-1;0<=b;b--)a=i.children[b],a.classList.contains("completed")&&i.removeChild(a),console.log(a)}),l.addEventListener("click",function(c){var g=c.target;if(console.log(g.text),!!g.text){m.forEach(function(a){return a.classList.remove("selected")}),g.classList.add("selected");var a,j=f(i.children);try{for(j.s();!(a=j.n()).done;){var b=a.value;b.classList.remove("hidden");var d=b.classList.contains("completed");switch(g.text){case"Pendientes":d&&b.classList.add("hidden");break;case"Completados":d||b.classList.add("hidden");}}}catch(a){j.e(a)}finally{j.f()}}})},279:(a,b,c)=>{c.r(b)}},c={};(()=>{a.r=(a)=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}})();a(685)})();