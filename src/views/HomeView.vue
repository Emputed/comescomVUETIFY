<template>
  <v-app>
    <v-main>
      <hello-world />
      <Banner texto="COMESCOM es un sistema que busca ayudar a las personas con poca experiencia en la cocina
                    y que necesita realizar algún platillo con lo que tiene a su alcance. COMESCOM te recomendará
                    recetas acorde a lo que tengas en tu cocina, tienes la posibilidad de elegir si te recomienda
                    platillos con muchas o pocas calorías." imagen="Aqui va la imagen"></Banner>

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
