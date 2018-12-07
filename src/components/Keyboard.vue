<template>
  <div class="hello">
    <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
    <vue-touch-keyboard v-if="visible", :layout="layout", :cancel="hide", :accept="accept", :input="input" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueTouchKeyboard from "vue-touch-keyboard";
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style
Vue.use(VueTouchKeyboard);
export default {
    data () {
      return {
        visible: false,
        layout: "normal",
        options: {
          useKbEvents: false,
          preventClickEvent: false
        }
      }
    },

    methods: {
        accept(text) {
          alert("Input text: " + text);
          this.hide();
        },

        show(e) {
          this.input = e.target;
          print(this.input)
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
