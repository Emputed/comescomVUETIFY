<template>
  <v-app>
    <v-main>
      <hello-world />
      <Banner></Banner>

    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>

import Banner from '@/components/Banner'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Banner,
    Footer
  },
}
</script>
