<template>
    <div >
        <b-navbar toggleable="md"
              type="dark"
              class="mai-top-header">
            <b-container>
                <b-navbar-brand :to="{ name: 'home' }"><img src="@/assets/img/logo.png" width="40"  /></b-navbar-brand>
                <!--Left Menu-->
                <b-navbar-nav class="mai-top-nav">
                    <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
                    <b-nav-item href="http://www.bluescanlabs.com/index.html">About</b-nav-item>
                </b-navbar-nav>
                <!--User Menu-->
                <b-navbar-nav class="float-lg-right mai-user-nav">
                    <b-nav-item-dropdown text="Navigation" right>
                        <b-dropdown-item class="icon s7-home">Home</b-dropdown-item>
                        <b-dropdown-item class="icon s7-user">Profile</b-dropdown-item>
                        <b-dropdown-item>Password</b-dropdown-item>
                        <b-dropdown-item>Log Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
        <b-navbar toggleable="lg">
            <b-link to="/"><img src="@/assets/img/logo.png" width="40"  /></b-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-link to="/" class="text-decoration-none nav_item"  :class="activeTab  === 'home' ?  'activeNav' : null">Home</b-link>
                <b-link to="/about" class="text-decoration-none nav_item"  :class="activeTab  === 'about' ?  'activeNav' : null">About</b-link>
                <b-link to="/admission" class="text-decoration-none nav_item"  :class="activeTab  === 'admission' ?  'activeNav' : null">Admission</b-link>
                 <b-link to="/uniform" class="text-decoration-none nav_item"  :class="activeTab  === 'uniform' ?  'activeNav' : null">Uniform</b-link>
                <b-link to="/curriculum" class="text-decoration-none nav_item"  :class="activeTab  === 'curriculum' ?  'activeNav' : null">Curriculum</b-link>
                <b-link to="school-hours" class="text-decoration-none nav_item"  :class="activeTab  === 'schoolHours' ?  'activeNav' : null">School Hours</b-link>
                <b-link to="/blog-posts" class="text-decoration-none nav_item"  :class="activeTab  === 'blogPosts' ?  'activeNav' : null">Blog Posts</b-link>
                <b-link to="/contact" class="text-decoration-none nav_item"  :class="activeTab  === 'contact' ?  'activeNav' : null">Contact</b-link>
                 <button class="btn btn-white mt-3 mb-3" @click="apply">Apply Online</button>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    
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