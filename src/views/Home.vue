<template>
   <div>
       <div class="bg_wrapper">
            <Header />
            <div class="banner_wrapper">
                <div class="row">
                    <div class="col-md-5">
                        <h3 class="banner__header__text">High quality education services. better and faster learning solution!</h3>
                        <p class="banner__header__para mt-3">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace t
                            hat many DTP programmes can generate dummy text using the starting sequence
                        </p>
                        <div>
                            <button class="btn btn-white mt-3">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
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
                            <div class="col-md-4 text-right">
                                <img src="@/assets/img/Eben.jpg" class="img_thumbnail" />
                            </div>
                            <div class="col-md-8">
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
                                    <div class="col-md-4 hundred-percent-height">
                                        <img src="@/assets/img/write-good-blog-article-get-more-traffic1.png" class="card_img" />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="row upce_list pt-2" >
                                            <div class="col-md-7 remove-padding-left">
                                                <h6 class="blog-title">Blackpool Trip</h6>
                                            </div>
                                            <div class="col-md-5 remove-padding-left remove-padding-right">
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
            <h5 class="text-center bold_text">Important Resources</h5>
            <div class="row mt-5">
                <div class="col-md-3 ">
                    <div class="important_resources_box ">
                        <div class="circular_div">
                            <img src="@/assets/img/money.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text">Fees Structure</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/calendar.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text">Calender</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/information.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text">Application Form</p>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="important_resources_box">
                        <div class="circular_div">
                            <img src="@/assets/img/innovation.svg"  width="40" />
                        </div>
                        <p class="mt-3 green__text bold_text">Prospectus</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="why_choose_us mt-5">
            <h5 class="text-center bold_text">Why Choose Us ?</h5>
            <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="" width="450px"  />
                </div>
                <div class="col-md-4">
                    <h5 class="bold_text">Character</h5>
                    <p class="para">This article is floated online with an aim to help you find the best 
                        dvd printing solution. Dvd printing is 
                        an important feature used by large and small DVD production houses to print information on DVDs.</p>
                </div>
            </div>
            <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <h5 class="bold_text">Leadership</h5>
                    <p class="para pr-5">While it was just a TV show, that little speech at the beginning of 
                        the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings 
                        that drive our love of astronomy and our desire to learn more and more about it.
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="" width="450px"  />
                </div>
            </div>
             <div class="mt-5 row align-items-center">
                <div class="col-md-7">
                    <img src="@/assets/img/Rectangle 5 Copy.png" class="" width="450px"  />
                </div>
                <div class="col-md-4">
                    <h5 class="bold_text">Academics</h5>
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
            <div class=" ace_curriculum">
                <div class="ace_curriculum_item first">
                    <div class="play_button">
                        <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                    </div> 
                </div>
                <div class="ace_curriculum_item last">
                    <div class="text-center py-4">
                        <img src="@/assets/img/grade-24px (1).svg" v-for="(a, i) in 5" :key="i" class="mr-2" width="30" />
                    </div>
                    <div class="testimonials__text_container">
                        <p class="para">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo modi tem."
                        </p>
                        <h6 class="">Eben</h6>
                        <small>Software Developer @Fuelmetrics</small>
                    </div>
                </div>  
            </div>
        </section>
    <Footer />
   </div>
</template>
<script>
import Header from "./Header"
import Footer from './Footer';

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    }
}
</script>