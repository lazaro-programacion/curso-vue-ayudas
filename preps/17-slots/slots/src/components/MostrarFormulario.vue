<template>
  <form>
    <h2>{{titulo}}</h2>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    titulo: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>