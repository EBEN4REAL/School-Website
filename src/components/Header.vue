<template>
    <div >
        <b-navbar toggleable="lg">
            <b-link to="/"><img src="@/assets/img/logo.png" width="40"  /></b-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-link to="/" class="text-decoration-none nav_item"  :class="activeTab  === 'home' ?  'activeNav' : null">Home</b-link>
                <b-link to="/about" class="text-decoration-none nav_item"  :class="activeTab  === 'about' ?  'activeNav' : null">About</b-link>
                <b-link to="/admission" class="text-decoration-none nav_item"  :class="activeTab  === 'admission' ?  'activeNav' : null">Admission</b-link>
                 <b-link to="/uniform" class="text-decoration-none nav_item"  :class="activeTab  === 'uniform' ?  'activeNav' : null">School Hours</b-link>
                <b-link to="/curriculum" class="text-decoration-none nav_item"  :class="activeTab  === 'curriculum' ?  'activeNav' : null">Curriculum</b-link>
                <b-link to="school-hours" class="text-decoration-none nav_item"  :class="activeTab  === 'curriculum' ?  'activeNav' : null">School Hours</b-link>
                <b-link to="/blog-posts" class="text-decoration-none nav_item"  :class="activeTab  === 'curriculum' ?  'activeNav' : null">Blog Posts</b-link>
                <b-link to="/curriculum" class="text-decoration-none nav_item"  :class="activeTab  === 'contact' ?  'activeNav' : null">Contact</b-link>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <!-- <div class="header_wrapper py-3">
    <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light contact-navbar scrolling-navbar px-0 w-100">
         <div class="container">
            <a class="navbar-brand" href="./"><img src="@/assets/img/logo.png" width="40"  />
            </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-activates="slide-out"
                  data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                  aria-label="Toggle navigation" id="navToggler">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse justify-content-between" id="navbarToggler">
                  <ul class="navbar-nav navbar-fixed-top nav_items ml-auto">
                   <li class="nav-item mt-4">
                  <router-link :to="{name: 'home'}" class="text-decoration-none nav_item"  :class="activeTab  === 'home' ?  'activeNav' : null">
                    <div class="">
                        Home 
                    </div>
                </router-link>
                   </li>
                    <li class="nav-item mt-4">
                <router-link :to="{name: 'about'}" class="text-decoration-none nav_item"  :class="activeTab  === 'about' ?  'activeNav' : null">
                    <div class="">
                        About 
                    </div>
                </router-link>
                    </li>
                     <li class="nav-item mt-4">
                 <router-link :to="{name: 'admission'}" class="text-decoration-none nav_item" :class="activeTab  === 'admission' ?  'activeNav' : null">
                    <div class="">
                        Admission 
                    </div>
                </router-link>
                     </li>
                      <li class="nav-item mt-4">
                 <router-link :to="{name: 'uniform'}" class="text-decoration-none nav_item" :class="activeTab  === 'uniform' ?  'activeNav' : null">
                    <div class="">
                        Uniform
                    </div>
                </router-link>
                      </li>
                       <li class="nav-item mt-4">
                 <router-link :to="{name: 'schoolHours'}" class="text-decoration-none nav_item" :class="activeTab  === 'schoolHours' ?  'activeNav' : null">
                    <div class="">
                        School Hours
                        
                    </div>
                </router-link>
                       </li>
                        <li class="nav-item mt-4">
                 <router-link :to="{name: 'curriculum'}" class="text-decoration-none nav_item" :class="activeTab  === 'curriculum' ?  'activeNav' : null">
                    <div class="">
                        Curriculum
                    </div>
                </router-link>
                        </li>
                         <li class="nav-item mt-4">
                 <router-link :to="{name: 'blogPosts'}" class="text-decoration-none nav_item" :class="activeTab  === 'blogPosts' ?  'activeNav' : null">
                    <div class="">
                        Blog 
                    </div>
                </router-link>
                         </li>
                          <li class="nav-item mt-4">
                 <router-link :to="{name: 'contact'}" class="text-decoration-none nav_item" :class="activeTab  === 'contact' ?  'activeNav' : null">
                    <div class="">
                        Contact Us
                    </div>
                </router-link>
                          </li>
                    </ul>
                        
                <div class="nav_item last">
                    <button class="school_btn btn-white">Apply Online</button>
                </div>
               </div>
         </div>
    </nav>

    </div> -->
</template>
<script>
export default {
    data() {
        return  {
            activeTab: this.$route.name
        }
    },
    methods: {
      
    }
}
</script>