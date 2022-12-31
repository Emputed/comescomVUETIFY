<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card claclsss="elevation-6 mt-10">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Inicia Sesión</h4>
                                        <h6 class="text-center  grey--text ">Ingresa a tu cuenta para poder
                                            <br>descrubrir muchas de las recetas que tenemos para ti
                                        </h6>

                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">
                                                <v-form v-on:submit.prevent>
                                                    <v-text-field label="Correo electrónico" outlined dense color="blue"
                                                        autocomplete="false" class="mt-16" v-model="correo" />
                                                    <v-text-field label="Contraseña" outlined dense color="blue"
                                                        autocomplete="false" type="password" v-model="contra" />
                                                    <v-row>
                                                        <v-col cols="12" sm="7">
                                                            <v-checkbox label="Recordar este dispositivo" class="mt-n1"
                                                                color="blue"> </v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                    <v-btn color="blue" dark block tile>Iniciar</v-btn>
                                                </v-form>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center ">No tienes cuenta con nosotros?</h3>
                                            <h6 class="text-center">Registrate para poder acceder a COMESCOM<br> y
                                                descrubrir recetas increibles</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark @click="step++">Registrate</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-row>
                                <v-col cols="12" md="6" class="blue rounded-br-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center ">Ya tienes cuenta?</h3>
                                            <h6 class="text-center">Ingresa con tu cuenta <br> y disfruta de la
                                                experiencia que te ofrece COMESCOM</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark @click="step--">Iniciar Sesión</v-btn>
                                        </div>
                                    </div>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Registrate</h4>
                                        <h6 class="text-center  grey--text ">Configuremos tu cuenta para que puedas
                                            ingresar a <br>
                                            COMESCOM</h6>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">
                                                <v-form v-on:submit.prevent="registro">
                                                    <v-text-field label="Nombre Apellido" outlined dense color="blue"
                                                        autocomplete="false" v-model="nombre" />
                                                    <v-text-field label="Correo electrónico" outlined dense color="blue"
                                                        autocomplete="false" type="email" v-model="correo" />
                                                    <v-text-field label="Contraseña" outlined dense color="blue"
                                                        autocomplete="false" type="password" v-model="contra" />

                                                    <v-row>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field label="Edad" outlined dense color="blue"
                                                                autocomplete="false" class="mt-4"
                                                                v-model="edad"></v-text-field>
                                                        </v-col>
                                                        <v-col>
                                                            <v-select :items="gender" label="Sexo" outlined class="mt-4"
                                                                v-model="sexo"></v-select>
                                                        </v-col>
                                                    </v-row>
                                                    <v-btn color="blue" dark block tile>Registrar</v-btn>
                                                </v-form>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  


<script>
import axios from 'axios'

export default {

    name: 'Sesion',
    data: () => ({
        step: 1,
        gender: ["Masculino", "Femenino"],
        //Usuario
        nombre: "",
        correo: "",
        contra: "",
        edad: "",
        sexo: ""
    }),
    props: {
        source: String
    },
    methods: {
        sesion() {
            let json = {
                "correo": this.correo,
                "contra": this.contra
            }
            console.log(json);
        },
        registro() {
            let json = {
                "nombre": this.nombre,
                "correo": this.correo,
                "contra": this.contra,
                "edad": this.edad,
                "sexo": this.sexo
            }
            axios.post('http://localhost:4000/api/users', json).then(data => {
                console.log(data);
            })
        }
    }
}
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>