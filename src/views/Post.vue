<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="posts_container content_width">
            <h3 class="section_col_header text-center">{{ formatTitle }}</h3>
            <div class="post_header">
                <div class="post_date">
                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                    <p>{{todaysDate}}</p>
                </div>
                <div class="post_date">
                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                    <p>SOL Academy</p>
                </div>
            </div>
            <div class="mb-3 text-center">
                <button class="gallery_button" :class="[source == 'pictures' ? 'gallery_button_active' : null]" @click="changeSource('pictures')" v-if="videos[$route.query.title].length">Pictures</button>
                <button class="gallery_button" :class="[source == 'videos' ? 'gallery_button_active' : null]" @click="changeSource('videos')" v-if="videos[$route.query.title].length">Videos</button>
            </div>
            <section class="row" v-if="source == 'pictures'">
                <div class="col-md-6" v-for="(image, i) in images[$route.query.title]" :key="i">
                    <div class="post_card">
                        <img :src="require('@/assets/blogs/' + $route.query.title + '/images/' + image)"  />
                    </div>
                </div>
            </section>
            <section class="row" v-if="source == 'videos'">
                <div class="col-md-6" v-for="(video, i) in videos[$route.query.title]" :key="i">
                    <video :key="video" controls class="post_image">
                        <source :src="require('@/assets/blogs/' + $route.query.title + '/videos/' + video)" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
        <Subscribe />
        <!-- <section class="content_width mt-5">
            <h4>Similar posts to this one</h4>
            <div class="row justify-content-between mt-4">
                <div class="col-md-4">
                    <div class="blog_post">
                        <img src="@/assets/img/blog-posts-first.png">
                        <div class="post_content_holder">
                            <div class="post_header">
                                <div class="post_date">
                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                                    <p>{{todaysDate}}</p>
                                </div>
                                <div class="post_date">
                                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                                    <p>SOL Academy</p>
                                </div>
                            </div>
                            <h4>Blackpool Trip</h4>
                            <p class="section_col_text">Book unique camping experiences on over 300,000 campsites.</p>
                            <router-link :to="{ name: 'post' }" class="text-decoration-none">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import Subscribe from '@/components/Subscribe.vue';
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';


export default {
    name: 'Post',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Post',
            postTitle: 'School Update',
            BgUrl,
            source: 'pictures',
            images: {
                'tree-top': ['first.jpg', 'second.jpg', 'third.jpg', 'fourth.jpg', 'fifth.jpg'],
                'sports-day': ['first.jpg', 'second.jpg', 'third.jpg', 'fourth.jpg', 'fifth.jpg'],
                'sol-park': ['first.jpg', 'second.jpg', 'third.jpg', 'fourth.jpg'],
                'sol-tennis': ['first.jpg', 'second.jpg', 'third.jpg', 'fourth.jpg'],
                'museum': ['first.jpg', 'second.jpg', 'third.jpg', 'fourth.jpg'],
                'legoland': ['first.jpg', 'second.jpg'],
            },
            videos: {
                'tree-top': ['first.mp4'],
                'sports-day': [],
                'sol-park': [],
                'sol-tennis': [],
                'museum': ['first.mp4'],
                'legoland': [],
            }
        }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        },
        formatTitle() {
            const arr = this.$route.query.title.split('-')
            const formatted = arr.map(cur => {
                if (cur == 'sol') {
                    return cur.toUpperCase()
                }
                return `${cur[0].toUpperCase()}${cur.slice(1)}`
            }).join(' ')
            return formatted
        }
    },
    methods: {
        changeSource(src) {
            this.source = src
        }
    }
}
</script>