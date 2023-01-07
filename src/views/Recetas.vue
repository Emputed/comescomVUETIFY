<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
<<<<<<< HEAD
            <v-container>
                <v-text-field v-model="buscar">Buscar</v-text-field>
            </v-container>
=======
        <v-container>
            <v-text-field label="Buscar" v-model="search"></v-text-field>
            <v-btn v-on:click="busqueda(search)">Buscar</v-btn>
        </v-container>
>>>>>>> 2d0831c4e58888fdb4ed396ed7a98c7a9fe0ad55
            <v-row>
                <Cards v-for="(receta,i) in recetas" :key="i" 
                 :name="receta.nombre" 
                 :img="receta.img"
                 :descr="receta.descripcion"
                :cal="receta.calorias">
                </Cards>
            </v-row>
            
            <!--<v-row>
                <v-card class="mx-auto my-12" max-width="374" v-for="(recipe, i) in recipes" :key="i">
                    <v-img height="250" :src=recipe.recipe.image></v-img>
                    <v-card-title>{{ recipe.recipe.label }}</v-card-title>
                    <v-card-text>{{ recipe.recipe.ingredientLines }}</v-card-text>
                    <v-card-text>
                        <ul id="example-1">
                            <li v-for="item in  recipe.recipe.ingredientLines">
                                {{ item }}
                            </li>
                        </ul>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>Calorias: {{ parseInt(recipe.recipe.calories) }}</v-card-text>
                </v-card>
            </v-row>-->
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
//COMPONENTES
import Navbar from '@/components/Navbar';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';

//AXIOS
import axios from 'axios';

export default {
    name: 'Recetas',

    data() {
        return {
            search:"",
            recipes: [],
            buscar:"",
            recetas:[
                {
                    nombre: "Enchiladas verdes",
                    descripcion:"500g de pechuga de pollo, 1 cebolla blanca, 2 chiles cerranos, 8 tomates verdes, 1 diente de ajo, 1 rama de cilantro, 100gr queso panela, tortillas de maiz, aceite vegetal, sal al gusto, pimienta negra molida al gusto, crema al gusto",
                    calorias: 1428,
                    img: "../../img/enchiladas.jpg"
                },
                {
                    nombre: "Molletes mexicanos",
                    descripcion: "1/2 kg de Frijoles refritos (o- una lata normal), 6 bolillos partidos por la mitad (o-1 barra de pan frances), 350 gramos de queso tipo chihuahua o suizo rayado, salsa pico de gallo que lleva: 2 chiles serranos, 1/2 cebolla mediana, 4 jitomates romana, 1 limon, 1 cucharadita de aceite de oliva, 5 ramitas de cilantro, 1 pizca de sal",
                    calorias: 780,
                    img: "../../img/molletes.jpg"
                },
                {
                    nombre: "Ensalada Cesar",
                    descripcion: "100 g. de pechuga de pollo, Picatostes de pan frito, 1/2 lechuga (mejor romana), 50 g. de aceitunas negras, 1 cucharada de limón o 1 cucharada de vinagre, 6 anchoas, 1 diente de ajo, 125 ml. de aceite de oliva virgen extra, 2 yemas de huevo, 1/2 cucharada de mostaza, 50 g. de queso italiano curado Grana Padano, Sal y pimienta blanca o negra recién molida (al gusto)",
                    calorias: 582,
                    img: "../../img/ensaladaCesar.jpg"
                },
                {
                    nombre: "Albondigas en salsa",
                    descripcion: "350 g de Carne picada de ternera, 300 g de Carne picada de cerdo, 2 dientes de Ajo, 3 ramas de Perejil fresco, 1 Huevo, 1 cucharada de Leche, 200 ml de Vino blanco + 1 cucharada, 1 cucharadita de Pan rallado, sal, Aceite de oliva virgen extra, 500 g de Tomate frito, 800 ml de Caldo de pollo",
                    calorias: 1185,
                    img: "../../img/albondigas.jpg"
                },
                {
                    nombre: "Frijoles puercos",
                    descripcion: "1 1/2 litro de frijol licuado, 1/4 de kilo de chorizo ranchero, 50 gramos de manteca de puerco, 1/4 de queso manchego o chihuahua en cubos, Aceituna s picadas al gusto, Chile s en escabeche picados o enteros, al gusto, Sal al gusto",
                    calorias: 660,
                    img: "../../img/frijoles.jpg"
                },
                {
                    nombre: "Pozole rojo",
                    descripcion: "5 Litros de agua, 1/2 Cebolla cortada a la mitad, 4 Dientes de ajo, 3 Cucharadas de sal, 1 1/2 Kilos de maíz pozolero, 1/2 Kilo de costilla de cerdo cortadas en trozos, 1 Kilo de pulpa de cerdo cortada en trozos, 5 Hojas de laurel, 14 Chiles guajillo sin semillas y remojados en agua caliente, 2 Chiles ancho sin semillas y remojados en agua caliente, 1/4 De pieza de cebolla cortada en trozos, 2 Dientes de ajo, 1 Cucharadita de comino, 1 Cucharadita de pimienta negra molida, Orégano seco, Lechuga romana fileteada, Rábanos cortados en rodajas",
                    calorias: 300,
                    img: "../../img/pozole.jpg"
                },
                {
                    nombre: "Chilaquiles verdes",
                    descripcion: "18 tortillas de maíz de aprox. 13 cm de diámetro, 1 kg de tomates verdes pelados y lavados, 1/2 cebolla blanca grande, 1 ó 2 chiles serranos o jalapeños, 1 diente de ajo, 2 ó 3 ramitas de cilantro, 2 tazas de caldo de pollo o de verduras, 3 cucharadas de aceite vegetal más el necesario para untar las tortillas, 1/2 taza de cebolla en rebanadas delgadas, 1/4 de taza de cilantro picado, 1/2 taza de queso de fresco o cotija rallado, 1/4 de taza de crema mexicana",
                    calorias: 443,
                    img: "../../img/chilaquiles.jpg"
                },
                {
                    nombre: "Atún a la mexicana",
                    descripcion: "2 cucharadas soperas de aceite de oliva, 1/2 cebolla blanca picada finamente, 3 jitomates (tomates) roma picados finamente, 1/4 cucharadita de hierbas italianas secas o sazonador sin sal, 1/4 cucharadita de chile chipotle en polvo, ó chile chipotle en adobo, 2 papas medianas cocidas y picadas en cuadritos, 4 zanahorias medianas cocidas y picadas en cuadritos,2 latas de atún, sin el líquido",
                    calorias: 110,
                    img: "../../img/atun.jpg"
                }

            ]
        }
    },

    components: {
        Navbar,
        Cards,
        Footer,
    },
<<<<<<< HEAD
    mounted() {
        /*let APP_ID = "02837b92";
=======
    /*mounted() {
        let APP_ID = "02837b92";
>>>>>>> 2d0831c4e58888fdb4ed396ed7a98c7a9fe0ad55
        let APP_KEY = "241d207d693113e0c9d4b4a784165383";
        let vue = this;
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=salad`)
            .then(function (response) {
                vue.recipes = response.data.hits;
                console.log(vue.recipes);
            })
    },*/
    methods: {
        busqueda: (search) => {
            console.log(search);
            let APP_ID = "02837b92";
        let APP_KEY = "241d207d693113e0c9d4b4a784165383";
        let vue = this;
        console.log(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}`);
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}`)
            .then(function (response) {
                vue.recipes = response.data.hits;
                //console.log(vue.recipes);
<<<<<<< HEAD
            })*/
    },
    methods: {
=======
            })
        }
>>>>>>> 2d0831c4e58888fdb4ed396ed7a98c7a9fe0ad55
    }
}
</script>