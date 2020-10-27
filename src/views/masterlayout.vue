<template>
    <div class="">
        <div class="bg_wrapper"  :style="{
            backgroundImage: `linear-gradient(rgb(8, 129, 62, 0.8), rgb(8, 129, 62, 0.8)), url(${bg_URL})`,
          }">
            <Header />
            <div class="header__banner">
                <h3 class="text-white">{{title.toUpperCase()}}</h3>
            </div>
        </div>
       
        <slot>
            <router-view />
        </slot>
        <Footer />
    </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from '@/components/Footer';

export default {
    components: {
        Header,
        Footer
    },
    props: ['title', 'bg_URL']
}
</script>