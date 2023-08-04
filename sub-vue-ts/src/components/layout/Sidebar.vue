<template>
  <el-menu
    class="sidebar"
    :default-active="activeMenu"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <menu-item
      v-for="(item, index) in routes"
      :item="item"
      :base-path="item.path"
      :key="index"
    />
  </el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import MenuItem from "@/components/layout/MenuItem.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("permission");

export default Vue.extend({
  name: "Layout",
  components: { MenuItem },
  computed: {
    ...mapState({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      routes: (state) => state.routes,
    }),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta && meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  methods: {
    handleOpen(key: string, keyPath: string) {
      console.log(key, keyPath);
    },
    handleClose(key: string, keyPath: string) {
      console.log(key, keyPath);
    },
    handleMenuClick(menu: never) {
      console.log(menu);
    },
    resolvePath(path: string) {
      return path;
    },
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
}
</style>
