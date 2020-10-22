<template>
    <MasterLayout>
        <div class="blog_posts_container">
            <h3 class="section_col_header text-center">Latest Posts</h3>
            <section class="row justify-content-between">
                <div class="col-md-3">
                    <img>
                    <p class="value_name text-center">Character</p>
                    <p class="value_text text-center">Software development teams used by tools</p>
                </div>
                <div class="col-md-3">
                    <img>
                    <p class="value_name text-center">Leadership</p>
                    <p class="value_text text-center">Software development teams used by tools</p>
                </div>
                <div class="col-md-3">
                    <img>
                    <p class="value_name text-center">Academics</p>
                    <p class="value_text text-center">Software development teams used by tools</p>
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