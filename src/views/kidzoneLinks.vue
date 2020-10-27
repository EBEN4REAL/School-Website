<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="content_width">
            <div class="row py-3">
                <div class="col-md-6">
                    <div class="kidzone_links_container gold-bg">
                        <h5 class="text-white mb-4">Infants</h5>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <img src="@/assets/img/20190702_123537.png"  width="200" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="kidzone_links_container green_bg">
                        <h5 class="text-white mb-4">Infants</h5>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <p class="text-white">www.bbc.co.uk/bitesize/ks1/</p>
                        <img src="@/assets/img/20190319_143257.png"  width="200" />
                    </div>
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
            title: 'Kidzone Liks to Website',
            bg_URL
        }
    }
}
</script>