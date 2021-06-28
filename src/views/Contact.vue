<template>
  <div class="contact">
    <Navbar />
    <div class="header">
      <div class="container">
        <h1>Contact us</h1>
        <p>
          Eclipcoin is one of the most convenient and trusted places to buy
          Bitcoin securely.
        </p>
      </div>
    </div>

    <div class="container pt-5">
      <div class="row">
        <div class="col-12">
          <div class="contact_form">
            <h1>Send us a message</h1>
            <div>
              <label for="">Full Name<span>*</span></label>
              <input type="text" class="form-control" />
            </div>

            <div class="tree_input">
              <label for="">Phone number<span>*</span></label>

              <siv class="d-flex">
                <select name="" class="form-select">
                  <option value="">ad</option>
                  <option value="">ad</option>
                  <option value="">ad</option>
                </select>
                <input type="text" class="form-control first" />
                <input type="text" class="form-control" />
              </siv>
            </div>

            <div>
              <label for="">Subject<span>*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div>
              <label for="">Text<span>*</span></label>
              <input type="text" class="form-control" />
            </div>
            <button>SEND FORM</button>
          </div>
          <div class="contact_info">
            <p>
              Email
              <span>support@eclipcoin.com</span>
              Phone
              <span>+3 (725) 8190244</span>
              Telegram
              <span>@eclipsupport</span>
            </p>
          </div>
          <div class="contact_email">
            <span>
              For business proposals contact us via our business e-mail:
              business@eclipcoin.com
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="first_buy mt-5 mb-5">
      <div class="container">
        <div>
          <h1>Buy your first Bitcoin with your credit or debit card</h1>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
    <div class="widget">
      <div class="container d-flex">
        <div class="col-9">
          <h4>This website is operated by Eclipcoin Technology OÜ.</h4>
          <p>
            Please note: purchasing or selling Cryptocurrency carry significant
            risk. Prices can fluctuate at any time. Because of such
            fluctuations, Cryptocurrency may gain or lose value. This is your
            responsibility on how to handle your own assets.
          </p>
        </div>
        <div class="col-3">
          <img src="../assets/home/widget.png" alt="" width="150" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "Contact",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.contact {
  background: #f1f3f7;
}
.header {
  width: 100%;
  height: 70vh;
  padding-top: 200px;
  text-align: center;
  background-image: url("../assets/contact/bg-page-top.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.header h1 {
  font-size: 60px;
  color: white;
}
.header p {
  color: #a7bdd2;
  font-size: 18px;
}
.contact_form {
  padding-right: 570px;
  padding-left: 70px;
  min-height: 610px;
  background-image: url("../assets/contact/contact.svg");
  background-position: 110% 50%;
  background-repeat: no-repeat;
  background-size: 650px auto;
  border-radius: 15px;
  background-color: #f1f3f7;
  padding: 50px;
  box-shadow: -27.786px -28.774px 80px 0 #fff,
    28.284px 28.284px 80px 0 rgb(169 180 202 / 40%), inset 0 3px 0 0 #fff;
}
.contact_form button {
  margin: 50px 0 50px 0;
  padding: 15px;
  width: 50%;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(130deg, #0b5ce9 0%, #7320f9 100%);
  box-shadow: 0 8px 7.84px 0.16px rgb(11 92 233 / 40%);
  color: #fff !important;
  font-weight: 700;
}
.contact_form input {
  width: 50%;
}

.contact_form > div label {
  font-weight: 700;
  font-size: 13px;
  padding-bottom: 5px;
  color: #02172d;
}
.contact_form span {
  color: #3643f0;
  margin-left: 2px;
}

.contact_form h1 {
  color: #02172d;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
}

.contact_form input:focus, .tree_input select {
  box-shadow: none;
  border: 1px solid #dadada;
}
.contact_form > div {
  margin-bottom: 10px;
}

.tree_input input {
  width: 23%;
}
.tree_input .first {
  width: 15%;
  margin-right:10px;

}
.tree_input select {
  width: 10%;
  margin-right:10px;
}

.contact_info p {
  padding: 35px;
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: #fff;
}

.contact_email,
.contact_info {
  height: 100px;
  margin: 35px 0 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(130deg, #0b5ce9 0%, #7320f9 100%);
}
.contact_email span,
.contact_info span {
  padding: 35px;
  color: #5aeaff;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
}
.first_buy {
  width: 100%;
  height: 60vh;
  text-align: center;
  background-image: url("../assets/contact/bg-page-promo.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.first_buy h1 {
  text-align: center;
  color: white;
  font-size: 50px;
  padding-bottom: 20px;
  font-weight: 500;
}
.first_buy > div {
  height: 60vh;
  display: flex;
  align-items: center;
}
.first_buy button {
  padding: 15px;
  width: 300px;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(130deg, #0b5ce9 0%, #7320f9 100%);
  box-shadow: 0 8px 7.84px 0.16px rgb(11 92 233 / 40%);
  color: #fff !important;
  font-weight: 700;
}
.first_buy button:hover {
  text-decoration: underline;
}
.widget {
  background: #f1f3f7;
  padding: 80px 0 80px 0;
}
.widget h4 {
  margin-bottom: 30px;
  font-weight: 700;
}
.widget p {
  color: #6a7e93;
}
</style>
