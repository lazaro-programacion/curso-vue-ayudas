<template>
  <div>
    <table class="pure-table pure-table-horizontal">
      <thead>
        <tr>
          <th>Tarea</th>
          <th style="width: 300px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo" :class="{terminado: todo.completed} ">
          <td>{{todo.title}}</td>
          <td>
            <button v-if="!todo.completed" @click="completar(todo)">Completar</button>
            <div v-else>Completado</div>
            <button @click="borrar(todo)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: ["todos"],
  methods: {
    completar(todo) {
      todo.completed = true;
    },
    borrar(todo) {
      this.todos = this.todos.filter(i => i != todo);
    }
  }
};
</script>
