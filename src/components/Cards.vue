<template>
    <v-card
     class="mx-auto my-12"
     max-width="374">
        <v-img 
         height = "250" 
         :src = img ></v-img>
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>{{ descr }}</v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>Calorias: {{ cal }}</v-card-text>
        
    </v-card>
</template>
<script>
export default {
    name: 'Cards',
    props:{
        name : String,
        img : String,
        descr: String,
        cal: Number
    }
}
</script>
