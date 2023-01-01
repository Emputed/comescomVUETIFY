<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <ToolBar></ToolBar>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas accusamus sequi inventore quos aut fugiat voluptatibus voluptas mollitia laboriosam delectus neque vel iure blanditiis fugit, tenetur voluptates. Doloribus, dolores aliquid.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident quisquam nemo magni laudantium itaque amet veniam saepe delectus autem. Est, ab. Adipisci, debitis eligendi impedit eaque odit minus aperiam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi magnam ducimus quos voluptate, omnis similique modi, provident perferendis odio, maxime eius unde voluptatem? Sequi laudantium velit esse alias saepe!
                <br><br><br>
                <br><br><br>
                <br>
                <br><br><br>
                <br><br><br>
                <br><br><br>
                <br><br><br>
                <br><br><br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam exercitationem quasi hic soluta eius excepturi iusto autem, tempore quis dolor accusamus, veniam dolorum mollitia, eaque quia sint illo facilis!
            </div>
        </v-main>

        <Footer></Footer>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import ToolBar from '@/components/ToolBar';
import Footer from '@/components/Footer';
export default{
    name:'Test',
    components:{
        Navbar,
        ToolBar,
        Footer
    }
}
</script>