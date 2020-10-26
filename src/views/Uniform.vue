<template>
    <MasterLayout :title="title">
        <div class="pace_container content_width uniform_container">
            <p class="section_col_text para">Uniform gives Our Students a sense of ‘Unity’ and by dressing correctly students can show pride in their school. Students are required to wear uniform at all times. All students must wear the uniform listed below.</p>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/about-second.png" style="width: 100%">
                    </div>
                    <div class="col-md-6 codes">
                        <h3 class="section_col_header text-center">DRESS CODE AND GENERAL GUIDELINES</h3>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Jewellery is not permitted in school except for girls who may wear one pair of studs or sleepers in their ears if pierced</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Body piercing is not permitted.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Experience working on projects with information and feature lists and real user recognition.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair for boys must be worn short.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">For girls, long hair must be tied back or a headband worn</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair colouring is not permitted nor fashion or ‘Punk’ styles</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">No mobile phones or bleepers are allowed in school unless prior written permission has been given</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <div class="row  ">
                    <div class="col-md-6 skewed_parent">
                        <h5 class="section_col_header text-center">UNIFORM AVAILABLE AT THE SCHOOL OFFICE:</h5>
                        <div class="skewed_div"></div>
                    </div>
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/uniform-second.png">
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Uniform',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Rewards and Solutions'
        }
    }
}
</script>