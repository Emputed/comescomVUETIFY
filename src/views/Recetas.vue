<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <v-btn class="ma-2" outlined color="indigo" v-on:click="getRecipe">
                OBTEN RECETAS
            </v-btn>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
//COMPONENTES
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

//AXIOS

export default {
    name: 'Recetas',

    data() {
        return {
            recipes: []
        }
    },

    components: {
        Navbar,
        Footer,
    },

    methods: {
        getRecipe: async ()=> {
            let APP_ID = "02837b92";
            let APP_KEY = "241d207d693113e0c9d4b4a784165383";

            let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=pizza`);
            let data = await response.json();
            console.log(data);
        }
    }
}
</script>