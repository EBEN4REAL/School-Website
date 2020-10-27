<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width curriculum_container">
            <h3 class="section_col_header">Core Curriculum</h3>
            <p class="section_col_text para mb-5">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. <br><br>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and <br><br>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. <br><br>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and</p>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-7 skewed_parent">
                        <h3 class="section_col_header text-center">Core Subject</h3>
                        <div class="skewed_div uniform_skewed flex_column">
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Maths</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">English</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Chemistry</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Agric</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">CRS</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Music</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/uniform-second.png">
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center">Multimedia</h3>
                <p class="section_col_text para">Uniform gives Our Students a sense of ‘Unity’ and by dressing correctly students can show pride in their school. Students are required to wear uniform at all times. All students must wear the uniform listed below.</p>
            </section>
            <section class="row justify-content-between mb-5">
                <div class="col-md-6 col-lg-6 col-xl-4 mb-4">
                    <div class="single_media align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="media_content col-md-9">
                            <h5 class="">Text</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 mb-4">
                    <div class="single_media align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="media_content col-md-9">
                            <h5 class="">Text</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 mb-4">
                    <div class="single_media align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="media_content col-md-9">
                            <h5 class="">Text</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 mb-4">
                    <div class="single_media align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="media_content col-md-9">
                            <h5 class="">Text</h5>
                        </div>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center">Elective and Additional Instruction Programs</h3>
                <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. <br><br>I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'Curriculum',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Curriculum',
            bg_URL
        }
    }
}
</script>