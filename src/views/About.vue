<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="about_container">
            <section class="row justify-content-between align-items-center content_width">
                <div class="col-xl-5 col-lg-12 col-md-12">
                    <h3 class="section_col_header">Our Vision</h3>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-12 remove_about_padding">
                    <img src="@/assets/img/about-first.png">
                </div>
            </section>
            <section class="row justify-content-between align-items-center content_width">
                <div class="col-xl-6 col-lg-12 col-md-12 remove_about_padding mar_bot">
                    <img src="@/assets/img/about-second.png">
                </div>
                <div class="col-xl-5 col-lg-12 col-md-12">
                    <h3 class="section_col_header">Our Aim</h3>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                </div>
            </section>
            <section class="content_width">
                <h3 class="section_col_header text-center">Our Values</h3>
                <div class="row justify-content-around">
                    <div class="col-md-4 mb-4">
                        <div class="about_media flex_column">
                            <div class="flex_center">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            <p class="value_name text-center mt-3">Character</p>
                            <p class="value_text text-center">Software development teams used by tools</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="about_media flex_column">
                            <div class="flex_center">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            <p class="value_name text-center mt-3">Leadership</p>
                            <p class="value_text text-center">Software development teams used by tools</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="about_media flex_column">
                            <div class="flex_center">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            <p class="value_name text-center mt-3">Academics</p>
                            <p class="value_text text-center">Software development teams used by tools</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="row curriculum">
                <div class="col-md-7 curriculum_content">
                    <h3 class="section_col_header text-center">A.C.E Curriculum</h3>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. </p>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and </p>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                </div>
                <div class="col-md-5 remove_about_padding">
                    <img src="@/assets/img/about-third.png" style="height: 100%;">
                </div>
            </section>
            <section class="content_width">
                <h3 class="section_col_header text-center py-4">Message from the HeadMaster</h3>
                <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-12 remove_about_padding fourth_about_image">
                        <img src="@/assets/img/about-fourth.png">
                    </div>
                    <div class="col-xl-8 col-lg-12 col-md-12">
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                    </div>
                </div>
                <div class="row">
                    <p class="col-md-12 section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                    <p class="col-md-12 section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                </div>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'About',
    components: {
        MasterLayout,
        
    },
    data() {
        return {
            title: 'About Us',
            bg_URL
        }
    }
}
</script>