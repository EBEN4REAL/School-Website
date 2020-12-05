<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width uniform_container">
            <p class="section_col_text para">Uniform gives Our Students a sense of ‘Unity’ and by dressing correctly students can show pride in their school. Students are required to wear uniform at all times. All students must wear the uniform listed below.</p>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-5 col-lg-12 mb-3 col-md-12 remove_about_padding">
                        <img src="@/assets/img/about-second.png">
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-xl-6 col-lg-12 col-md-12 codes">
                        <h3 class="section_col_header text-center">DRESS CODE AND GENERAL GUIDELINES</h3>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Jewellery is not permitted in school except for girls who may wear one pair of studs or sleepers in their ears if pierced.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Body piercing is not permitted.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair for boys must be worn short.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">For girls, long hair must be tied back or a headband worn.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair colouring is not permitted nor fashion or ‘Punk’ styles.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">No mobile phones or bleepers are allowed in school unless prior written permission has been given.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-12 col-md-12 skewed_parent mar_bot">
                        <h3 class="section_col_header text-center">BLOUSES AND SHIRTS AVAILABLE :</h3>
                        <div class="skewed_div uniform_skewed flex_column">
                            <p>Boys' shirt, golden, collar: 36cm / 14" (12-14 years)</p>
                            <p>Boys' shirt, golden, collar: 41cm / 16" (16 years)</p>
                            <p>Girls' blouse, golden, 71cm / 28" (8-9 years)</p>
                            <p>Girls' blouse, golden, 76cm / 30" (9-10 years)</p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding">
                        <img src="@/assets/img/uniform-second.png">
                    </div>
                </div>

                <div class="text-center mt-5">
                    <a href="https://www.schooltrends.co.uk/" target="blank">
                        <button class="view_calendar_button">
                            ORDER UNIFORM HERE 
                        </button>
                    </a>

                    <a href="https://www.schooltrends.co.uk/" target="blank">
                        <button class="view_calendar_button">
                            SEE UNIFORM LIST
                        </button>
                    </a>
                </div>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'Uniform',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'UNIFORM',
            bg_URL
        }
    }
}
</script>