<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="{ change_color: scrollPosition > 20 }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../../assets/home/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/buybitcoin" class="nav-link"
              >HOW TO BUY BITCOINS</router-link
            >
          </li>
          <li class="nav-item">
            <div class="sign_up">
              <router-link to="/signup" class="nav-link">SIGN UP</router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="login nav-link">
              <router-link to="/login">LOGIN</router-link>
              <img src="../../assets/home/left.png" alt="" width="20" />
            </div>
          </li>
        </ul>
        <div>en</div>
        <!-- <div id="button" class="logout"  style="display:none">
          <button @click="logout">logout</button>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from "axios";
export default {
  name: "navbar",
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    // logout() {
    //   localStorage.clear();
    //   this.$router.push("/login");
    // },
  },
};
</script>

<style scoped>
.navbar {
  background: transparent;
}
.nav-item a {
  color: #a7bdd2;
}
.sign_up a {
  text-decoration: none;
  /* border: 1px solid #133a52; */
  background: transparent;
  color: #a7bdd2;
  /* padding: 12px 30px; */
  /* border-radius: 25px; */
  /* margin: 0 30px 0 30px; */
}
.login a {
  text-decoration: none;
  /* background: none; */
  color: #a7bdd2;
}
.login img {
  margin-top: -3px;
}
.change_color {
  background-color: #02172d;
  transition: 1s;
}
.change_color a {
  color: white;
  transition: 1s;
}
</style>