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
                <b-carousel-slide img-src="../assets/img/dmhdj336mqcvsz2jhfcm@2x.png">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:60px; padding-left: 60px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.7), rgb(0, 0, 0 , 0.7))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row">
                            <div class="col-md-5">
                                <h3 class="banner__header__text">High quality education services. better and faster learning solution!</h3>
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/img/dmhdj336mqcvsz2jhfcm@2x.png">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row">
                            <div class="col-md-5">
                                <h3 class="banner__header__text">High quality education services. better and faster learning solution!</h3>
                                <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and common place that many DTP programmes can generate dummy text using the starting sequence
                                </p>
                                <div>
                                    <button class="btn btn-white mt-3">Learn More</button>
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
            <div class="row align-items-center">
                <div class="col-md-4">
                    <h3 class="upcoming_events_header">Growing in Knowledge. Following in Faith. Serving in Unity</h3>
                </div>
                <div class="col-md-4">
                    <div class="upcoming_event_founder_card">
                        <h3 class="upcoming_event_founder_card_para">
                            At SOL Academy we are commited the excellence in all aspects 
                            of school life. We encourage children to give of their best in everything they do
                        </h3>
                        <div class="row">
                            <div class="col-md-4 card_subcontent text-right">
                                <img src="@/assets/img/Eben.jpg" class="img_thumbnail" />
                            </div>
                            <div class="col-md-8 content_title">
                                <strong>SQl academy</strong>
                                <div>
                                    <small>Founder & CEO, SQL</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="upcoming_events_section">
                        <h3 class="py-3 text-center">Upcoming Events</h3>
                        <div class="upcoming_events_section_inner_wrapper">
                            <div class="list_item mb-2" v-for="(a,i) in 3" :key="i">
                                <div class="row hundred-percent-height">
                                    <div class="col-4 hundred-percent-height">
                                        <img src="@/assets/img/write-good-blog-article-get-more-traffic1.png" class="card_img" />
                                    </div>
                                    <div class="col-8">
                                        <div class="row upce_list pt-2" >
                                            <div class="col-7 remove-padding-left">
                                                <h6 class="blog-title">Blackpool Trip</h6>
                                            </div>
                                            <div class="col-5 remove-padding-left remove-padding-right">
                                                <span>
                                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                                                    <small class="small_text">20 Oct 2020</small>
                                                </span>
                                            </div>
                                            <div class="mt-2">
                                                <div class="blog_para" >Book unique camping experiences on over 300,000 campsites.</div>
                                            </div>
                                            
                                            <div class="text-center read_more_div">
                                                <small class="green__text">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-2">
                                <button class="btn btn-green ">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="important_resources_wrapper ">
            <h4 class="text-center bold_text header_content">Important Resources</h4>
            <div class="row mt-5">
                <div class="col-md-3 ">
                    <div class="important_resources_box ">
                        <div class="circular_div">
                            <img src="@/assets/img/money.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text resources_content">Fees Structure</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/calendar.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text resources_content">Calender</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/information.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text resources_content">Application Form</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/innovation.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text resources_content">Prospectus</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="why_choose_us mt-5">
            <h4 class="text-center bold_text header_content">Why Choose Us ?</h4>
            <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="why_img" width="450px"  />
                </div>
                <div class="col-md-4">
                    <h4 class="bold_text">Character</h4>
                    <p class="para">This article is floated online with an aim to help you find the best 
                        dvd printing solution. Dvd printing is 
                        an important feature used by large and small DVD production houses to print information on DVDs.</p>
                </div>
            </div>
            
            <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="why_img mobile_view" width="450px"  />
                </div>
                <div class="col-md-7">
                    <h4 class="bold_text">Leadership</h4>
                    <p class="para pr-5">While it was just a TV show, that little speech at the beginning of 
                        the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings 
                        that drive our love of astronomy and our desire to learn more and more about it.
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="why_img desktop_view" width="450px"  />
                </div>
            </div>
             <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="why_img" width="450px"  />
                </div>
                <div class="col-md-4">
                    <h4 class="bold_text">Academics</h4>
                    <p class="para italic">While it was just a TV show, that little speech at the beginning of the 
                        original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of 
                        astronomy and our desire to learn more and more about it..</p>
                </div>
            </div>
        </section>
        <section class="mt-5 testimonials">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="bold_text">Our Clients Feedback</h4>
                    <div class="para">
                        It is a long established fact that a reader will be distracted by the readable content of
                         a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                         normal distribution.
                    </div>
                </div>
                <div class="col-md-5 text-right">
                    <button class="btn btn-back ">Read More <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></button>
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
              <vueper-slide  v-for="(x, index) in 4" :key="index" style="display: block !important;padding-right: 0; padding-left: 0">
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
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo modi tem."
                                </p>
                                <h6 class="">Eben</h6>
                                <p>Software Developer @Fuelmetrics</p>
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
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>