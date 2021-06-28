<template>
  <Navbar />
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="login_form">
            <h1>Login</h1>
            <p>Enter your details below:</p>
            <div class="input mb-3">
              <p>Email Address*</p>
              <input type="text" class="form-control mb-3" />
              <p>password*</p>
              <input type="text" class="form-control" />
            </div>
            <router-link to="/" class="forgot_password"
              >Forgot your password?</router-link
            >
            <button>Login</button>
            <p class="text-center">
              Do not have account?
              <span><router-link to="/signup">Sign up</router-link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<script>
import Navbar from "../Navbar/Navbar.vue";
import Footer from "../Footer/Footer.vue";


export default {
  name: "login",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.login {
  padding: 200px 0 100px 0;
  background: rgb(241, 243, 247);
  background: linear-gradient(
    0deg,
    rgba(241, 243, 247, 1) 85%,
    rgba(2, 23, 45, 1) 85%
  );
}
.login_form {
  width: 40%;
  border-radius: 15px;
  padding: 30px;
  box-shadow: -27.786px -28.774px 80px 0 #fff,
    28.284px 28.284px 80px 0 rgb(169 180 202 / 40%), inset 0 3px 0 0 #fff;
  margin: auto;
}
.login_form h1 {
  color: black;
  font-weight: 700;
  padding-bottom: 20px;
}
.login_form p {
  color: #6a7e93;
}
.input p {
  margin: 0px;
  font-weight: 700;
  color: black;
}
.input input:focus {
  box-shadow: none;
  border: 1px solid #dadada;
}
.login_form button {
  margin: 20px 0 50px 0;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(130deg, #0b5ce9 0%, #7320f9 100%);
  box-shadow: 0 8px 7.84px 0.16px rgb(11 92 233 / 40%);
  color: #fff !important;
  font-weight: 700;
}
.forgot_password {
  text-decoration: none;
}
.forgot_password:hover {
  text-decoration: underline;
}
</style>
