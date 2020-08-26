<template>
  <div class="hello">
    <codemirror v-model="code" :options="cmOptions" ref="cmEditor" />
    <button @click="changeTheme()">change theme</button>
    <p>{{code}}</p>
    <!-- <textarea name="cm" id="cm" ref="cm" cols="30" rows="10"></textarea> -->
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";

// import base style

// import more codemirror resource...
// import CodeMirror from "codemirror";
import "codemirror/mode/python/python.js";
import "codemirror/theme/monokai.css";
import "codemirror/theme/base16-dark.css";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";

import "codemirror/addon/selection/active-line.js";
import "codemirror/addon/selection/selection-pointer.js";
import "codemirror/addon/selection/mark-selection.js";
export default {
  name: "HelloWorld",
  components: {
    codemirror,
  },
  data() {
    return {
      code: "def f(x):",
      cmOptions: {
        tabSize: 4,
        styleActiveLine: true,
        selectionPointer: true,
        styleSelectedText: true,
        lineNumbers: true,
        line: true,
        theme: "monokai",
        // mode: 'text/python',
        mode: {
          name: "python",
          // version: 3,
          singleLineStringErrors: true,
          // theme: "monokai",
        },
        // theme: "monokai",
      },
      // cmOptions: {
      //   tabSize: 4,
      //   // mode: 'text/python',
      //   mode: {
      //     name: "python",
      //     version: 3,
      //     singleLineStringErrors: true,
      //     theme: "monokai",
      //   },
      //   theme: "base16-dark",
      //   lineNumbers: true,
      //   line: true,
      //   // more CodeMirror options...
      // },
      inputCm: null,
    };
  },
  // computed: {
  //   codemirror() {
  //     return this.$refs.cmEditor.codemirror;
  //   },
  // },
  // mounted() {
  //   console.log("the current CodeMirror instance object:", this.codemirror);
  //   // const inputTextarea = document.getElementById("input-textarea");
  //   // const outputTextarea = document.getElementById("output-textarea");

  //   // this.inputCm = CodeMirror.fromTextArea(inputTextarea, {
  //   this.inputCm = CodeMirror.fromTextArea(this.$refs.cm, {
  //     lineNumbers: true,
  //     tabSize: 4,
  //     styleActiveLine: true,
  //     mode: {
  //       name: "python",
  //       version: 3,
  //       singleLineStringErrors: true,
  //       theme: "monokai",
  //     },
  //   });
  // },
  // methods: {
  //   changeTheme() {
  //     this.cmOptions.theme = "base16-dark";
  //   },
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
