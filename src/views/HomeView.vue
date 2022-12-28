<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <hello-world />
      
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Navbar,
   
    Footer
  },
}
</script>
