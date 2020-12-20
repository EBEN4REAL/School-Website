<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="content_width py-4">
            <div class="text-justify mt-4">
                <p class="section_col_text para">Homework is designed to aid the learning process and to train students to organise themselves and to be responsible for their own work. All subjects are expected to set a reasonable amount of homework at least once a week, to mark homework regularly and to write helpful comments for improvement or commendations alongside students' work.</p>
            </div>
            <div class="row mt-4 mb-5">
                <div class="col-md-4">
                    <img src="@/assets/img/HomeworkImage.jpg" class="hundred-percent-width" />
                </div>
                <div class="col-md-8">
                    <p class="section_col_text para remove_p_bottom_border">Curriculum Leaders are expected to keep a check on the quantity and quality of homework given and marking undertaken by Teachers. Monitor Diaries inform the Supervisors of shortfalls, gaps or overloads in the amount of homework given.
                    <br>
                    Each student is issued with a Student Diary at the beginning of each School Year. It is very important that this diary is not defaced, damaged or lost. Replacements cost £2.00 and can be obtained from the Student Reception.
                    <br>
                    In the Student Diary, student’s record comprises of: 
                    </p>
                    <ol type="a" class="remove_p_bottom_border">
                        <li class="section_col_text para">Their own daily timetable</li>
                        <li class="section_col_text para">Their homework timetable</li>
                        <li class="section_col_text para">The homework as it is set.</li>
                    </ol>
                    <p class="section_col_text para">For this purpose, the Planner has a double page for each week, with separate dated days which should be signed by both parents and Tutor each week.</p>

                </div>
            </div>
            <section class="mb-5">
                <h3 class="section_col_header text-center primary-color">SHOW MY HOMEWORK</h3>
                <div class="row justify-content-between">
                    <div class="col-md-12">
                        <p class="section_col_text para">Homework requirements are to be written on the day it is set along with the date on which it is to be handed in. Extra details can be written in exercise books. Time should be given within a lesson for homework details to be written down and checked by the Subject Teacher where necessary.
                        <br>
                        Parents have a PIN to access details of their son/daughter’s homework. This system will mean parents will be able to see all homework set and be able to support the School by helping to ensure deadlines are met.
                        </p>
                    </div>
                </div>
            </section>
            <div class="text-center">
                <a href="https://www.edplace.com/student/" target="blank">
                    <button class="view_calendar_button">
                        View Homework
                    </button>
                </a>
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import BgUrl from '@/assets/img/about-us-background-images-for-website-12.png';


export default {
    name: 'About',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Homework',
            BgUrl
        }
    }
}
</script>