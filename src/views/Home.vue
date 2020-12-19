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
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                <p class="banner__header__para mt-3">	At SOL: You can count on us for the right environment to equip and for effective learning
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                <p class="banner__header__para mt-3">AT SOL Academy, we promote an equal, diverse working relationship between the staff members and pupils enabling us to work together as one happy family; this viewpoint brings us together and culminates in the attainment of our goals.
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
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
                                <h3 class="banner__header__text">
                                
                                </h3>
                                <p class="banner__header__para mt-3">

                                </p>
                                <div>
                                    
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
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3 mb-3">Learn More</button>
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
                    <p class="section_col_text ">On behalf of all staff and I would like to welcome you to this New Academic Year.
                        At SOL Christian Academy we aim to give every child the very best start possible to their education. The achievement of all children matters, and we strive to ensure that learning is fun, fulfilling and for everyone. We provide an environment which is friendly and promotes success through vibrant and engaging teaching enabling the children to become active learners by using exciting, broad and balanced curriculum
                    </p>
                </div>
                <div class="col-md-4">
                    <h3 class="text-center py-3 primary-color">
                        Welcome Note
                    </h3>
                    <div class="upcoming_event_founder_card">
                        <p class="section_col_text p-5 italicize_text">
                            On behalf of all staff and I would like to welcome you to this New Academic Year.
                            At SOL Christian Academy we aim to give every child the very best start possible to their education. The achievement of all children matters, and we strive to ensure that learning is fun, fulfilling and for everyone. 
                            <!-- We provide an environment which is friendly and promotes success through vibrant and engaging teaching enabling the children to become active learners by using exciting, broad and balanced curriculum -->
                        </p>
                        <div class="row">
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
                            
                            <div class="text-center">
                                <img src="@/assets/img/—Pngtree—coronavirus covid-19 element_5340536.png" width="280"  />
                            </div>
                            <div class="mt-3">
                                <small class="section_col_text">Due to the Covid circumstance, Preparation for Christmas and parents meeting will be passed shortly.
                                </small>
                                <br>
                                <small class="section_col_text">
                                    The management of SOL Academy wish you a prosperous Christmas holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations.
                                </small>
                            </div>
                            <!-- <div class="list_item mb-2" >
                                <div class="row hundred-percent-height">
                                    <div class="col-4 hundred-percent-height">
                                        <img src="@/assets/img/write-good-blog-article-get-more-traffic1.png" class="card_img" />
                                    </div>
                                    <div class="col-8">
                                        <div class="row upce_list pt-2" >
                                            <div class="col-6 remove-padding-left">
                                                <h6 class="blog-title">Happy Holidays</h6>
                                            </div>
                                            <div class="col-6 remove-padding-left remove-padding-right">
                                                <span>
                                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                                                    <small class="small_text">{{todaysDate}}</small>
                                                </span>
                                            </div>
                                            <div class="mt-2">
                                                <div class="blog_para" >The management of SOL Academy wish you a prosperous Christmas...<small class="green__text">Read More</small>
                                                holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations.
                                                </div>
                                            </div>
                                            
                                            <div class="text-center read_more_div">
                                                <router-link ></router-link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="text-center mt-2">
                                 <!--<button class="btn btn-green ">Learn More</button>-->
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
                    <!-- <button class="btn btn-back ">Read More <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></button> -->
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
              <vueper-slide  v-for="(x, index) in 1" :key="index" style="display: block !important;padding-right: 0; padding-left: 0">
                  <template v-slot:content>
                     <div class=" ace_curriculum">
                        <div class="ace_curriculum_item first">
                            <div class="play_button">
                                <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                            </div> 
                        </div>
                        <div class="ace_curriculum_item last">
                            <div class="text-center py-4">
                                <img src="@/assets/img/grade-24px (1).svg" v-for="(a, i) in 5" :key="i" class="mr-2 testimonaial_rate" width="30" />
                            </div>
                            <div class="testimonials__text_container">
                                <p class="para testimonials__text">
                                    Excellent results from SCA’s students from the recent SK1 and SK2 SATs exams!
                                </p>
                                <!-- <h6 class="">Eben</h6> -->
                                <!-- <p>Software Developer @Fuelmetrics</p> -->
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
        blogs: [{title: 'Tree Top', key: 'tree-top', content: 'Students having fun in the tree top'}]
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
    }
}
</script>