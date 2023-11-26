<template>
    <main-header />
    <section class="hero__section">
        <div class="container">
            <div class="hero__text">
                <h4>Trade-in-offer</h4>
                <h1>Super value deals</h1>
                <h2>On all products</h2>
                <p>Save more with coupons & get up to 70% off!</p>
                <router-link to="/">
                        <button>Start Shopping</button>
                </router-link>
            </div>
        </div>
    </section>
    <service-section />
    <section class="feature__section">
        <div class="container">
            <featured-products :featuredProducts="featuredProducts" />
        </div>
    </section>
    <banner-section />
    <new-arrivals :newArrivals="newArrivals"  />
    <AdvertSection />
    <NewsLetter />
    <!-- {{ $store.state.fullName1 }} -->
    <!-- {{ fullnameIs.id }} -->
    <!-- <p v-for="todolist in fullnameIs" :key="todolist">
        {{ todolist.id }} 
    </p> -->
    <!-- {{ this.$store.getters.appName }} -->
    <!-- <h1>{{ $store.state.count }}</h1>
    <button @click="increment()">+ W</button>
    <button @click="n_increment(6)">+ 6</button>
    <button @click="addcontext()">addcontext</button> -->

    <main-Footer />
    

</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import FeaturedProducts from "@/components/home_components/products/FeaturedProducts.vue";
import NewArrivals from "@/components/home_components/products/NewArrivals.vue";
import BannerSection from "@/components/home_components/BannerSection.vue";
import AdvertSection from "@/components/home_components/AdvertSection.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import MainFooter from "@/components/MainFooter.vue";


import axios from "axios";
import { mapActions } from "vuex";



export default {
    name:'HomeView',
    data() {
        return {
            products: [],
            // fullname: this.$store.state.fullname,
        };
    },
    methods: {
        ...mapActions(["set_products"]),
        // Incrmenet1(){
        //     console.log("hallo");
        //     return this.$store.commit('increment');
        // },
        // n_increment(){
        //     return this.$store.commit('n_increment', 6);
        // }
        // ...mapActions([""])
    },
    components:{
        MainHeader,
        "service-section": ServiceSection,
        FeaturedProducts,
        "banner-section":BannerSection,
        NewArrivals,
        AdvertSection,
        NewsLetter,
        MainFooter
    },
    computed: {
        featuredProducts() {
            return this.products.slice(1, 5);
        },
        newArrivals() {
            return this.products.slice(5, 10);
        },
        // fullnameIs(){
        //     return this.$store.state.tolist;
        // }


    },
    async created() {
        let res1 = await axios.get("https://gorana.onrender.com/products");
        console.log(res1.data.results);
        this.products = res1.data.results.map((product) => {
           product.images[0] = product.images[0].replace("http", "https");
           return product;
        });
        this.set_products(this.products);
    },
}
</script>
<style scoped>
/* Hero Section */
button{
    border: none;
    background-color: var(--dim-blue);
    padding: 10px 20px;
    border: 2px solid var(--dim-blue);
    font-size: 1.7rem;
    color: white;
}
.hero__section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 65px);
    background-image: url("@/assets/images/hero4.webp");
    background-position: 60% 30%;
    background-size: cover;
}

.hero__text {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.hero__text h4 {
    padding-bottom: 1rem;
}

.hero__text h1 {
    color: var(--dim-blue);
}

.hero__text p {
    margin-bottom: 1rem;
}

@media (min-width: 2000px) {
    .hero__section {
        background-position: 70% 12%;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #e3e6f3;
        height: 50vh;
    }
}

@media (min-width: 3000px) {
    .hero__section {
        background-position: 60% 30%;
        /* background-size: cover; */
    }
}
</style>

