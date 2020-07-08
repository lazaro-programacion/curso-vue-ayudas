const app = new Vue(
    {
        el: "#app",
        data: {
            tareas: [
                {
                    id: 1,
                    titulo: "Hacer la compra",
                    completada: false
                },
                {
                    id: 2,
                    titulo: "Bajar al perro",
                    completada: true
                },
                {
                    id: 3,
                    titulo: "Comprar mascarillas",
                    completada: false
                },
            ],
            nuevaTarea: ""
        },
        computed: {
            totalTareas() {
                return this.tareas.length;
            },
            totalPendientes() {
                return this.tareas.filter(t => !t.completada).length
            },
            totalTerminadas() {
                return this.tareas.filter(t => t.completada).length
            }

        },
        methods: {
            completar(tarea) {
                console.log("completar");
                tarea.completada = true;
            },
            addTarea() {
                const newTask = {
                    id: this.tareas.reduce(
                        (acc, act) => {
                            return act.id > acc ? act.id : acc
                        },
                        0
                    ) + 1,
                    titulo: this.nuevaTarea,
                    completada: false
                };
                this.tareas.push(newTask);
                this.nuevaTarea = ""
                // this.tareas = [...this.tareas, newTask];
                document.querySelector("#taskinput").focus();
            },
            borrar(tarea) {
                this.tareas = this.tareas.filter(
                    t => t.id !== tarea.id
                )
            }
        },

    }
)