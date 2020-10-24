<template>
    <div class="footer mt-5">
        <div class="inner_container row  py-4">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer_links_header">Useful Links</div>
                        <div class="footer_menu mt-4">
                            <div class="footer_menu_item">
                                <a href="">Home</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">Academics</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">Parents</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">Admission</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer_links_header">Admission</div>
                        <div class="footer_menu mt-4">
                            <div class="footer_menu_item">
                                <a href="">How it works</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">Contact Support</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">Privacy Policy</a>
                            </div>
                            <div class="footer_menu_item">
                                <a href="">FAQ</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer_img">
                        <div>
                           <img src="@/assets/img/offstead.png" width="130" /> 
                        </div>
                        <div class="mt-3">
                           <img src="@/assets/img/offstead2.png"  width="130"/> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 footer_img">
                <div class="bold_text text-white">
                    <span>Get In Touch</span>
                </div>
                <div class="footer_contact_text mt-3">Feel free to get in touch with us via email</div>
                <div class="bold_text text-white mt-3 contact_email_text">
                    <P>info@solacademy.org.uk</P>
                </div>
                <div class="mt-3">
                    <div class="social_media_icons">
                        <div class="sm_icon mr-3">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                         <div class="sm_icon mr-3">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                         <div class="sm_icon">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <div class="grey_text text-white">
                            <h6>Phone</h6>
                        </div>
                        <div class="text-white bold_text">
                            <span>+357463844</span>
                        </div>
                    </div>
                    <div class="col-md-8 footer_img">
                        <div class="grey_text text-white">
                            <h6>Address</h6>
                        </div>
                        <div class="text-white bold_text">
                            <span>491 Merlin Crest Suite 963, UK</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="footer_bottom_inner_container">
               <div>
                    <img src="@/assets/img/logo.png" width="40"  />
                </div> 
                <div>
                    <div class="grey_text text-white footer_text">© Copyright 2020 SOL. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>