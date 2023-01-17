<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
            <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2 container light-green darken-1 rounded-lg" align="center" justify="center">
                    <strong class="white--text">{{ slide.txt }}</strong>
                </div>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: 'Banner',
    data() {
        return {
            slides: [
                {
                    txt: 'COMESCOM cuenta con variedad de recetas para ti',
                    src: '../img/1.jpg',
                },
                {
                    txt: 'Solo necesitas decirnos con lo que cuentas a tu alcance',
                    src: '../img/2.jpg',
                },
                {
                    txt: 'Nosotros te mostraremos lo que puedes preparar con dichos ingredientes',
                    src: '../img/3.jpg', 
                },
                {
                    txt: 'Tomando en cuenta el gasto calorico de tu preferencia',
                    src: '../img/4.jpg',
                },
                {
                    txt: 'Puedes decirnos si tienes alguna propuesta de receta que podamos agregar a la página, para que más personas puedan prepararla',
                    src: '../img/5.jpg',
                }
            ]
        }
    }
}
</script>
<style>

</style>
