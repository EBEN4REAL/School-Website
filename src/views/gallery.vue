<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="blog_posts_container content_width">
            <div class="mb-3 text-center">
                <button class="gallery_button  mr-2" @click="changeView('all')" :class="view == 'all' ? ['gallery_button_active'] : null">All</button>
                <button class="gallery_button " @click="changeView('pictures')" :class="view == 'pictures' ? ['gallery_button_active'] : null">Pictures</button>
                <button class="gallery_button" @click="changeView('videos')" :class="view == 'videos' ? ['gallery_button_active'] : null">Videos</button>
            </div>
            <section class="row" v-show="view == 'all' || view == 'pictures'">
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_1.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_2.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_3.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_4.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_5.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/sport_1.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/sport_2.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/sport_3.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/sport_3.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/sport_4.jpg"  />
                    </div>
                </div>
            </section>
            <section class="row" v-show="view == 'all' || view == 'videos'">
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="@/assets/img/ttop_1.jpg"  />
                    </div>
                </div>
            </section>
        </div>
        <Subscribe />
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import Subscribe from '@/components/Subscribe.vue';
import bg_URL from '@/assets/img/The-matriculants.png';

export default {
    name: 'BlogPosts',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Gallery',
            bg_URL,
            view: 'all'
        }
    },
    methods: {
        getImage(path) {
            return require(path)
        },
        changeView(view) {
            this.view = view
        }
    }
}
</script>