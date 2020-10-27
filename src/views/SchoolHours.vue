<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width uniform_container">
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-12 col-md-12 skewed_parent mar_bot">
                        <h3 class="section_col_header">To see a list of all events at SOL Christian Academy Please look at our events calendar</h3>
                        <button class="view_calendar_button">
                            View Calendar
                        </button>
                        <div class="skewed_div uniform_skewed school_hours_skewed flex_column_around">
                            <div class="flex_stretch">
                                <img src="@/assets/img/notification.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School starts at 8:30 am</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="@/assets/img/portfolio.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School starts at 8:30 am</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="@/assets/img/notification.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School Closes at 15:00 pm</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="@/assets/img/doorway.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">Doors close at 15:15 pm</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="@/assets/img/early.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">Early Years close at 15:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding">
                        <img src="@/assets/img/uniform-second.png">
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'SchoolHours',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'School Hours',
            bg_URL
        }
    }
}
</script>