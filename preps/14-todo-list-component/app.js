let todos =  [
    {
        completed: false,
        text: "enviar correo a Rafa Sotoca"
    },
    {
        completed: false,
        text: "enviar correo a Toni Antonino"
    },
    {
        completed: false,
        text: "enviar correo a Perico el de los palotes"
    },
]

let nuevaTarea = "";


Vue.component('titulo',
    {
        template: '<h2>{{titulo}}</h2>',
        data: function() {
            return { titulo: "Lista de tareas"}
        }
    }
)

Vue.component('add-todo',
    {
        template: `
        <div>
        <input type="text" v-model="nuevaTarea" @keyup.enter = "addTareaAndReset"><button @click="addTarea" >Añadir</button>
        </div>
        `,
        data: function() {
            return {todos, nuevaTarea}
        },
        methods: {
            addTareaAndReset: function() {
                this.addTarea();
                this.nuevaTarea = "";
            },
            addTarea: function() {
                console.log("addtarea", nuevaTarea)
                this.todos.push({completed: false, text: this.nuevaTarea})
            },
        }
    }
)

Vue.component('todo-list', {
    template: `
    <table class="pure-table pure-table-horizontal">
    <thead>
        <tr>
            <th>Tarea</th>
            <th style="min-width: 200px; "></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="todo in todos">
            <td>{{todo.text}}</td>
            <td style="text-align: center">
                <button v-if="!todo.completed" @click="completeTodo(todo)">Completar</button>
                <i v-else class="icono-check" ></i>
                <span @click="deleteTodo(todo)"><i class="icono-cross"></i></span>
            </td>
        </tr>
    </tbody>
    </table>`,
    data: function() {
        return {todos}
    },
    methods: {
        completeTodo: function(todo){
            todo.completed = true
        },
        deleteTodo: function(todo) {
            this.todos = this.todos.filter(i => i != todo)
        },
    }
}
)

Vue.component('todo-count', {
    template: `
    <div>Tareas pendientes {{tareasPendientes}}</div>
    `,
    data: function () {
        return {todos, nuevaTarea}
    },
    computed: {
        tareasPendientes: function() {
            return this.todos.reduce(
            (acc, act) => act.completed ? acc : acc +1,
            0
        )
            }
    }

})

const app = new Vue(
    {
        el: '.vue'
    }
)