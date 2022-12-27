<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <hello-world />
      <Banner ></Banner>
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Navbar,
    Banner,
    Footer
  },
}
</script>
