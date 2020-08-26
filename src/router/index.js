import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Rooms from "../views/Rooms.vue";
import Room from "../views/Room.vue";
import About from "../views/About.vue";

// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/room/:id",
    name: "Room",
    component: Room,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
