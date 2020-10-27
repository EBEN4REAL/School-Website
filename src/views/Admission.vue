<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="content_width mb-4">
            <h4 class="section_col_header text-center py-4">It’s as easy as 1, 2, 3</h4>
            <div class="admission_content_wrapper ">
                <p class="  ">
                    Read through this website (latest information) or download an overview in our prospectus. Download your own copy of Sol Christian Academy prospectus today. Everything you need know about how the School operates is found in this prospectus. We recommend that you take time to read it and discover what Sol Christian Academy can offer your child in terms of social, spiritual and educational
                </p>
                <div class="text-center">
                    <button class="btn btn-green mt-2">Download prospectus</button>
                </div>
            </div>
            <div class="admission_content_wrapper  mt-4">
                <p class="  ">
                    Annual School Fees are payable in 12 equal monthly instalments by Standing Order. The Nursery is free for the first thirty hours per week that a 3-4 year old attends, Therefore, if a child attends for only fifteen hours a week there are no fees to pay! PACEs that have to be re-issued due to scoring violations will be charged at a rate of £7 each. Costs for outside activities e.g. field trips, swimming lessons etc. will be extra. We endeavour to keep the costs to a minimum. School meals are not supplied, so a healthy packed lunch will be required. School uniforms are compulsory. Any child not wearing the school uniform will be sent home if prior arrangements have not been made. If you are interested in sending your child(ren) to our school please complete the attached form and return it to school administration 
                </p>
                <div class="text-left">
                    <button class="btn btn-green mt-2">Download Fee structure</button>
                </div>
            </div>
            <div class="admission_content_wrapper  mt-4">
                   <p>Gathering all the information to better serve you and your child.
                    </p> 
                    <p>APPLICATION PROCEDURE</p> 
                    <p> Your child’s application will include the following: </p> 
                    <p> Your child’s application will include the following: </p> 
                    <p> -A Preliminary Application Form must be completed and all relevant documentation presented. </p> 
                     <p class="text-black"> -A Preliminary Application Form must be completed and all relevant documentation presented. </p> 
                     <p class="text-black"> -A Preliminary Application Form must be completed and all relevant documentation presented. </p> 
                     <p class="">-A Diagnostic test must be completed to determine the child’s academic level.</p>
                     <p class="">-ACE students must bring a copy of their current Supervisor Progress Card.</p>
                     <p class=""> -A testimonial letter from both the school and church must be handed in.</p>
                    <p class="">  -A parent and student interview will be conducted with the principal and with the school pastor if needed.</p>
                    <p class=""> -Copies of the child’s birth certificate or ID document and the parent(s) ID document must be handed in. </p>
                    <p class="">-The parent(s) must attend a Parent Orientation at the beginning of the year of their child’ </p>
                   
                <div class="text-center">
                    <button class="btn btn-green mt-2">Download application form</button>
                </div>
            </div>
            <h4 class="section_col_header text-center py-4 mt-4">Find Out More</h4>
        </div>
         <div class="full_width_wrapper open_bible_wrapper "  :style="[{
                backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.75), rgb(0, 0, 0 , 0.75)), url(${OpenBibleBG})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }]">
            <h4 class="text-white">Matthew 6:21 says,</h4>
            <p class="py-5 ">“For where your treasure is, there your heart will be also.”</p>
        </div>
         <div class="mt-4 centra_para_section">
            <p class="cent_para">
                Everyone knows that what we really value is what we invest in. We believe that our children are worth investing in. The financial contribution from each family is kept to a minimum by the sacrificial giving of time, energy, and availability of all the staff involved as well as the generous support of volunteer parents. Sol Christian Academy is very grateful for the financial support it has received from individuals and churches.
            </p>
            <div class="row py-4">
                <div class="col-md-6">
                    <div class="admission_media">
                        <div class="row align-items-center hundred-percent-height">
                            <div class="col-md-4">
                                <div class="icon_centralised_wrapper">
                                    <img src="@/assets/img/money (4) (1).svg" style="width: 40px;">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h6>Fees</h6>
                                <div class="card_para">Fees Annual Fees per academic year for a student in one of our Learning Centres:</div>
                                <div class="mt-3">
                                    <small class="bold_text "> £3,600.</small>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="admission_media">
                        <div class="row align-items-center hundred-percent-height">
                            <div class="col-md-4">
                                <div class="icon_centralised_wrapper">
                                    <img src="@/assets/img/get-money.svg" style="width: 40px;">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h6>PAYMENT</h6>
                                <div class="card_para">PAYMENT School Fees are payable by standing order in twelve monthly payments:</div>
                                <div class="mt-3">
                                    <small class="bold_text ">Make Payment</small>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';
import  OpenBibleBG from '@/assets/img/opened-holy-bible.png';

export default {
    name: 'About',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Admission',
            bg_URL,
            OpenBibleBG
        }
    }
}
</script>