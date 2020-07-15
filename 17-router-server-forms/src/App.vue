<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="pepito" exact>Home</router-link>|
      <router-link to="/about" active-class="pepito" exact>About</router-link>|
      <router-link to="/games">Games</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav .router-link-exact-active {
  color: #6242b9;
}
</style>
