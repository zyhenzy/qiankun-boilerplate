<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { getSort } from "@/api/user";

export default Vue.extend({
  name: "App",
  components: {},
  created() {
    // getSort().then((res) => {
    //   console.log(res);
    // });
  },
});
</script>

<style lang="scss">
body,
#app {
  margin: 0;
  padding: 0;
}
</style>
