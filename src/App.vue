<template>
  <div id="app">
      <div v-if="isLogin != '/login' && isLogin != '/register'">
        <Headers />
      </div> 
    <bodyVue></bodyVue>
    <div v-if="isLogin != '/login'  && isLogin != '/register'">
      <Footers />
      </div>
    
  </div>
</template>
<script>
import Headers from "./layouts/header.vue";
import Footers from "./layouts/footer.vue";
import bodyVue from "./layouts/body.vue";
import "flowbite";
export default {
  data: {},
  computed: {
    isLogin() {
      return this.$route.path;
    },
    mount() {
     
      },
      methods: {
       
      },
   },
  components: {
    Headers,
    Footers,
    bodyVue,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  color: pink;
  transition: all 0.15s;
}

nav a.router-link-exact-active {
  color: #ff0000;
  font-size: 1rem;
}
</style>
