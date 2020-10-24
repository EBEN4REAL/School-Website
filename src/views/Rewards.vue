<template>
    <MasterLayout :title="title">
        <div class="pace_container content_width">
            <p class="section_col_text para">Visitors often comment on the calm environment of the School which is something we are proud of. This environment is the result of the desire of students to learn and teachers to make that learning experience interesting and enjoyable.</p>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/about-second.png">
                    </div>
                    <div class="col-md-6">
                        <h3 class="section_col_header text-center">Rewards</h3>
                        <p class="section_col_text para">The role of rewards and praise in recognising and promoting Heston Community School’s values is a key component of developing the potential of our students by giving them encouragement and praise; praise is a key component of good teaching and good staff/student relationships. Good behaviour is also best promoted and developed by drawing attention to and rewarding well behaved and hardworking students. Praise is used appropriately, sincerely and will be linked to tangible examples of a student’s strengths or effort. Students’ hard work, good behaviour and demonstration of the School’s core values are recognised and celebrated by teachers in many different ways, including: · Verbal praise · Positive feedback · Positive letters · Merits · Assembly Trop</p>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <h3 class="section_col_header text-center">Sanctions</h3>
                        <p class="section_col_text para">The role of rewards and praise in recognising and promoting Heston Community School’s values is a key component of developing the potential of our students by giving them encouragement and praise; praise is a key component of good teaching and good staff/student relationships. Good behaviour is also best promoted and developed by drawing attention to and rewarding well behaved and hardworking students. Praise is used appropriately, sincerely and will be linked to tangible examples of a student’s strengths or effort. Students’ hard work, good behaviour and demonstration of the School’s core values are recognised and celebrated by teachers in many different ways, including: · Verbal praise · Positive feedback · Positive letters · Merits · Assembly Trop</p>
                    </div>
                    <div class="col-md-5 remove_about_padding">
                        <img src="@/assets/img/about-second.png">
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Rewards',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Rewards and Solutions'
        }
    }
}
</script>