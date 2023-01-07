<template>
  <v-app>
    <Navbar/>
    <v-main>
      <ToolBar/>
      <Banner></Banner>
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import ToolBar from '@/components/ToolBar';
import Footer from '@/components/Footer'

export default {
  name: 'Home',

  components: {
    Navbar,
    Banner,
    ToolBar,
    Footer
  },
}
</script>
