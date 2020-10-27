<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="content_width py-4">
            <div class="text-justify mt-4">
                Homework is designed to aid the learning process and to train students to organise themselves and to be responsible for their own work.All subjects are expected to set a reasonable amount of homework at least once a week, to mark homework regularly and 
                to write helpful comments for improvement or commendations alongside students' work.
            </div>
            <div class="row mt-4">
                <div class="col-md-4">
                    <img src="@/assets/img/20181212_185405.png" class="hundred-percent-width" />
                </div>
                <div class="col-md-8">
                    <p> Curriculum Leaders are expected to keep a check on the quantity and quality of homework given 
                    and marking undertaken by Teachers. Monitors monitor Diaries and inform the Supervisors of shortfalls, 
                    gaps or overloads in the amount of homework given.</p>
                     <p>  Each student is issued with a Student Diary at the
                     beginning of each School Year. It is very important that this diary is not defaced, damaged or lost.</p>
                    <p> Replacements cost £2.00 and can be obtained from the Student Reception. In the Student Diary, record:</p>
                    <p> a) Their own daily timetable :</p>
                    <p> b) Their homework timetable </p>
                    <p> b) Their homework timetable </p>
                    <p> b) Their homework timetable </p>
                    <p> c) The homework as it is s For this purpose, the Planner has a double page for each week, with separate dated days which should be signed by both parents and Tutor each week. Show My Homework Homework requirements are to be written on the day it is set along with the date on which it is to be handed in. </p>
                    <p>  Extra details can be written in exercise books. Time should be given within a lesson for homework details to be written down and checked by the Subject Teacher where necessary. Parents have a PIN to access details of their son/daughter’s homework. This system will mean parents will be able to see all homework set 
                    and be able to support the School by helping to ensure deadlines are </p>

                </div>
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'About',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Homework',
            bg_URL
        }
    }
}
</script>