<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "@/components/layout/Sidebar.vue";

export default Vue.extend({
  name: "Layout",
  components: { Sidebar },
});
</script>

<style>
.el-container {
  width: 100vw;
  height: 100vh;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
