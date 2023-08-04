<template>
  <div class="login">
    <h3>登陆页</h3>
    <input type="text" placeholder="请输入账号" />
    <input type="text" placeholder="请输入密码" />
    <button @click="handleLogin">登陆</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  components: {},
  data() {
    return {
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("user/login", {
          username: "admin",
          password: "123456",
        })
        .then(() => {
          const pathParams = {
            path: this.redirect || "/",
            query: this.otherQuery,
          };
          this.$router.push(pathParams);
        });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
});
</script>

<style lang="scss" scoped></style>
