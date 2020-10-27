<template>
    <MasterLayout :title="title" :bg_URL="bg_URL">
        <div class="posts_container content_width">
            <h3 class="section_col_header text-center">{{ postTitle }}</h3>
            <div class="post_header">
                <div class="post_date">
                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                    <p>10 FEB 2020</p>
                </div>
                <div class="post_date">
                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                    <p>Writer</p>
                </div>
            </div>
            <div :style="[{
                backgroundImage: `linear-gradient(rgb(8, 129, 62 , 0.75), rgb(8, 129, 62 , 0.75)), url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }]" class="post_image">
                
            </div>
            <p class="section_col_text">Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <Subscribe />
        <section class="content_width mt-5">
            <h4>Similar posts to this one</h4>
            <div class="row justify-content-between mt-4">
                <div class="col-md-4">
                    <div class="blog_post">
                        <img src="@/assets/img/blog-posts-first.png">
                        <div class="post_content_holder">
                            <div class="post_header">
                                <div class="post_date">
                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                                    <p>10 FEB 2020</p>
                                </div>
                                <div class="post_date">
                                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                                    <p>Writer</p>
                                </div>
                            </div>
                            <h4>Blackpool Trip</h4>
                            <p class="section_col_text">Book unique camping experiences on over 300,000 campsites.</p>
                            <router-link :to="{ name: 'post' }" class="text-decoration-none">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import Subscribe from '@/components/Subscribe.vue';
import bg_URL from '@/assets/img/The-matriculants.png';


export default {
    name: 'Post',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Post',
            postTitle: 'School Update',
            bg_URL
        }
    }
}
</script>