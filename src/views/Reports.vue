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
            <h3 class="section_col_header text-center reports_text">Reports</h3>
            <section class="row justify-content-between reports_holder">
                <div class="col-md-6 col-lg-6 col-xl-4">
                    <div :style="[{
                        backgroundImage: `linear-gradient(rgb(38, 40, 49, 0.9), rgb(38, 40, 49, 0.9)), url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }]" class="single_report">
                        <p class="text-center">OFSTED</p>
                        <a href="./Ofsted.pdf" download class="text-decoration-none report_link">Download Report</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4">
                    <div :style="[{
                        backgroundImage: `linear-gradient(rgb(38, 40, 49, 0.9), rgb(38, 40, 49, 0.85)), url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }]" class="single_report">
                        <p class="text-center">SOL OFSTED REPORT</p>
                        <a href="./SOL OFSTED RESULTS.pptx" download class="text-decoration-none report_link">Download Report</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4">
                    <div :style="[{
                        backgroundImage: `linear-gradient(rgb(38, 40, 49, 0.9), rgb(38, 40, 49, 0.9)), url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }]" class="single_report">
                        <p>2019</p>
                        <a href="./SOL OFSTED RESULTS.pptx" download class="text-decoration-none report_link">Download Report</a>
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
    name: 'Reports',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Reports',
            bg_URL
        }
    }
}
</script>