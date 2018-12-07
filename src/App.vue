<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
    <vue-touch-keyboard v-if="visible", :layout="layout", :cancel="hide", :accept="accept", :input="input" />
    </div>
  </div>
</template>

<script>
import VueTouchKeyboard from "vue-touch-keyboard";
import Vue from 'vue'
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style

Vue.use(VueTouchKeyboard);

export default {
  name: 'App',
  data: {
    visible: true,
    layout: "normal",
    options: {
      useKbEvents: false,
      preventClickEvent: false
      }
  },
  methods: {
    accept(text) {
      alert("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible)
        this.visible = true
    },
    hide() {
      this.visible = false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
