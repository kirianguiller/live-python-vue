import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { codemirror } from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css'
// Vue.use(codemirror)
// import VueCodemirror from 'vue-codemirror'
// import base style
// import 'codemirror/lib/codemirror.css'
// import more codemirror resource...
// import io from "socket.io"

// var socket = io();
// console.log(socket)

// //////// With vue-socket.io ////////
// import VueSocketIO from 'vue-socket.io';
// import SocketIO from 'socket.io-client'

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection :SocketIO('http://localhost:3000'),
// }))
// //////// end /////////

//////// With vue-socket.io-extended /////////
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
 
Vue.use(VueSocketIOExt, socket);
//////// end ////////

Vue.config.productionTip = false

// you can set default global options and events when Vue.use
// Vue.use(VueCodemirror, /* {
//   options: { theme: 'base16-dark', ... },
//   events: ['scroll', ...]
// } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

