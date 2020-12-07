<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="pace_container content_width">
            <!-- <div :style="[{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `linear-gradient(rgb(12, 4, 31 , 0.7), rgb(12, 4, 31 , 0.7)), url(${backgroundUrl})`,
                backgroundAttachment: 'fixed'
            }]" class="post_image">
                
            </div> -->
            <section class="mb-5">
                <div class="row justify-content-between">
                    <div class="col-md-12">
                        <p class="section_col_text para">We expect students to attend at all times. If a student does not attend school they will not learn. A student's regular attendance and punctuality are a parent's or guardians legal responsibility.
                        <br>
                        Recent changes to Government Guidelines regarding acceptable school attendance levels state:
                        <br>
                        <i><b>All students must achieve at least 95% attendance as instructed by LEA and any child falling below 95% will now be contacted by the School and meetings will be arranged to discuss how attendance can be improved. All parents of a student who will not be attending school through illness or for other unforeseen reasons are required to telephone the school office before 7:30am to give the reason.</b></i>
                        <br>
                        A note, signed by a parent or guardian, confirming the reason, must be brought after every absence otherwise the absence will be logged as unauthorised. By law, only the School can authorise an absence.
                        <br>
                        The Local Education Authority's Educational Welfare Service investigates unexplained absences. It is essential that students attend regularly. We believe that student attainment and success are closely linked to regular attendance. Dental or medical treatment should be arranged after school.
                        <br>
                        If, in very exceptional circumstances, you need to request absence from school for your child during school time you should apply to the School in writing in advance of the leave.  Research indicates that two weeks' absence can seriously affect potential examination results.
                        </p>
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import bg_URL from '@/assets/img/The-matriculants.png';
import backgroundUrl from "@/assets/img/uniform-second.png";


export default {
    name: 'Attendance',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Attendance',
            backgroundUrl,
            bg_URL
         }
    }
}
</script>