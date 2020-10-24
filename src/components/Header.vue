<template>
    <div class="header_wrapper py-3">
        <div class="navbar">
            <div class="logo_wrapper">
                <img src="@/assets/img/logo.png" width="40"  />
            </div>
            <div class=nav_items>
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
            </div>
        </div>
        
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