<template>
    <MasterLayout :title="title">
        <div class="pace_container content_width policies_container">
            <div class="img_holder">
                <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg"/>
            </div>
            <div>
                <p>At the school we have an ‘open door’ policy. Parents are encouraged to make an appointment to speak with the teachers and the Principal. We aim to deal with issues as they arise, contacting parents within the day if an incident should occur. The students are encouraged to talk to teachers and parents if they have any concerns or problems. Children are strongly advised not to retaliate, but to take the correct course of action, that is, to inform the teacher. We endeavour to have effective communication channels, a prerequisite for any healthy partnership. Parents, management, teachers, and governors are all committed to enforcing this policy. <br> <b><i>‘Can two walk together, unless they are in agreement?’ – Amos 3:3</i></b> <br><br> Our behaviour policy is evaluated periodically and any necessary changes made. To ensure the smooth running of the school and maintain consistency throughout the school community, parents must read and sign the policy stating their agreement. <br> Safeguarding <br>Safeguarding Policy incorporating Child Protection <br>SEND <br>send-policy-pdf <br>Complaints Procedures<br> complaints-policy <br>Health and Safety <br>Health and Safety policy <br>Risk Assessment policy <br>Fire Safety policy <br>Behaviour <br>Policy <br>Full details of all our policies listed below are available upon request. <br>Behaviour Policy - Link <br>Early Years Behaviour Policy <br>Inclusion & SEN Policy <br>Anti Bullying Policy <br>Children’s Sickness Policy and Procedures <br>Fire Safety Policy <br>First Aid Policy Guidance <br>Health and Safety Policy <br>Medication Care Plan for Emergency Needs <br>Medication Policy Medication Procedure Missing Child Procedure <br>Playground Policy <br>Procedure for Uncollected Children Safeguarding Children Policy and Procedures <br>School Trip Check List <br>School Trips Policy SMCS -Link Transport Policy <br>Whistle Blowing Policy <br>Access to the Auditorium Policy and Procedures <br>Access to the Building Policy <br>Food & Kitchen Hygiene Guidance <br>Admissions Policy <br>Charging Policy <br>Pupil Attendance Policy <br>Complaints Po</p>
            </div>
                
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Policies',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Policies'
        }
    }
}
</script>