<template>
    <main-header />
    <SubHeader heading="#cart" subHeading="Add your coupon code and save up to 70% on all purchases!" />
            <section class="cart-section">
            <div class="container" >
               <!-- p : {{  cart.length }} -->
                <section v-if="cart.length">
                    <div class="cart-details">
                        <table>
                            <thead>
                                <tr>
                                    <td>Remove</td>
                                    <td>Image</td>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Subtotal</td>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr v-for="(item, index) in cart" :key="index">
                                        <td>
                                        <svg @click="deleteItem(index)"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-x-circle delete-btn"
                                            viewBox="0 0 16 16"  >
                                            <path   d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path   d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"  /></svg></td>
                                        <td> 
                                            <img :src="item.images[0]" class="img" :alt="index"   /> 
                                        </td>
                                        <td>{{ item.brand }} / {{ item.size }}</td>
                                        <td>{{ item.currency }} {{ item.price.toFixed(2) }}</td>
                                        <td><input type="number" v-model="item.quantity"  min="1" max="10" @input="updateTotalPrice(item)" /></td>
                                        <td> {{ item.currency }}  {{ (item.price * item.quantity).toFixed(2) }} </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="checkout-section">
                    <div class="coupon">
                        <h3>Apply Coupon</h3>
                        <form>
                            <input type="text"  placeholder="Enter coupon code" v-model="codea_promo" />
                            <!-- <button @click="ApplyCoupon($event)">Apply</button> -->
                            <action-button btnvalue="Apply" @click.prevent="ApplyCoupon" :class="{ active: isActive }"  />
                        </form>
                        <h3 class="weak" v-if="message_promo === true ">le code promo n'est pas correct</h3>      
                        <h3 class="weak" v-else-if="message_promo === false ">{{ this.affichermot() }}</h3>                       
                 
                    </div>
                    <div class="checkout">
                        <h3>Cart Details</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Cart Total</td>
                                    <td>NGN 
                                        <span v-if="this.totalall > 0" >NGN
                                            
                                            {{ totalall.toFixed(2) }}
                                            </span>
                                            <span v-else>NGN 
                                            {{ subtotal.toFixed(2) }}
                                            </span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shipping Fee</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>
                                        <strong v-if="this.totalall > 0" >NGN
                                            
                                            {{ totalall.toFixed(2)  }}
                                            </strong>
                                            <strong v-else>NGN
                                            
                                            {{ subtotal.toFixed(2) }}
                                            </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <router-link to="/checkout">
                            <action-button btnvalue="Proceed to Checkout" />
                        </router-link>
                    </div>
                </div>
                </section>
                <div class="produit" v-else>
                        <div class="no-cart" >
                            <div class="no-cart-text" >
                                <img src="@/assets/images/empty-cart.svg" alt="empty-cart" >
                                <h3>Your cart is empty!</h3>
                                <p>Browse our shop and discover our latest products.</p>
                            </div>
                            <router-link to="/shop">
                                <action-button btnvalue="Start Shopping" />
                            </router-link>
                        </div>
                </div>
            </div>
        </section>
    <main-footer />
</template>
<script>
// import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
import MainHeader from "@/components/MainHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ActionButton from "@/components/ActionButton.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    name:'CartView',
    data() {
        return {
            total: this.subtotal,
            codea_promo:'',
            totalall:'',
            message_promo:'',
            isActive: false,
            disabled: false,
        };
    },
    components:{
        MainHeader,
        SubHeader,
        MainFooter,
        ActionButton
    },
    methods:{
        ...mapActions(["update_quantity", "delete_item", "sub_total"]),
        ...mapGetters(["affichermot"]),
        updateTotalPrice(item){
            this.update_quantity(item);
            this.cart.forEach((item) => {
                this.total += item.quantity * item.price;
            });
            //console.log(`hallo`+item);
        },
        deleteItem(index){
            this.delete_item(index);
        },
        ApplyCoupon(){
        //eventDefault();
        // console.log("nicht gut");

        if(this.$store.state.code_promo === this.codea_promo){
            this.message_promo = false;
            this.isActive = true;
            this.disabled = true;
            this.totalall = this.subtotal * ( 1 - 10/100);
        }else{
            this.message_promo = true;
        }
        }

    },
    computed:{
        ...mapState(["cart"]),
        ...mapGetters(["subtotal"])
    }

}
</script>
<style scoped>
.active{
    opacity: 0.5;
}
section {
    width: 100%;
    padding-block: 30px;
}
.no-cart {
    display: grid;
    place-items: center;
    gap: 30px;
}

.no-cart-text {
    text-align: center;
}

.no-cart img {
    height: 150px;
    width: 30%;
}

.cart-details {
    overflow-x: auto;
}
.img {
    height: 70px;
    width: 70px;
    margin-inline: auto;
    object-fit: contain;
}

table {
    border-collapse: collapse;
    white-space: nowrap;
    width: 100%;
}
td {
    font-size: 2rem;
}

.delete-btn {
    cursor: pointer;
}

.cart-details table thead {
    border: 1px solid lightgrey;
    border-left: none;
    border-right: none;
}

.cart-details table thead tr td {
    font-weight: 600;
    text-transform: uppercase;
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td {
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td i {
    cursor: pointer;
}

/* Checkout */
.checkout-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.coupon {
    width: 40%;
}

form {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
}

form input {
    width: 100%;
}

.checkout {
    width: 40%;
    padding: 2.5rem;
    border: 1px solid lightgrey;
}

.checkout table {
    margin-bottom: 2rem;
}

.checkout td {
    border: 1px solid lightgrey;
    padding: 0.8rem;
}

@media (max-width: 699px) {
    .cart-details table {
        table-layout: fixed;
    }
    .cart-details table thead td {
        width: 200px;
    }
    .checkout-section {
        flex-direction: column;
        gap: 3rem;
    }
    .checkout,
    .coupon {
        width: 100%;
    }
}
</style>
