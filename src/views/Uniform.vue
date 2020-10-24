<template>
    <MasterLayout :title="title">
        <div class="pace_container content_width uniform_container">
            <p class="section_col_text para">Uniform gives Our Students a sense of ‘Unity’ and by dressing correctly students can show pride in their school. Students are required to wear uniform at all times. All students must wear the uniform listed below.</p>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/about-second.png">
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
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <h3 class="section_col_header text-center">UNIFORM AVAILABLE AT THE SCHOOL OFFICE:</h3>
                        <p class="section_col_text para">The role of rewards and praise in recognising and promoting Heston Community School’s values is a key component of developing the potential of our students by giving them encouragement and praise; praise is a key component of good teaching and good staff/student relationships. Good behaviour is also best promoted and developed by drawing attention to and rewarding well behaved and hardworking students. Praise is used appropriately, sincerely and will be linked to tangible examples of a student’s strengths or effort. Students’ hard work, good behaviour and demonstration of the School’s core values are recognised and celebrated by teachers in many different ways, including: · Verbal praise · Positive feedback · Positive letters · Merits · Assembly Trop</p>
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
    name: 'Rewards',
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