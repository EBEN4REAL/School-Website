<template>
    <div class="">
        <div class="bg_wrapper">
             <Header />

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
    }
}
</script>