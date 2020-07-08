<template>
    <div>
        <input type="text" @keyup.enter = "addTodo" v-model="nuevaTarea">
        <button @click="addTodo">Añadir</button>
    </div>
</template>

<script>
export default {
    name:"add-todo",
    data() {
        return {
            nuevaTarea: ''
        }
    },
    methods: {
        addTodo: function () {
            console.log("add todo", this.nuevaTarea);
            this.todos.push({title: this.nuevaTarea, completed: false});
            console.log("todos", this.todos)
            this.nuevaTarea = ""
        }
    },
    props: ['todos']
}
</script>