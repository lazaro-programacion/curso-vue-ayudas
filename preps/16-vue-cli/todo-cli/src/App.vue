<template>
  <div>
  <titulo :title="title"></titulo>
  <add-todo :todos="todos"></add-todo>
  <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: {
    Titulo,
    AddTodo,
    TodoList
  },
  data() {
    return {
      title: "Mi lista de tareas",
      todos: [
        {
          completed: false,
          title: "Mi tarea"
        }
      ]
    }
  },
}
</script>

<style>

</style>
