<template>
    <article :class="Advertbakcground">
        <h5>{{ AdvertTitle }}</h5>
        <p>{{ Advertparagraphe }}</p>
        <button v-if="Advertbutton" :label-text="buttontext"> {{ buttontext }}</button>
    </article>
</template>
<script>
export default {
    name:'AdvertCard',
    props:{
    Advertbakcground: String,
    AdvertTitle: String,
    Advertparagraphe:String,
    buttontext:String,
    Advertbutton:{
        type:Boolean,
        default:true
    }
    },

}
</script>
<style scoped>
article {
    background-size: cover;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 49%;
    padding: 3rem;
    color: white;
    min-height: 40vh;
}
article:hover button{
    border-color: ghostwhite;
    background-color: ghostwhite;
    color: black;
    border-radius: 0px;
}
h5 {
    font-size: 2rem;
}
p{
    padding-block: 2rem;
    color: white;
}
button{
    border-radius: 0px;
    border: 1px solid white;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    color: white;
    font-weight: 600;
    background-color: transparent;
    padding: 1.3rem 2.4rem;
}

.first {
    background-image: url(http://192.168.1.84:8080/img/b17.7c63a316.webp);
}
.second {
    background-image: url(http://192.168.1.84:8080/img/b10.ecac1bd9.webp);
}
.third{
    background-image: url(http://192.168.1.84:8080/img/b18.2120c8d5.webp);
}
.fourth {
    background-image: url(http://192.168.1.84:8080/img/b7.726d30ab.webp);
    background-position: 40%;
}
.fifth{
    background-image: url(http://192.168.1.84:8080/img/b4.060c7aa0.webp);
    background-position: 40%;
}
</style>