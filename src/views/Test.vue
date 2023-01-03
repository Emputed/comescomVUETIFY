<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <ToolBar></ToolBar>
            <div>
                <Cards></Cards>
            </div>
        </v-main>

        <Footer></Footer>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import ToolBar from '@/components/ToolBar';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';

export default{
    name:'Test',
    components:{
        Navbar,
        ToolBar,
        Footer,
        Cards
    }
}
</script>