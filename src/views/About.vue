<template>
    <MasterLayout :title="title">
        <div class="about_container">
            <section class="row justify-content-between content_width">
                <div class="col-md-5">
                    <h3 class="section_col_header">Our Vision</h3>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                </div>
                <div class="col-md-6 remove_about_padding">
                    <img src="@/assets/img/about-first.png">
                </div>
            </section>
            <section class="row justify-content-between  content_width">
                <div class="col-md-6 remove_about_padding">
                    <img src="@/assets/img/about-second.png">
                </div>
                <div class="col-md-5">
                    <h3 class="section_col_header">Our Aim</h3>
                    <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                </div>
            </section>
            <section class="content_width">
                <h3 class="section_col_header text-center">Our Values</h3>
                <div class="row justify-content-around">
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
                    <img src="@/assets/img/about-third.png">
                </div>
            </section>
            <section class="content_width">
                <h3 class="section_col_header text-center">Message from the HeadMaster</h3>
                <div class="row">
                    <div class="col-md-4 remove_about_padding fourth_about_image">
                        <img src="@/assets/img/about-fourth.png">
                    </div>
                    <div class="col-md-8">
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

export default {
    name: 'Home',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'About Us'
        }
    }
}
</script>