<template>
  <div id="navbar-wrapper">
    <div id="navbar" class="fixed-header">
      <h2>Live Python</h2>
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Rooms' }">Rooms</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </nav>
    </div>
      <div id="navbar__reajuster">
        <!-- <p>1</p> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#navbar__reajuster {
  height: 60px;
  position: relative;
  top: 0;
  /* padding: 0 5%; */
  text-align: left;
}



.fixed-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}

#navbar {
  display: flex;
  /* align-content: center; */
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
  /* width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,.28); */
}

h2 {
  margin: 0;
}

/* a {
  padding: 20px;
} */

.router-link-exact-active {
  color: rgb(138, 124, 124) !important;
}

nav > a {
  color: #2c3e50;

  text-decoration: none;
  font-size: 1.5rem;
  /* padding-bottom: 0.5em; */
  padding: 20px;
}
</style>
