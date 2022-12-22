<template>
    <v-app>
        <v-row>
            <v-col class="text-center">
                <h1 class="font-weight-black">ESCOMER</h1>

                <v-form class="justify-center">

                    <v-text-field label="Nombre" hide-details="auto"></v-text-field>

                    <v-text-field label="Email" hide-details="auto"></v-text-field>

                    <v-btn depressed color="primary">
                        Enviar
                    </v-btn>
                </v-form>

            </v-col>
            <v-col class="text-center">
                <h3>Aqui va a ir una imagen</h3>
            </v-col>
        </v-row>
    </v-app>
</template>


<script>
export default {
    name: 'Sesion',
    components: {

    }
}
</script>

<style>

</style>