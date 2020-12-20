<template>
   <div>
       <div class="bg_wrapper">
            <Header />
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                 <b-carousel-slide img-src="../assets/img/welcome to SOL Academy3.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text"></h3>
                                <p class="banner__header__para mt-3">

                                </p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/SOL Academy Christmas Greetings3.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                           
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text"></h3>
                                <p class="banner__header__para mt-3">
                                </p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/slider.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                           
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">	High quality education services; Find a balance of Values, Academics and Morals today!
                                </p>
                                <div>
                                    <b-link to="/development"  >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/slider 2.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL, we ensure a good mental balance by engaging with an array of extracurricular programs and activities while attaining our set goals; what are you waiting for?
                                </p>
                                <div>
                                    <b-link to="/school-hours" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="../assets/img/slider 9.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL: You can count on us for the right environment to equip and for effective learning.
                                </p>
                                <div>
                                    <b-link to="/school-hours" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/slider 8.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">AT SOL Academy, we promote an equal, diverse working relationship between the staff members and pupils enabling us to work together as one happy family; this viewpoint brings us together and culminates in the attainment of our goals.
                                </p>
                                <div>
                                    <b-link to="/blog-posts" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="../assets/img/slider 7.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">As we await a better future, we don’t fold our hands at SOL Academy; we share and demonstrate an optimistic belief system; hence, the need of investing in the formative structure and platform that is responsible for the anticipated future transformation. 
                                </p>
                                <div>
                                    <b-link to="/gallery" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="../assets/img/slider 4.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL, we ensure a good mental balance by engaging with an array of extracurricular programs and activities while attaining our set goals; what are you waiting for?
                                </p>
                                <div>
                                     <b-link to="/blog-post" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="../assets/img/slider 3.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL: You can count on us for the right environment to equip and for effective learning.
                                </p>
                                <div>
                                     <b-link to="/development" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/Main slider.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">As we await a better future, we don’t fold our hands at SOL Academy; we share and demonstrate an optimistic belief system; hence, the need of investing in the formative structure and platform that is responsible for the anticipated future transformation.
                                </p>
                                <div>
                                     <b-link to="/gallery" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
            </b-carousel>
       </div>
        <section class="boxes_container">
            <section class="card__boxes__wrapper mt-3">
            <div class="card-box">
                <img src="@/assets/img/star (2).svg"  width="40" />
                <p class="mt-5 green__text bold_text">Nursery</p>
            </div>
            <div class="card-box">
                <img src="@/assets/img/student.svg" width="40" />
                <p class="mt-5 green__text bold_text">Primary</p>
            </div>
            <div class="card-box">
                <img src="@/assets/img/Outline_7_.svg" width="40" />
                <p class="mt-5 green__text bold_text">High School</p>
            </div>
            <div class="card-box">
                <img src="@/assets/img/student (1).svg" width="40"  />
                <p class="mt-5 green__text bold_text">College</p>
            </div>
        </section>
        </section>
        <section class="upcoming_events_wrapper">
            <div class="row ">
                <div class="col-md-4">
                     <h3 class="text-center py-3 primary-color">
                        Welcome Thought
                    </h3>
                    <div class="mt-3">
                         <small class="section_col_text italicize_text line-height two-rem-padding">Empty spaces are unnatural and the universe has mechanism, interactions that seek to fill it. 
                            At Sol academy we are committed to a life of excellence through the development of virtues and value within the framework of spirituality. Furthermore, In quest to fill up and sustain important element of the globe thereby translating into a better society. We believe in raising, nurturing, building the iGen, Gen Z and Gen Alpha future and transformational leaders from the foundational and formative stage of life on the anchor and platform of certain core values namely character, leadership and Academics.
                            Welcome to SOL Academy and enjoy your stay with us.
                            </small>
                    </div>
                </div>
                <div class="col-md-4">
                    <h3 class="text-center  primary-color mt-3">
                        Welcome Note
                    </h3>
                    <div class="upcoming_event_founder_card pt-4 pl-3 pr-3">
                        <small class="section_col_text  line-height">
                            On behalf of all staff and I would like to welcome you to this New Academic Year.
                            At SOL Christian Academy we aim to give every child the very best start possible to their education. The achievement of all children matters, and we strive to ensure that learning is fun, fulfilling and for everyone. We provide an environment which is friendly and promotes success through vibrant and engaging teaching enabling the children to become active learners by using exciting, broad and balanced curriculum.

                        </small>
                        <div class="row mt-5">
                            <div class="col-md-4 card_subcontent text-right">
                                <img src="@/assets/img/about-fourth.png" class="img_thumbnail" />
                            </div>
                            <div class="col-md-8 content_title ">
                                <strong>SOL Academy</strong>
                                <div>
                                    <small>Founder & CEO, SOL</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 [b">
                    <div class="upcoming_events_section pb-2">
                        <h3 class="py-3 text-center primary-color">Upcoming Events</h3>
                        <div class="upcoming_events_section_inner_wrapper">
                            <div class="mt-3">
                                <div class="flex_display">
                                    <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                    <small class="section_col_text ">17th Thursday 2020: Commencement of Half Term.</small>
                                </div><br>
                                <div class="flex_display">
                                    <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                    <small class="section_col_text ">The management of SOL Academy wish you a prosperous Christmas holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations.</small>
                                </div><br>
                                <div class="flex_display">
                                    <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                    <small class="section_col_text ">Latest Covid guidance</small>
                                </div><br>
                                <div class="flex_display">
                                    <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                                    <small class="section_col_text ">Ensure to keep washing your hands, wear a face cover and make 2 metres spacing; also, if you notice the following symptoms: a high temperature, a new or continuous cough, a loss of, or change to, your sense of smell or taste. Get a test and stay at home. <a href="./covid-19-local-alert-level-very-high-poster.pdf" download>Click here</a>  to download the COVID-19 poster</small>
                                </div>
                            </div>
                            <div class="text-center mt-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="important_resources_wrapper ">
            <h4 class="text-center bold_text header_content primary-color">Important Resources</h4>
            <div class="row mt-5">
                <div class="col-md-3 ">
                     <a href="./Fees_Struture.pdf"  download>
                        <div class="important_resources_box">
                            <div class="circular_div">
                                <img src="@/assets/img/information.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Fee Structure</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 ">
                    <a href="./Calendar 2020_2021.pdf"  download>
                        <div class="important_resources_box">
                            <div class="circular_div">
                                <img src="@/assets/img/information.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Calendar</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 ">
                    <a href="./Application_Form.pdf"  download>
                        <div class="important_resources_box">
                            <div class="circular_div">
                                <img src="@/assets/img/information.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Application Form</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-3 ">
                     <a href="./Prospectus.pdf"  download>
                        <div class="important_resources_box">
                            <div class="circular_div">
                                <img src="@/assets/img/information.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Prospectus</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="why_choose_us mt-5">
            <h4 class="text-center bold_text header_conten primary-color">Reasons Why You Should Choose Us</h4>
            <div class="mt-5 row align-items-center" id="character">
                <div class="col-md-6">
                    <img src="@/assets/img/character.jpg" class="why_img" width="450px"  />
                </div>
                <div class="col-md-6">
                    <h4 class="bold_text primary-color">Character</h4>
                    <p class="para section_col_text">As Christians, we need to strive for success. Our strong Christian character needs to stand out to a lost world. The world needs to see Christians who can handle adversity as well as success. Success tests the crucible of our Christian character! Let’s remember who we are and who brought success our way.
                    We all think about a lot of things that are not godly, and things we would be ashamed of if they were available for all to know. 
                    Abraham Lincoln once said, “Character is like a tree and reputation like its shadow. The shadow is what we think of it; the tree is the real thing.” My reputation is what others think of me, which may or may not be true, but my character is who I really am. Your character is the real you in the sense that you cannot separate what you do from who you are.
                    </p>
                </div>
            </div>
            
            <div class="mt-5 row align-items-center " id="leadership">
                <div class="col-md-6">
                    <h4 class="bold_text primary-color">Leadership</h4>
                    <p class="para section_col_text">As Christians, we carry the responsibility of representing Christ in the way we lead. It’s not just for our sake but the sake of those around us.
                    When people know that we are followers of Jesus, they see our behaviour and associate whatever behaviour they see in us with Jesus. Whether we like it or not, we are carefully watched by those outside the church, and we represent Jesus on earth. Our behaviour doesn’t change the nature of Jesus, but we can change the way people around us think about Jesus based on our actions and behaviour.“If we lead poorly, that’s a really bad representation and every one of us knows that we can absolutely affect someone’s faith by how we lead, good or bad.”
                    Global citizen of a greater Kingdom to come..Inspiration
                    .
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="@/assets/img/Leadership.jpg" class="why_img" width="100%"  />
                </div>
            </div>
             <div class="mt-5 row align-items-center" id="academics">
                <div class="col-md-6">
                    <img src="@/assets/img/academics.jpg" class="why_img" width="100%"  />
                </div>
                <div class="col-md-6">
                    <h4 class="bold_text primary-color">Academics</h4>
                    <p class="para section_col_text">Academics are important in the life of a disciple of Christ, because they engage our minds by sharpening, stretching, and challenging our thinking about God in a myriad of ways. In science and math classes, we can love God by learning about His awesome creation and how the universe is perfectly designed. In language arts, we love God by learning the skills we need to read His Word and to communicate effectively with others. In history, we love God by learning how all of human events fit into the arc of the Gospel – creation, fall, redemption, and (coming soon!) glorification. If it’s true that God has something to say about every subject, and every subject has something to say about God, it follows that studying these subjects – when they are taught from a Biblical worldview – helps us to love God with our minds.</p>
                </div>
            </div>
        </section>
        <section class="mt-5 testimonials">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="bold_text primary-color">Our Clients Feedback</h4>
                    <div class="para">
                    </div>
                </div>
                <div class="col-md-6 mb-3 text-right">
                </div>
            </div>
            <vueper-slides                            
              class="no-shadow"
              :visible-slides="1"
              slide-multiple
              :gap="0"
              :slide-ratio="1 / 4"
              :dragging-distance="200"
              :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }">
              <vueper-slide  v-for="(vid, index) in testVideos" :key="index" style="display: block !important;padding-right: 0; padding-left: 0">
                  <template v-slot:content>
                     <div class=" ace_curriculum">
                        <div class="ace_curriculum_item first cursor_hover" v-if="!showVideo" @click="showVideoFunc" :class="[!vid.video ? 'hide' : null]">
                            <div class="play_button">
                                <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                            </div> 
                        </div>
                        <video controls  class="width-fifty-percent" v-if="showVideo" :class="[!vid.video ? 'hide' : null]">
                            <source src="@/assets/videos/PACE Numbering System (1).mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="ace_curriculum_item last" :class="[!vid.video ? 'width-hundred' : null]">
                            <div class="text-center py-4">
                                <img src="@/assets/img/grade-24px (1).svg" v-for="(a, i) in 5" :key="i" class="mr-2 testimonaial_rate" width="30" />
                            </div>
                            <div class="testimonials__text_container">
                                <p class="para testimonials__text">
                                    {{vid.comment}}
                                </p>
                                <small class="">{{vid.author}}</small> 
                            </div>
                        </div>  
                    </div>
                  </template>
              </vueper-slide>
            </vueper-slides>
        </section>
    <Footer />
   </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        VueperSlides, 
        VueperSlide,
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        testVideos: [
            {
                comment: 'Life at Sol Academy', author: '', video: 'DVD-Sol Academy Testimonial.mp4'
            },
            {
                comment: 'Sol Academy is another home away from home: Parent Survey.', author: 'The KS2 report: SOL’s Management Board.', video: null
            },
            {
                comment: 'Pupils attain outstanding progress in their Packets of Accelerated Christian Learning (PACEs) in subjects including English Mathematics, Science, Bible studies and social studies.', video: null 
            }

            
        ]
      }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        showVideoFunc() {
            this.showVideo = !this.showVideo
        }
    }
}
</script>