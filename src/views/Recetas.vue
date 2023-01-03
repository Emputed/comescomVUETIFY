<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <v-container>
                <v-card class="mx-auto my-12" max-width="374" v-for="(recipe, i) in recipes" 
                 :key="i">
                    <v-img height="250" :src=recipe.image></v-img>
                    <v-card-title>{{ recipe.label }}</v-card-title>
                    <v-card-text>{{ recipe.ingredientLines }}</v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>Calorias: {{ recipe.calories }}</v-card-text>
                </v-card>
            </v-container>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
//COMPONENTES
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

//AXIOS
import axios from 'axios';

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
    mounted() {
        let APP_ID = "02837b92";
        let APP_KEY = "241d207d693113e0c9d4b4a784165383";
        let vue = this;
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=pizza`)
            .then(function (response) {
                //console.log(response)
                vue.recipes = response.data.hits;
                console.log(vue.recipes);
            })
    }
}
</script>