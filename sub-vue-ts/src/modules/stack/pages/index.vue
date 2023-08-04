<template>
  <div class="stack">
    <button @click="handleClick">hahaha</button>
    <!--    <iframe-->
    <!--      id="iframe"-->
    <!--      class="editor-iframe"-->
    <!--      src="http://192.168.137.25:3001/"-->
    <!--    />-->

<!--    <iframe-->
<!--      id="iframe"-->
<!--      class="editor-iframe"-->
<!--      sandbox="allow-forms allow-scripts allow-same-origin allow-popups"-->
<!--      src="/"-->
<!--    />-->

        <iframe id="iframe" class="editor-iframe" src="http://www.bing.com/" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Stack",
  components: {},
  methods: {
    handleClick() {
      const dom = document.getElementById("iframe");
      console.log(dom);
      console.log(dom.contentWindow);
      console.log(dom.contentWindow.document);
    },
  },
});
</script>

<style lang="scss" scoped>
.stack {
  .editor-iframe {
    width: 1000px;
    height: 600px;
  }
}
</style>
