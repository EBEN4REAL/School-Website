<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="pace_container content_width policies_container mb-5">
            <div>
               At Sol Christian Academy we stay in close communication with parents and we value good relationships with the parents of our pupils. Many of our parents volunteer their time as classroom assistants, extras on school trips, minibus drivers, dinner ladies, PTA members and teachers of specialist subjects and our hope is that all parents will contribute in some way to the activity of our school.
               We encourage all prospective parents to make an <a href="" target="_blank">appointment</a> to come and visit us at the school and see for themselves how effective our particular system of education is.

            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';

export default {
    name: 'Policies',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Parents Corenr',
            BgUrl
        }
    }
}
</script>