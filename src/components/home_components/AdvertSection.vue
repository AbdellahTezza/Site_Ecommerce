<template>
<section>
    <div class="container">
        <div class="ad1">
            <AdvertCard Advertbakcground="first"
            AdvertTitle="spring/summer"
            Advertparagraphe="These are the best fits for the summer season"
            buttontext="Learn More"
            />
            <AdvertCard Advertbakcground="second"
            AdvertTitle="Winter"
            Advertparagraphe="The new warm and cozy winter collection"
            buttontext="Learn More"
            />
        </div>
        <div class="ad2">
            <AdvertCard Advertbakcground="third"
            AdvertTitle="spring/summer"
            Advertparagraphe="These are the best fits for the summer season"
            :Advertbutton="false"
            />
            <AdvertCard Advertbakcground="fourth"
            AdvertTitle="spring/summer"
            Advertparagraphe="These are the best fits for the summer season"
            :Advertbutton="false"
            />
            <AdvertCard Advertbakcground="fifth"
            AdvertTitle="spring/summer"
            Advertparagraphe="These are the best fits for the summer season"
            :Advertbutton="false"
            />
        </div>

    </div>
</section>
</template>
<script>
import AdvertCard from '@/components/home_components/cards/AdvertCard.vue'

export default {
    name:'AdvertSection',
    components:{
        AdvertCard 
    },    
}
</script>
<style scoped>
.ad1, .ad2{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.ad2{
    margin-top: 3rem;
    gap: 2rem;
}

</style>