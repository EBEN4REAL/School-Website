<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width curriculum_container">
            <h3 class="section_col_header text-center">CORE CURRICULUM</h3>
            <p class="section_col_text para mb-5">Core curriculum provides students with academics, skill building, reading practice, character and wisdom training, and knowledge of God and His Word. This complete package begins with reading development and progresses through high school, giving students a solid foundation for pursuing their life goals.
            <br>
            Students who are more skilled may progress at a faster rate or may accelerate in the areas of their academic strengths. Slower students are encouraged to do their best but are able to work at their levels of proficiency and proceed as they are capable.
            <br>
            Each core subject consists of 12 PACEs <a href="https://www.aceministries.com/what-is-a-pace" target="blank">(Packet of Accelerated Christian Education)</a> per level. Typical students work daily on one PACE in each subject and may be performing at varying levels. The diagnostic test results help to identify academic weaknesses and prescribe a path to help students catch up. Most students complete at least 70 PACEs per year, while maintaining academic balance by completing about the same number of PACEs in each assigned subject.
            </p>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-7 skewed_parent">
                        <h3 class="section_col_header text-center">CORE SUBJECTS</h3>
                        <div class="skewed_div uniform_skewed flex_column">
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Math (Levels K–12)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">English (Levels K–12)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Literature and Creative Writing (Levels 2–8)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Social Studies (Levels K–12)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Science (Levels K–12)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Word Building (Levels K–9)</p>
                            </div>
                            <div class="flex_display">
                                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                <p class="section_col_text para">Bible Reading (Levels 1–6)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/uniform-second.png">
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center">MULTIMEDIA</h3>
                <p class="section_col_text para">Readmaster Plus is an educational software suite that enhances students’ educational experiences while challenging their learning. Readmaster Plus offers four distinct computer software programs:</p>
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
                            <p class="para">Readmaster® improves reading rate and comprehension skills for Levels 1–12.</p>
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
                            <p class="para">Typemaster® teaches computer keyboard skills for Levels 1–6.</p>
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
                            <p class="para">Math Builder® provides drill and practice in math concepts for Levels 1–6.</p>
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
                            <p class="para">Word Builder® improves spelling, word usage, and pronunciation for Levels 2–8</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center">EFFECTIVE AND ADDITIONAL INSTRUCTIONAL PROGRAM</h3>
                <p class="section_col_text para">In order to enhance the core curriculum, A.C.E. offers a number of other programs and courses beneficial to academic growth and development. Each of these courses adds interest and enhancement to the core curriculum and to other learning activities
                <br>
                Accelerated Christian Education is a Bible-based, Christian K–12 curriculum, consisting of reading programs, core curriculum, required electives, and additional instruction programs. Some courses are enhanced with CDs, DVDs, and computer software.
                </p>
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