<template>
    <v-app>
        <Navbar></Navbar>
        <v-content>
            <v-container>
                <v-checkbox 
                 v-for="verdura in verduras" :key="verdura.id" 
                 :label="verdura.name" 
                 color="success">
                </v-checkbox>
            </v-container>

        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    name: 'Ingredientes',
    components: {
        Navbar,
        Footer
    },
    data: () => ({
        verduras: [
            {id:'0', name: 'ACEITUNAS NEGRAS', calorias: '349' },
            {id:'1', name: 'ACEITUNAS VERDES', calorias: '132' },
            {id:'2', name: 'ACELGAS', calorias: '33' },
            {id:'3', name: 'APIO', calorias: '20' },
            {id:'4', name: 'BRÓCOLI', calorias: '31' },
            {id:'5', name: 'CALABAZA', calorias: '24' },
            {id:'6', name: 'CEBOLLA', calorias: '47' },
            {id:'7', name: 'CHAMPIÑÓN', calorias: '28' },
            {id:'8', name: 'COL', calorias: '28' },
            {id:'9', name: 'COLIFLOR', calorias: '30' },
            {id:'10', name: 'ESPÁRRAGOS', calorias: '26' },
            {id:'11', name: 'ESPINACA', calorias: '32' },
            {id:'12', name: 'LECHUGA', calorias: '31' },
            {id:'13', name: 'LIMÓN', calorias: '39' },
           // {id:'14', name: 'PIMIENTO', calorias: '22' },
            {id:'15', name: 'RÁBANOS', calorias: '20' },
           // {id:'16', name: 'TOMATES', calorias: '22' },
            {id:'17', name: 'ZANAHORIA', calorias: '42' },
            
        ],
        frutas:[
            {id:'18', name:'ARÁNDANOS', calorias:'41'},
            {id:'19', name:'AGUACATE', calorias:'160'},
            {id:'20', name:'BERENJENA', calorias:'29'},
            {id:'21', name:'CEREZA', calorias:'47'},
            {id:'22', name:'CIRUELA', calorias:'44'},
            {id:'23', name:'FRAMBUESA', calorias:'40'},
            {id:'24', name:'FRESAS', calorias:'36'},
            {id:'25', name:'GRANADA', calorias:'65'},
            {id:'26', name:'HIGOS', calorias:'80'},
            {id:'27', name:'KIWI', calorias:'51'},
            {id:'28', name:'MANDARINA', calorias:'40'},
            {id:'29', name:'MANGO', calorias:'57'},
            {id:'30', name:'MANZANA', calorias:'52'},
            {id:'31', name:'MELÓN', calorias:'31'},
            {id:'32', name:'MORA', calorias:'37'},
            {id:'33', name:'NARANJA', calorias:'44'},
            {id:'34', name:'PAPAYA', calorias:'45'},
            {id:'35', name:'PEPINO', calorias:'12'},
            {id:'36', name:'PERA', calorias:'61'},
            {id:'37', name:'PIMIENTO', calorias:'22'},
            {id:'38', name:'PIÑA', calorias:'51'},
        ]
    })
}
</script>

<style>

</style>