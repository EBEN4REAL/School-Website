<template>
    <div class="header_wrapper py-3">
        <div class="navbar">
            <div class="logo_wrapper">
                <img src="@/assets/img/logo.png" width="40"  />
            </div>
            <div class=nav_items>
                <router-link :to="{name: 'home'}" class="text-decoration-none">
                    <div class="nav_item">
                        Home 
                    </div>
                </router-link>
                <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        About 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        Admission 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        Parents 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        Academics 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        Student Life 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
                        Blog 
                    </div>
                </router-link>
                 <router-link :to="{name: 'about'}" class="text-decoration-none">
                    <div class="nav_item">
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
    
}
</script>