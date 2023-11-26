<template>
    <div class="post-container">
        <h1>{{ Titlepost }}</h1>
        <img :src="imgUrl" :alt="Titlepost" class="blog-img" />

        <article>
            <h4>{{ Subpost }}</h4>
            <p>{{ contentPost }}</p>
            <a href="#">continue reading <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" data-v-29ebb8d1="">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg></a>
        </article>
    </div>
</template>
<script>
// import 
export default {
    name:'BlogPosts',
    props:["Titlepost","imgUrl","Subpost","contentPost"],
}
</script>
<style scoped>
.post-container h1 {
    position: absolute;
    z-index: 2;
    color: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0.8rem;
    font-size: 6.5rem;
}
.post-container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5rem;
    padding-block: 4.5rem;
}
.blog-img{
    min-width: 50%;
    height: 45vh;
    z-index: 2;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}
article h4{
    font-weight: 600;
    font-size: 2.4rem;
}
article p {
    max-width: 500px;
    margin-bottom: 1.5rem;
}
article a {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: #00bcd4;
    text-decoration: none;
    display: flex;
    align-items: center;
}
</style>