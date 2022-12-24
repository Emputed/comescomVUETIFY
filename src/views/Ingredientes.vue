<template>
    <v-app>
        <Navbar></Navbar>
        <v-content>
            <v-checkbox
              v-for="(verdura, index) in verduras" :key="index"
              label= ""
              color="success"
            ></v-checkbox>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';

    export default{
        name: 'Ingredientes',
        components:{
            Navbar,
            Footer
        },
        data: () => ({
            verduras:[
                {name: 'ACEITUNAS NEGRAS', calorias: '349'},
                {name: 'ACEITUNAS VERDES', calorias: '132'},
                {name: 'ACELGAS', calorias: '33'},
                {name: 'APIO', calorias: '20'},
                {name: 'BRÓCOLI', calorias: '31'},
            ]
        })
    }
</script>

<style></style>