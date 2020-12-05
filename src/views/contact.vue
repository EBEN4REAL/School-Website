<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="content_width">
            <div class="row mt-3">
                <div class="col-lg-5 col-md-4 mt-5 desktop_view">
                    <div class="physical_address_details">
                        <div class="row align-item-center mt-4">
                            <div class="col-4 circle_img_container">
                                <div class="circle_img">
                                    <img src="@/assets/img/pin (1) (2).svg" alt="" width="30">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="address">
                                    <h6>Physical Address:</h6>
                                    <p class="mt-4">SOL Christian Academy</p>
                                    <p>115 Fairfield Street <br>Manchester, Piccadilly Station<br> M12 6EL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact_details mt-4 mb-5">
                        <div class="row align-content-center pb-1">
                            <div class="col-4 text-center">
                            </div>
                            <div class="col-8 mt-5 pb-3">
                                <h6>Contact Details:</h6>
                            </div>
                            <div class="col-4 text-center">
                                <img src="@/assets/img/phonecall.svg" alt="" width="20">
                            </div>
                            <div class="col-8">
                                <p>01616372944</p>
                            </div>
                            <div class="col-4 mt-3 text-center">
                                <!-- <img src="@/assets/img/tel.svg" alt="" width="20"> -->
                            </div>
                            <div class="col-8 mt-3">
                                <!-- <p>0161-637-2944</p> -->
                            </div>
                            <div class="col-4 mt-3 mb-4 text-center">
                                <img src="@/assets/img/mail.svg" alt="" width="20">
                            </div>
                            <div class="col-8 mt-3 mb-4">
                                <p>Admin@solacademy.org.uk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7">
                    <div class="contact_details form_details text-center p-3 mb-5">
                        <h6>Write to Us
                        <img src="@/assets/img/mailicon.svg" alt="" class="ml-2" width="30"></h6>
                        <span>Need more info?<br>We would love to hear from you. Please send us a message and we will respond as soon as possible.</span>
                        <div class="form_group_details pl-5 pr-5 mt-3 text-left">
                            <form action="">
                                <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" name="" id="" placeholder="Your Name">
                                </div>
                                <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="" id="" placeholder="Your Email">
                                </div>
                                <div class="form-group">
                                <label>Phone Number</label>
                                <input type="number" class="form-control" name="" id="" placeholder="Your phone number">
                                </div>
                                <div class="form-group">
                                <label>Message</label>
                                <textarea name="" class="form-control" id="" cols="10" rows="4" placeholder="Give as many details as possible…"></textarea>
                                </div>
                                 <button type="submit" class="btn btn_submit mb-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map_location">
            <h2 class="font-weight-bold text-center pb-2">Find us on map</h2>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.597834455831!2d-2.223227884201329!3d53.47564717271933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb198fc6f61a7%3A0x84c13518a0f3a76e!2s115%20Fairfield%20St%2C%20Manchester%20M12%206EL%2C%20UK!5e0!3m2!1sen!2sng!4v1607161927640!5m2!1sen!2sng" width="1280" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
            title: 'Contact Us',
            bg_URL
        }
    }
}
</script>