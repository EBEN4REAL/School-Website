<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width">
            <div :style="[{
                backgroundImage: `url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }]" class="post_image">
                
            </div>
            <section class="mb-5">
                <h3 class="section_col_header text-center">Packet of Accelerated Christian EDUCATION(PACE®)</h3>
                <div class="row justify-content-between">
                    <div class="col-md-12">
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding mar_bot">
                        <img src="@/assets/img/about-second.png">
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12">
                        <h3 class="section_col_header text-center">What's Inside</h3>
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center">The A.C.E. Program</h3>
                <div class="row justify-content-between">
                    <div class="col-md-12">
                        <p class="section_col_text para">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happ. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
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
    name: 'Pace',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Pace',
            bg_URL
        }
    }
}
</script>