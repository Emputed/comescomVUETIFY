<template>
    <v-app>
        <Navbar></Navbar>
        <div>
            <v-container>
                <v-checkbox v-for="verdura in verduras" :key="verdura.id" 
                 :label="verdura.name" 
                 color="success">
                </v-checkbox>
            </v-container>

        </div>
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
            { id: '0', name: 'ACEITUNAS NEGRAS', calorias: '349' },
            { id: '1', name: 'ACEITUNAS VERDES', calorias: '132' },
            { id: '2', name: 'ACELGAS', calorias: '33' },
            { id: '3', name: 'APIO', calorias: '20' },
            { id: '4', name: 'BRÓCOLI', calorias: '31' },
            { id: '5', name: 'CALABAZA', calorias: '24' },
            { id: '6', name: 'CEBOLLA', calorias: '47' },
            { id: '7', name: 'CHAMPIÑÓN', calorias: '28' },
            { id: '8', name: 'COL', calorias: '28' },
            { id: '9', name: 'COLIFLOR', calorias: '30' },
            { id: '10', name: 'ESPÁRRAGOS', calorias: '26' },
            { id: '11', name: 'ESPINACA', calorias: '32' },
            { id: '12', name: 'LECHUGA', calorias: '31' },
            { id: '13', name: 'LIMÓN', calorias: '39' },
            // {id:'14', name: 'PIMIENTO', calorias: '22' },
            { id: '15', name: 'RÁBANOS', calorias: '20' },
            // {id:'16', name: 'TOMATES', calorias: '22' },
            { id: '17', name: 'ZANAHORIA', calorias: '42' },

        ],
        frutas: [
            { id: '18', name: 'ARÁNDANOS', calorias: '41' },
            { id: '19', name: 'AGUACATE', calorias: '160' },
            { id: '20', name: 'BERENJENA', calorias: '29' },
            { id: '21', name: 'CEREZA', calorias: '47' },
            { id: '22', name: 'CIRUELA', calorias: '44' },
            { id: '23', name: 'FRAMBUESA', calorias: '40' },
            { id: '24', name: 'FRESAS', calorias: '36' },
            { id: '25', name: 'GRANADA', calorias: '65' },
            { id: '26', name: 'HIGOS', calorias: '80' },
            { id: '27', name: 'KIWI', calorias: '51' },
            { id: '28', name: 'MANDARINA', calorias: '40' },
            { id: '29', name: 'MANGO', calorias: '57' },
            { id: '30', name: 'MANZANA', calorias: '52' },
            { id: '31', name: 'MELÓN', calorias: '31' },
            { id: '32', name: 'MORA', calorias: '37' },
            { id: '33', name: 'NARANJA', calorias: '44' },
            { id: '34', name: 'PAPAYA', calorias: '45' },
            { id: '35', name: 'PEPINO', calorias: '12' },
            { id: '36', name: 'PERA', calorias: '61' },
            { id: '37', name: 'PIMIENTO', calorias: '22' },
            { id: '38', name: 'PIÑA', calorias: '51' },
            { id: '39', name: 'PLÁTANO', calorias: '90' },
            { id: '40', name: 'TOMATES', calorias: '22' },
            { id: '41', name: 'UVA', calorias: '81' },
        ],
        carnes: [
            { id: '42', name: 'ATÚN', calorias: '225' },
            { id: '43', name: 'BACALAO', calorias: '74' },
            { id: '44', name: 'CALAMAR', calorias: '82' },
            { id: '45', name: 'CANGREJO', calorias: '85' },
            { id: '46', name: 'CAVIAR', calorias: '233' },
            { id: '47', name: 'CHICHARRÓN', calorias: '601' },
            { id: '48', name: 'CHORIZO', calorias: '468' },
            { id: '49', name: 'CHULETA CERDO', calorias: '330' },
            { id: '50', name: 'CHULETA TERNERA', calorias: '168' },
            { id: '51', name: 'CIERVO', calorias: '120' },
            { id: '52', name: 'CODORNIZ Y PERDIZ', calorias: '114' },
            { id: '53', name: 'CONEJO', calorias: '162' },
            { id: '54', name: 'CORDERO LECHÓN', calorias: '105' },
            { id: '55', name: 'CORDERO PIERNA', calorias: '98' },
            { id: '56', name: 'COSTILLAS CORDERO', calorias: '215' },
            { id: '57', name: 'GALLINA', calorias: '369' },
            { id: '58', name: 'GALLO', calorias: '73' },
            { id: '59', name: 'HAMBURGUESA', calorias: '230' },
            { id: '60', name: 'HIGADO CERDO', calorias: '153' },
            { id: '61', name: 'HIGADO CORDERO', calorias: '132' },
            { id: '62', name: 'HIGADO TERNERA', calorias: '140' },
            { id: '63', name: 'HIGADO VACUNO', calorias: '129' },
            { id: '64', name: 'HUEVO', calorias: '147' },
            { id: '65', name: 'JAMÓN', calorias: '215' },
            { id: '66', name: 'JAMÓN YORK', calorias: '289' },
            { id: '67', name: 'LANGOSTA', calorias: '67' },
            { id: '68', name: 'LANGOSTINO', calorias: '96' },
            { id: '69', name: 'LENGUA DE VACA', calorias: '191' },
            { id: '70', name: 'LENGUA DE TERNERA', calorias: '207' },
            { id: '71', name: 'LOMO CERDO', calorias: '208' },
            { id: '72', name: 'LOMO EMBUCHADO', calorias: '380' },
            { id: '73', name: 'MORTADELA', calorias: '265' },
            { id: '74', name: 'MUSLO PAVO', calorias: '186' },
            { id: '75', name: 'PATO', calorias: '200' },
            { id: '76', name: 'PECHUGA PAVO', calorias: '134' },
            { id: '77', name: 'PEZ ESPADA', calorias: '109' },
            { id: '78', name: 'PIES DE CERDO', calorias: '290' },
            { id: '79', name: 'POLLO', calorias: '134' },
            { id: '80', name: 'HÍGADO POLLO', calorias: '129' },
            { id: '81', name: 'MUSLO POLLO', calorias: '186' },
            { id: '82', name: 'PULPO', calorias: '57' },
            { id: '83', name: 'SALAMI', calorias: '325' },
            { id: '84', name: 'SALCHICHA FRESCA', calorias: '326' },
            { id: '85', name: 'SALCHICHÓN', calorias: '294' },
            { id: '86', name: 'SALMÓN', calorias: '172' },
            { id: '87', name: 'SALMÓN AHUMADO', calorias: '154' },
            { id: '88', name: 'TERNERA', calorias: '181' },
            { id: '89', name: 'TOCINO', calorias: '665' },
        ],
        leche: [
            { id: '90', name: 'HELADOS LÁCTEOS', calorias: '167' },
            { id: '91', name: 'LECHE CONDENSADA', calorias: '200' },
            { id: '92', name: 'LECHE DE ALMENDRAS', calorias: '335' },
            { id: '93', name: 'LECHE DE CABRA', calorias: '72' },
            { id: '94', name: 'LECHE DE OVEJA', calorias: '96' },
            { id: '95', name: 'LECHE DESCREMADA', calorias: '36' },
            { id: '96', name: 'LECHE EN POLVO DESCREMADA', calorias: '373' },
            { id: '97', name: 'LECHE EN POLVO ENTERA', calorias: '500' },
            { id: '98', name: 'LECHE ENTERA', calorias: '68' },
            { id: '99', name: 'LECHE SEMI DESCREMADA', calorias: '49' },
            { id: '100', name: 'NATA O CREMA DE LECHE', calorias: '298' },
            { id: '101', name: 'QUESO BLANCO DESNATADO', calorias: '' },
            { id: '102', name: 'QUESO BRIE', calorias: '263' },
            { id: '103', name: 'QUESO CAMMEMBERT', calorias: '312' },
            { id: '104', name: 'QUESO CHEDDAR', calorias: '381' },
            { id: '105', name: 'QUESO CREMA', calorias: '245' },
            { id: '106', name: 'QUESO DE BOLA', calorias: '349' },
            { id: '107', name: 'QUESO DE BURGOS', calorias: '174' },
            { id: '108', name: 'QUESO DE OVEJA', calorias: '245' },
            { id: '109', name: 'QUESO EDAM', calorias: '306' },
            { id: '110', name: 'QUESO EMMENTAL', calorias: '415' },
            { id: '111', name: 'QUESO FUNDIDO UNTABLE', calorias: '285' },
            { id: '112', name: 'QUESO GRUYERE', calorias: '391' },
            { id: '113', name: 'QUESO MANCHEGO', calorias: '376' },
            { id: '114', name: 'QUESO MOZZARELLA', calorias: '245' },
            { id: '115', name: 'QUESO PARMESANO', calorias: '393' },
            { id: '116', name: 'QUESO RICOTA', calorias: '400' },
            { id: '117', name: 'QUESO ROQUEFORT', calorias: '405' },
            { id: '118', name: 'YOGUR DESNATADO', calorias: '45' },
            { id: '119', name: 'YOGUR DESNATADO CON FRUTAS', calorias: '82' },
            { id: '120', name: 'YOGUR ENRIQUECIDO CON NATA', calorias: '65' },
            { id: '121', name: 'YOGUR NATURAL', calorias: '62' },
            { id: '122', name: 'YOGUR NATURAL CON FRUTA', calorias: '100' },
        ],
        harinas:[
            { id: '123', name: 'ARROZ BLANCO', calorias: '354' },
            { id: '124', name: 'ARROZ INTEGRAL', calorias: '350' },
            { id: '125', name: 'AVENA', calorias: '367' },
            { id: '126', name: 'CEREALES CON CHOCOLATE', calorias: '358' },
            { id: '127', name: 'CEREALES CON MIEL', calorias: '386' },
            { id: '128', name: 'GALLETAS DE CHOCOLATE', calorias: '524' },
            { id: '129', name: 'GALLETAS DE MANTEQUILLA', calorias: '397' },
            { id: '130', name: 'GALLETAS SALADAS', calorias: '464' },
            { id: '131', name: 'HARINA DE MAÍZ', calorias: '349' },
            { id: '132', name: 'HARINA DE TRIGO INTEGRAL', calorias: '340' },
            { id: '133', name: 'HARINA DE TRIGO REFINADA', calorias: '353' },
            { id: '134', name: 'LENTEJAS', calorias: '336' },
            { id: '135', name: 'MANÍ', calorias: '560' },
            { id: '136', name: 'PAN DE CENTENO', calorias: '241' },
            { id: '137', name: 'PAN DE TRIGO BLANCO', calorias: '225' },
            { id: '138', name: 'PAN DE TRIGO INTEGRAL', calorias: '239' },
            { id: '139', name: 'PAN DE TRIGO MOLDE BLANCO', calorias: '233' },
            { id: '140', name: 'PAN DE TRIGO MOLDE INTEGRAL', calorias: '216' },
            { id: '141', name: 'PASTA DE HOJALDRE COCIDA', calorias: '565' },
            { id: '142', name: 'PASTA DE SÉMOLA', calorias: '361' },
        ],
        grasas:[
            { id: '143', name: 'ACEITE DE GIRASOL', calorias: '900' },
            { id: '144', name: 'ACEITE DE OLIVA', calorias: '900' },
            { id: '145', name: 'MANTECA', calorias: '670' },
            { id: '146', name: 'MANTEQUILLA', calorias: '752' },
            { id: '147', name: 'MAYONESA', calorias: '718' },
            { id: '148', name: 'MAYONESA LIGHT', calorias: '374' },

        ]
    })
}
</script>

<style>

</style>