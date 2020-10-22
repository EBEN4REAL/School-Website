<template>
    <MasterLayout>
        <div class="blog_posts_container content_width">
            <h3 class="section_col_header text-center">Latest Posts</h3>
            <section class="row justify-content-between">
                <div class="col-md-4 blog_post">
                    <img src="@/assets/img/blog-posts-first.png">
                    <div class="post_header">
                        <div class="post_date">
                            <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                            <p>10 FEB 2020</p>
                        </div>
                        <div class="post_date">
                            <i class="fa fa-user mr-2" aria-hidden="true"></i>
                            <p>Writer</p>
                        </div>
                    </div>
                    <h4>Blackpool Trip</h4>
                    <p class="value_name">Book unique camping experiences on over 300,000 campsites.</p>
                    <router-link>Read More</router-link>
                </div>
                <div class="col-md-4 blog_post">
                    <img src="@/assets/img/blog-posts-first.png">
                    <div class="post_header">
                        <div class="post_date">
                            <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                            <p>10 FEB 2020</p>
                        </div>
                        <div class="post_date">
                            <i class="fa fa-user mr-2" aria-hidden="true"></i>
                            <p>Writer</p>
                        </div>
                    </div>
                    <h4>Blackpool Trip</h4>
                    <p class="value_name">Book unique camping experiences on over 300,000 campsites.</p>
                    <router-link>Read More</router-link>
                </div>
                <div class="col-md-4 blog_post">
                    <img src="@/assets/img/blog-posts-first.png">
                    <div class="post_header">
                        <div class="post_date">
                            <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                            <p>10 FEB 2020</p>
                        </div>
                        <div class="post_date">
                            <i class="fa fa-user mr-2" aria-hidden="true"></i>
                            <p>Writer</p>
                        </div>
                    </div>
                    <h4>Blackpool Trip</h4>
                    <p class="value_name">Book unique camping experiences on over 300,000 campsites.</p>
                    <router-link>Read More</router-link>
                </div>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Home',
    components: {
        MasterLayout
    },
    data() {
        return {
        }
    }
}
</script>