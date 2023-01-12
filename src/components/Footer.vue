<template>
    <v-footer 
     dark padless>
        <v-card 
         flat tile class="light-green darken-1 white--text text-center"
         width="100%">
            <v-card-text>
                <v-btn href="https://www.facebook.com/profile.php?id=100089054454736" target="blank" class="mx-4 white--text" icon>
                    <v-icon size="24px">
                        mdi-facebook
                    </v-icon>
                </v-btn>
                <v-btn  class="mx-4 white--text" icon>
                    <v-icon size="24px">
                        mdi-twitter
                    </v-icon>
                </v-btn>
                <v-btn href="https://instagram.com/comescom__?igshid=YmMyMTA2M2Y=" target="blank" class="mx-4 white--text" icon>
                    <v-icon size="24px">
                        mdi-instagram
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                <v-container>
                    COMESCOM tiene la finalidad de ayudar a las personas que tienen dificultades al momento de hacer alguna de sus comidas, bebidas o colaciones de su dieta, muchas veces porque desconocen cómo preparar algunos platos y otras porque no tienen una idea clara de qué pueden preparar con los alimentos, ingredientes que están en su refrigerador o la despensa.
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>COMESCOM</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
  
<script>
export default {
    name: 'Footer',
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
        ],
    }),
}
</script>