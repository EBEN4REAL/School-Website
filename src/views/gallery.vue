<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="blog_posts_container content_width">
            <div class="mb-3">
                <button class="gallery_button gallery_button_active mr-2">All</button>
                <!-- <button class="gallery_button">Tree Top</button>
                <button class="gallery_button">Sports Day</button>
                <button class="gallery_button">Sol Park</button>
                <button class="gallery_button">TSol Tennis</button>
                <button class="gallery_button">Museaum</button> -->
            </div>
            <section class="row">
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
            gallery: [
                {
                    cat: 'treeTop',
                    path: './assets/img/ttop_1.jpg'
                },
                {
                    cat: 'treeTop',
                    path: '@/assets/img/ttop_2.jpg'
                },
                {
                    cat: 'treeTop',
                    path: '@/assets/img/ttop_3.jpg'
                },
                {
                    cat: 'treeTop',
                    path: '@/assets/img/ttop_4.jpg'
                },
                {
                    cat: 'treeTop',
                    path: '@/assets/img/ttop_5.jpg'
                },
                 {
                    cat: 'sports',
                    path: './assets/img/sport_1.jpg'
                },
                {
                    cat: 'sports',
                    path: '@/assets/img/sport_2.jpg'
                },
                {
                    cat: 'sports',
                    path: '@/assets/img/sport_3.jpg'
                },
                {
                    cat: 'sports',
                    path: '@/assets/img/sport_4.jpg'
                },
                {
                    cat: 'sports',
                    path: '@/assets/img/sport_5.jpg'
                }

                
            ]
        }
    },
    methods: {
        getImage(path) {
            return require(path)
        }
    }
}
</script>