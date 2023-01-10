<template>
    <v-card>
        <v-app-bar >
            <v-btn class="ma-2" outlined color="green darken-4" to="/ingredientes" elevation="2">Ingredientes</v-btn>
            <v-btn class="ma-2" outlined color="green darken-4" to="/recetas" elevation="2">Busqueda de recetas</v-btn>
            <v-btn class="ma-2" outlined color="green darken-4" to="/proponerReceta" elevation="2">Proponer receta</v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    name: 'ToolBar'
}
</script>