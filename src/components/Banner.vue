<template>
    <div>
        <v-row>
            <v-col>
                <section >{{ texto }}</section>
            </v-col>
            
            <v-col>
                <section>{{ imagen }}</section>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Banner',
        props:{
            texto: String,
            imagen: String
        }
    }
</script>
<style>
    
</style>
