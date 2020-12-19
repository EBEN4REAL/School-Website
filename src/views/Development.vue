<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="pace_container content_width development_container">
            <h3 class="section_col_header text-center">BEGINNING READING FOR YOUNG CHILDREN</h3>
            <p class="section_col_text para text-center" style="margin-bottom: 0">ABCs with Ace and Christi </p>
            <p class="section_col_text para">This 12- to 15-week program is designed for those who have not been to school or who do not yet know how to read. To enroll, the student must pass both parts of the Pretest and show the proper maturity level as determined by the Coordination Development Tests. This program will prepare children for the individualized instruction of the PACE curriculum. The lively and entertaining phonetically-based program features cartoon characters, songs, poems, displays, and character-building activities</p>
            <section class="mb-5 mt-5">
                <h3 class="section_col_header text-center mb-5">SECOND-LANGUAGE READING PROGRAMS</h3>
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <h3 class="section_col_header text-center">ABCs for English Learn</h3>
                        <p class="section_col_text para" style="margin-bottom: 0">ABCs with Ace and Christi </p>
                        <p class="section_col_text para">This full-year program is designed for children aged 5–9 who have passed the Pretest. The Pretest helps to determine if a student is ready to learn to read. This program combines Speaking English with Ace and Christi and ABCs with Ace and Christi. It allows students to learn, to read and speak.</p>
                    </div>
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/development-first.png">
                    </div>
                </div>
            </section>
            <section class="row justify-content-between all_developments mb-5">
                <div class="col-md-6 col-lg-6 col-xl-4 mb-5">
                    <div class="development_holder align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/bible.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="developement_content">
                            <h5 class="text-center">BIBLE READING</h5>
                            <p class="section_col_text para">This program reinforces reading skills with Scripture selections for Levels 2–6. (In Level 1, the instructor reads to the students.) Readings demonstrate Christian principles and complement character-building activities included in the ABCs with Ace and Christi program.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-4 mb-5">
                    <div class="development_holder align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/reading.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="developement_content col-md-9">
                            <h5 class="text-center">READMASTER PLUS</h5>
                            <p class="section_col_text para">Readmaster Plus is a computer program designed to increase a student’s proficiency in reading and comprehension, typing, spelling, and basic arithmetic. Readmaster Plus offers four distinct computer software programs: Readmaster®, Typemaster®, Math Builder®, and Word Builder.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-4 mb-5">
                    <div class="development_holder align-items-center">
                        <div class="dev_img">
                            <div class="image flex_center ">
                                <img src="@/assets/img/distance-learning.svg" style="width: 40px;">
                            </div>
                            
                        </div>
                        <div class="developement_content col-md-9">
                            <h5 class="text-center">VIDEOPHONICS</h5>
                            <p class="section_col_text para">This DVD program is designed for English-speaking adults and students 9 years of age and up, who have never learned to read or who need remediation. The course will help improve their phonetic reading skills and develop writing skills.</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import BgUrl from '@/assets/img/about-us-background-images-for-website-12.png';


export default {
    name: 'ReadingDevelopment',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Reading Development',
            BgUrl
        }
    }
}
</script>