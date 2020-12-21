<template>
        <b-navbar toggleable="md" type="dark"  class="mai-top-header">
            <b-navbar-brand :to="{ name: 'home' }"><img src="@/assets/img/logo.png" width="60"  /></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mai-top-nav">
                    <b-nav-item :to="{ name: 'home' }" class="text-white ">Home</b-nav-item>
                    <b-nav-item-dropdown text="About" right>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'about' }">Head Teacher's  Message </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :to="{ name: 'admission' }" class="text-white ">Admission</b-nav-item>
                    <b-nav-item :to="{ name: 'schoolHours' }" class="text-white ">School Hours</b-nav-item>
                    <b-nav-item-dropdown text="Kid's Hub" right class="">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'KidzoneLinks' }">Kidzone links</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'development' }">Reading development</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'homework' }">Homework</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Parents  Corner" right class="">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'uniform' }">Uniform</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'attendance' }">Attendance</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'homework' }">Homework</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'termDates' }">Term Dates</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'rewardsAndSanctions' }">Reward & Sanction</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'policies' }">Policies</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'gallery' }">Gallery</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'parents_corner' }">Parent Corner</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="News & Extracurriculars" right class="">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'blogPosts' }">Blog</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'gallery' }">Gallery</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Academic Evaluations" right class="">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'reports' }">Ofsted Report</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'pace' }">Pace</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'curriculum' }">Curriculum</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :to="{ name: 'contact' }" class="text-white ">Contact</b-nav-item>
                    <b-nav-item  class="">
                        <button class="btn btn-white " @click="apply" style="width 156px">Apply Online</button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>
<script>
export default {
    data() {
        return  {
            activeTab: this.$route.name
        }
    },
    methods: {
      apply(e) {
        e.preventDefault();
        alert("Online Application Form would be Laucnhed soon")
      }
    }
}
</script>