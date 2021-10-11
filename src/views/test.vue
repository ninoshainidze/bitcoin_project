<template>
  <div>
    <div>test</div>
    {{ name }}
    {{ email }}
    <div id="button" class="logout">
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      });
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>