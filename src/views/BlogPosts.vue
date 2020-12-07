<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="blog_posts_container content_width">
            <h3 class="section_col_header text-center">Latest Posts</h3>
            <section class="row justify-content-between">
                <div class="col-md-4" v-for="(blog,i) in blogs" :key="i">
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
                            <h4>{{blog.title}}</h4>
                            <p class="section_col_text">Book unique camping experiences on over 300,000 campsites.</p>
                            <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none">See More</router-link>
                        </div>
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
            title: 'Blog',
            bg_URL,
            blogs: [{title: 'Tree Top', key: 'tree-top'}, {title: 'Sport Day', key: 'sport-day'}, {title: 'SOL Park', key: 'sol-park'}, {title: 'SOL Tennis', key: 'sol-tennis'}, {title: 'Museum', key: 'museum'}, {title: 'Legoland', key: 'legoland'}]
        }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        }
    }
}
</script>