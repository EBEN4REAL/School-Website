<template>
    <div class="">
        <div class="bg_wrapper">
            <Header />
            <div class="header__banner">
                <h3 class="text-white">{{title}}</h3>
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
    props: ['title', 'activeNav']
}
</script>