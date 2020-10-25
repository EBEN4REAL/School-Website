<template>
    <div class="header_wrapper py-3">
            <!-- <div class=nav_items>
                <router-link :to="{name: 'home'}" class="text-decoration-none nav_item"  :class="activeTab  === 'home' ?  'activeNav' : null">
                    <div class="">
                        Home 
                    </div>
                </router-link>
                <router-link :to="{name: 'about'}" class="text-decoration-none nav_item"  :class="activeTab  === 'about' ?  'activeNav' : null">
                    <div class="">
                        About 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Admission 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Parents 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Academics 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item" >
                    <div class="">
                        Student Life 
                    </div>
                </router-link>
                 <router-link :to="{name: 'blogPosts'}" class="text-decoration-none nav_item" :class="activeTab  === 'blogPosts' ?  'activeNav' : null">
                    <div class="">
                        Blog 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        contact 
                    </div>
                </router-link>
                <div class="nav_item last">
                    <button class="school_btn btn-white">Apply Online</button>
                </div>
            </div> -->
    <!-- Fixed navbar -->
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
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Admission 
                    </div>
                </router-link>
                     </li>
                      <li class="nav-item mt-4">
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Parents 
                    </div>
                </router-link>
                      </li>
                       <li class="nav-item mt-4">
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item">
                    <div class="">
                        Academics 
                    </div>
                </router-link>
                       </li>
                        <li class="nav-item mt-4">
                 <router-link :to="{name: 'about'}" class="text-decoration-none nav_item" >
                    <div class="">
                        Student Life 
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
                 <router-link :to="{name: 'contact'}" class="text-decoration-none nav_item">
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
      
    }
}
</script>