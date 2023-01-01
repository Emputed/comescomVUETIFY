<template>

    <v-card>
        <v-app-bar bottom>
            <v-btn to="/ingredientes" elevation="2">Ingredientes</v-btn>
            <v-btn elevation="2">Busqueda de recetas</v-btn>
            <v-btn to="/proponerReceta" elevation="2">Proponer receta</v-btn>
        </v-app-bar>
    </v-card>

</template>

<script>
export default {
    name: 'ToolBar'
}
</script>