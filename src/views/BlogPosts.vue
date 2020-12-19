<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="blog_posts_container content_width">
            <h3 class="section_col_header text-center">Latest Posts</h3>
            <section class="row justify-content-between">
                <div class="col-md-4" v-for="(blog,i) in blogs" :key="i">
                    <div class="blog_post">
                        <img :src="require('@/assets/blogs/' + blog.key + '/images/first.jpg')">
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
                            
                            <div class="post_content_spread">
                                <p class="section_col_text">{{blog.content}}</p>
                            <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none">See More</router-link>
                            </div>
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
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';

export default {
    name: 'BlogPosts',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Blog',
            BgUrl,
            blogs: [{title: 'Tree Top', key: 'tree-top', content: 'Students having fun in the tree top'}, {title: 'Sports Day', key: 'sports-day', content: 'Students participating in sporting activities on sports day'}, {title: 'SOL Park', key: 'sol-park', content: 'Students at the school park'}, {title: 'SOL Tennis', key: 'sol-tennis', content: 'Students at the tennis court'}, {title: 'Museum', key: 'museum', content: 'Students taking an excursion at a museum'}, {title: 'Legoland', key: 'legoland', content: 'Students having a fun day at legoland'}]
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