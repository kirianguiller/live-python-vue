// ------------------------------ template ------------------------------//
<template>
  <div id="viewport">
    <div id="header">
      <h1>{{ room.name }}</h1>
    </div>
    <!-- <h2>{{ room.name }}</h2>
    <h3>Number of connected people : {{attendees.length}}</h3>-->
    <!-- <codemirror v-model="room.code" :options="cmOptions" ref="cmEditor" /> -->
    <div id="main">
      <codemirror
        id="vuecm"
        ref="cmEditor"
        v-model="room.code"
        :options="cmOptions"
        @keyup="onCmKeyUp"
      />
    </div>
    <div id="sidebar"></div>
    <!-- @ready="onCmReady"
    @focus="onCmFocus"-->
    <button @click="saveCode()">Save</button>
  </div>
</template>

// ------------------------------ script ------------------------------//
<script>
import { codemirror } from "vue-codemirror";

import "codemirror/mode/python/python.js";
import "codemirror/theme/monokai.css";
import "codemirror/theme/base16-dark.css";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";

import "codemirror/addon/selection/active-line.js";
import "codemirror/addon/selection/selection-pointer.js";
import "codemirror/addon/selection/mark-selection.js";

import api from "@/services/api.js";

export default {
  components: {
    codemirror
  },
  created() {
    this.$socket.client.emit("joinRoom", { roomId: this.$route.params.id });
  },
  mounted() {
    api.getRoom(this.$route.params.id).then(response => {
      this.codemirror.on("keyup", this.onCmKeyUp);
      this.room = response.data.room;
      console.log(response);
    });
    this.codemirror.setSize("100%", "100%");
  },
  beforeDestroy() {
    this.$socket.client.emit("leaveRoom", { roomId: this.room._id });
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    newUser: function() {
      console.log("New user connected");
    },
    newCode: function(data) {
      const beforeChangeCursorPosition = this.codemirror.getCursor();
      this.codemirror.setValue(data.newCode);
      this.codemirror.focus();
      this.codemirror.setCursor(beforeChangeCursorPosition);
    },
    updateAttendees: function(data) {
      this.attendees = data.attendees;
    }
  },
  data() {
    return {
      attendees: [],
      room: {
        creator: null,
        name: null,
        code: "",
        _id: null
      },
      cmOptions: {
        tabSize: 4,
        styleActiveLine: true,
        selectionPointer: true,
        styleSelectedText: true,
        lineNumbers: true,
        line: true,
        theme: "monokai",
        mode: {
          name: "python",
          version: 3,
          singleLineStringErrors: true
        }
      }
    };
  },
  methods: {
    saveCode() {
      api.updateRoom(this.room);
    },
    // onCmReady(cm) {
    //   console.log("the editor is readied!", cm);
    // },
    // onCmFocus(cm) {
    //   console.log("the editor is focused!", cm);
    // },
    // onCmCodeChange(newCode) {
    //   //   console.log("this is new code", newCode);
    //   //   this.$socket.client.emit("newCode", { newCode: newCode });
    //   //   this.room.code = newCode;
    // },
    setFocus() {
      this.codemirror.focus();
      this.codemirror.setCursor({ line: 1, ch: 5 });
    },
    changeCode() {
      this.room.code = "def newcode():";
    },
    onCmKeyUp(cm) {
      const newCode = cm.getValue();
      this.$socket.client.emit("newCode", {
        newCode: newCode,
        roomId: this.room._id
      });
    }
  }
};
</script>

// ------------------------------ style ------------------------------//
<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#viewport {
  height: 100vh;
  width: 100vw;
}

#header {
  background-color: $dark-shade;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-bottom: 1px solid #595959;

  h1 {
    color: $light-shade;
    font-size: 24px;
  }
}

#main {
  position: absolute;
  top: 50px;
  right: 50px;
  bottom: 0px;
  left: 0;
  
  #vuecm {
    height: 100%;
  }
}

#sidebar {
  position: absolute;
  top: 50px;
  width: 50px;
  bottom: 0px;
  right: 0px;
  background-color: $dark-shade;
}
</style>