<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="pace_container content_width">
            <div :style="[{
                backgroundImage: `url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }]" class="post_image">
                
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';


export default {
    name: 'Ofsted',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Ofsted',
            BgUrl
        }
    }
}
</script>