<template>
  <div class="home">
    <div>
      <Header/>
      <Swiper/>
      <Article/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from "../views/Header"
  import Swiper from "./Swiper";
  import Article from "./Article";
  import Footer from "./Footer";
export default {
  name: 'Home',
  components: {
    Footer,
    Article,
      Header,
      Swiper,
  }
}
</script>
<style>
.home{
height: 100%;
}
</style>