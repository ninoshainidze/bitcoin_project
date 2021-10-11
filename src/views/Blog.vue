<template>
  <div class="blog">
    <Navbar />

    <div class="blog_content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Blog</h1>
            <!-- <div class="pagination">
              <pagination
                v-model="page"
                :records="50"
                :per-page="25"
                @paginate="myCallback"
              />
            </div> -->
          </div>
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
  name: "Blog",
  components: {
    Navbar,
    Footer,
    Pagination,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.blog {
  background: #f1f3f7;
  background: rgb(241, 243, 247);
  background: linear-gradient(
    0deg,
    rgba(241, 243, 247, 1) 85%,
    rgba(2, 23, 45, 1) 85%
  );
}
.blog_content {
  padding: 200px 0 50px 0;
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
