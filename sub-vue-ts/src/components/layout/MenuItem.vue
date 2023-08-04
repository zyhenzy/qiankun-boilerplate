<template>
  <div v-if="!item.hidden">
    <router-link v-if="hasChild(item)" :to="resolvePath(item.path)">
      <el-menu-item
        :index="resolvePath(item.path)"
        @click="handleMenuClick(item)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-item
        v-for="(child, c_index) in item.children"
        :item="child"
        :key="item.path + c_index"
        :base-path="item.path"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuItem",
  components: {},
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  computed: {},
  methods: {
    hasChild(menu: any) {
      return !menu.children;
    },
    handleMenuClick(menu: any) {
      const path = this.resolvePath(menu.path);
      console.log(666);
      console.log(menu);
      console.log(path);
    },
    resolvePath(path: string) {
      const pathRes =
        this.basePath === "/"
          ? this.basePath + path
          : this.basePath + "/" + path;
      return pathRes;
    },
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
}
</style>
