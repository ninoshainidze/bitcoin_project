<template>
  <Navbar />
  <div class="sign_up">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="signup_form">
            <h1>Sign up</h1>
            <p>Please enter the information below:</p>
            <div class="form">
              <div>
                <label for="">Fist name<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">last name<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Email<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Fist name<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Phone number<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Password<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Password confirm<span>*</span></label>
                <input type="text" class="form-control" />
              </div>
              <div class="checkbox d-flex">
                <input type="checkbox" class="form-control" />
                <label for=""
                  >I agree to eclipcoin.com
                  <span>Terms and Conditions, Privacy Policy</span></label
                >
              </div>
              <div class="checkbox d-flex">
                <input type="checkbox" class="form-control" />
                <label for=""
                  >I agree to receive emails, news and notifications</label
                >
              </div>

              <button>CREATE AN ACCOUNT</button>
            </div>
            <p>
              Already registered
              <span><router-link to="/">Login</router-link></span>
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="signup_icons">
            <h1>Buy with confidence</h1>
            <div>
              <img
                src="../../assets/signup/singup_security.svg"
                alt=""
                width="70"
                height="70"
              />
              <div>
                <h3>Security</h3>
                <p>
                  Two factor authentication<br />
                  Personal data encryption
                </p>
              </div>
            </div>
            <div>
              <img
                src="../../assets/signup/singup_service.svg"
                alt=""
                width="70"
                height="70"
              />
              <div>
                <h3>Service</h3>
                <p>
                  Reliable customer support <br />Low service commissions<br />
                  Wide payment options
                </p>
              </div>
            </div>
            <div>
              <img
                src="../../assets/signup/singup_privacy.svg"
                alt=""
                width="70"
                height="70"
              />
              <div>
                <h3>Privacy</h3>
                <p>
                  Sensitive data protection<br />
                  Service availability
                </p>
              </div>
            </div>
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
.sign_up {
  padding: 200px 0 100px 0;
  background: rgb(241, 243, 247);
  background: linear-gradient(
    0deg,
    rgba(241, 243, 247, 1) 90%,
    rgba(2, 23, 45, 1) 90%
  );
}
.signup_icons,
.signup_form {
  height: 100%;
  border-radius: 15px;
  background-color: #f1f3f7;
  padding: 50px;
  -webkit-box-shadow: -27.786px -28.774px 80px 0 #fff,
    28.284px 28.284px 80px 0 rgb(169 180 202 / 40%), inset 0 3px 0 0 #fff;
  box-shadow: -27.786px -28.774px 80px 0 #fff,
    28.284px 28.284px 80px 0 rgb(169 180 202 / 40%), inset 0 3px 0 0 #fff;
}

.form {
  display: block;
}

.form input:focus {
  box-shadow: none;
  border: 1px solid #dadada;
}
.form > div {
  padding-bottom: 10px;
}

.form > div label {
  font-weight: 700;
  font-size: 13px;
  padding-bottom: 5px;
  color: #02172d;
}
.form span {
  color: #3643f0;
  margin-left: 2px;
}
.checkbox {
  margin-bottom: 20px;
}
.checkbox input {
  width: 30px;
  height: 30px;
}
.checkbox label {
  align-items: center;
  display: flex;
  margin-left: 10px;
  color: #6a7e93 !important;
  font-weight: inherit !important;
}
.signup_icons > div {
  display: flex;
  padding: 0 40px 0 40px;
  margin-bottom: 30px;
}

.signup_icons > div img {
  margin-right: 30px;
}

.signup_icons > div h3 {
  color: #02172d;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
}
.signup_icons > div p,
.signup_form p {
  color: #6a7e93;
  font-size: 13px;
}

.signup_icons h1,
.signup_form h1 {
  color: #02172d;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 50px;
}
.signup_form button {
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
</style>
