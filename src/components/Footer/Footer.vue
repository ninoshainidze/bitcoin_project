<template>
  <footer>
    <div class="container d-flex">
      <div class="col-2 logo">
        <img src="../../assets/home/logo.png" alt="" />
      </div>
      <div class="col-10">
        <ul>
          <li>Knowledge base</li>
          <li class="border_li">Terms & Conditions</li>
          <li>AML</li>
          <li class="border_li">Termination Policy</li>
          <li>KYC Policy</li>
          <li class="border_li">Privacy Policy</li>
          <li>Refund and Cancelation</li>
        </ul>
      </div>
    </div>
    <div class="container d-flex pt-4">
      <div class="col-7">
        <p>
          Eclipcoin Technology OÜ. Address is Harju maakond, Tallinn, Kristiine
          linnaosa, Keemia tn 4-24, 10616. Eclipcoin Technology OÜ is regulated
          by Estonian FIU, license number: FVT000388
        </p>
      </div>
      <div class="col-5 d-flex">
        <div class="icons">
          <img src="../../assets/footer/icon-visa.svg" alt="" height="20" />
          <img src="../../assets/footer/icon-mc.svg" alt="" height="25" />
          <img src="../../assets/footer/icon-interac.png" alt="" height="30" /><br />
          <img src="../../assets/footer/verifiedby.png" alt="" height="30" />
        </div>
        <div class="copyright">
          <p>
            © eclipcoin.com 2021
            <br />
            Verified by Visa and MasterCard Secure Code
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
footer {
  background: #02172d;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 20px 0 20px 0;
  align-items: center;
}
.container-fluid {
  align-items: center;
}
.logo {
  text-align: left !important;
}
ul {
  list-style-type: none;
  display: flex;
  color: #a7bdd2;
  padding-top: 25px;
}
li {
  padding: 0 7px 0 7px;
}
.border_li {
  border-left: 1px solid #a7bdd2 !important;
  border-right: 1px solid #a7bdd2;
}
p {
  color: #5f7b97;
  font-size: 12px;
}
.icons {
  padding-right: 30px;
}
</style>