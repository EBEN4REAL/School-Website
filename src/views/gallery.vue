<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="blog_posts_container content_width">
            <div class="mb-3 text-center">
                <button class="gallery_button mr-2" @click="changeView('all')" :class="view == 'all' ? ['gallery_button_active'] : null">All</button>
                <button class="gallery_button mr-2" @click="changeView('pictures')" :class="view == 'pictures' ? ['gallery_button_active'] : null">Pictures</button>
                <button class="gallery_button mr-2" @click="changeView('videos')" :class="view == 'videos' ? ['gallery_button_active'] : null">Videos</button>
                <button class="gallery_button mr-2" @click="changeView('bvp')" :class="view == 'bvp' ? ['gallery_button_active'] : null">B.V.P</button>
                <button class="gallery_button mr-2" @click="changeView('sca')" :class="view == 'sca' ? ['gallery_button_active'] : null">S.C.A Yearly</button>
            </div>
            <section class="row" v-if="view == 'all' || view == 'pictures'">
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
            <section class="row" v-if="view == 'all' || view == 'videos'">
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="@/assets/videos/gallery1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="@/assets/videos/gallery2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="@/assets/videos/gallery3.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <section class="row" v-if="view == 'all' || view == 'bvp'">
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
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';

export default {
    name: 'BlogPosts',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Gallery',
            BgUrl,
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