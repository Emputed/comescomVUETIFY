<template>
    <v-app-bar app color="light-green darken-1" dark>
        <div class="d-flex align-center">
            <v-img alt="COMESCOM logo" class="shrink mr-2" contain
                src="../../public/img/COMESCOM_logo-removebg-preview.png" transition="scale-transition"
                width="40" />
            <v-toolbar-title ><router-link to="/">COMESCOM</router-link></v-toolbar-title>
        </div>

        <v-spacer></v-spacer>
        <!--<v-btn outlined to="/sesion">
            Ingreso
        </v-btn>-->
    </v-app-bar>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "Navbar",
    components: { RouterLink }
}
</script>
<style>

</style>