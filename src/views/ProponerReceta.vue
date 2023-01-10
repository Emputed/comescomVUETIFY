<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <h1 align="center">Propuesta de Receta</h1>
            <v-container class="justify-center">
                <p>La receta que vayas a ingresar será validada por los administradores de COMESCOM,
                    por lo que te recomendamos que la informacion que proporciones sea válida
                    para que más usuarios puedan probarla</p>
            </v-container>
            <v-form>
                <v-container>
                    <v-text-field label="Nombre de la receta" v-model="nombreReceta"></v-text-field>
                    <v-textarea 
                     outlined 
                     name="input-7-4" 
                     label="Descripción de la receta"
                     value="Ingrese aquí el procedimiento para preparar la receta"
                     v-model="descripcionReceta"
                     ></v-textarea>
                    
                    <v-btn 
                     class="ma-2"
                     outlined
                     color="green darken-4">Enviar</v-btn>
                </v-container>
            </v-form>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    name: 'ProponerReceta',
    components: {
        Navbar,
        Footer,
    },
    data(){
        return{
            nombreReceta:'',
            descripcionReceta:''
        }
    }
}
</script>