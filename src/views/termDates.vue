<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="term_container">
            <div class="term_section">
                <div class="term_header_holder marg_bottom">
                    <div class="left_green_border">
                    </div>
                    <div class="term_header">
                        <p class="term_season">Autumn Term</p>
                        <div class="flex_center">
                            <img src="@/assets/img/Livello_5.svg">
                            <p>Duration: 12 weeks</p>
                        </div>
                        <div class="flex_center">
                            <img src="@/assets/img/event.svg">
                            <p>Date: November 5</p>
                        </div>
                        <p class="term_period">to</p>
                        <div class="flex_center">
                            <img src="@/assets/img/event.svg">
                            <p>Date: November 5</p>
                        </div>
                    </div>
                </div>
                <div class="term_contents marg_bottom">
                    <p class="term_season content_text">Insert Text</p>
                    <div class="flex_center">
                        <img src="@/assets/img/event.svg">
                        <p>Date: November 5 to December 2020</p>
                    </div>
                </div>
                <div class="term_contents marg_bottom">
                    <p class="term_season content_text">Insert Text</p>
                    <div class="flex_center">
                        <img src="@/assets/img/event.svg">
                        <p>Date: November 5 to December 2020</p>
                    </div>
                </div>
                <div class="term_contents marg_bottom">
                    <p class="term_season content_text">Insert Text</p>
                    <div class="flex_center">
                        <img src="@/assets/img/event.svg">
                        <p>Date: November 5 to December 2020</p>
                    </div>
                </div>
                <div class="term_contents">
                    <p class="term_season content_text">Insert Text</p>
                    <div class="flex_center">
                        <img src="@/assets/img/event.svg">
                        <p>Date: November 5 to December 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import BgUrl from '@/assets/img/write-good-blog-article-t-more-traffic1.png';


export default {
    name: 'TermDates',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Term Dates',
            BgUrl
        }
    }
}
</script>