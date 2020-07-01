const app = new Vue(
    {
        el: '.vue',
        data: {
            todos: [
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
                }
            ],
            nuevaTarea: ""
        },
        methods: {
            addTarea: function() {
                console.log("addtarea", this.nuevaTarea)
                this.todos.push({completed: false, text: this.nuevaTarea})
            },
            completeTodo: function(todo){
                todo.completed = true
            },
            deleteTodo: function(todo) {
                this.todos = this.todos.filter(i => i != todo)
            },
            addTareaAndReset: function() {
                this.addTarea();
                this.nuevaTarea = "";
            }
        },
        computed: {
            tareasPendientes: function() {
                console.log(
                    this.todos.reduce(
                        (acc, act) => {console.log(act); if (!act.completed) { return acc +1; console.log("sumo1")} } ,
                        0
                    )
                )
                return this.todos.reduce(
                (acc, act) => act.completed ? acc : acc +1,
                0
            )
                }
        }
    }
)