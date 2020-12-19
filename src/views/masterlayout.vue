<template>
    <div class="">
        <div class="bg_wrapper"
            :style="[{
                background: `linear-gradient(rgb(8, 129, 62, 0.5), rgb(8, 129, 62, 0.5)), url(${bgImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize:  'cover'
            }]">
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
    data() {
        return {
            bgImg: ''
        }
    },
    props: ['title', 'BgUrl'],
    mounted() {
        this.bgImg = this.BgUrl
    }
}
</script>