<template>
  <div id="app">
    <NavBar v-if="$route.name !== 'Room'" />
    <router-view class="content" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import io from "socket.io"

export default {
  components: {
    NavBar
  }
  // sockets: {
  //   // connect: function () {
  //   //   console.log("socket connected app <-> server");
  //   // },
  // },
};
</script>


<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  // color: #2c3e50;
  // background-color: $primary-color;
  // background-color: red;

  width: 100%;
}

.content {
  position: relative;
  /* top: 60px; */
  /* padding: 0 5%; */
  /* text-align: left; */
}
</style>
