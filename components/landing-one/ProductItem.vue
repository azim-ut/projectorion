<template>
    <div
        :class="className">
        <div class="single-product-box">
            <div class="product-image">
                <nuxt-link :to="`#`">
                    <img :src="product.image" :alt="product.name">
                    <img :src="product.imageHover" :alt="product.name">
                </nuxt-link>

                <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer>
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="`#`">{{product.name}}</nuxt-link>
                </h3>

            </div>
        </div>
    </div>
</template>

<script>
import Timer from './Timer';
export default {
    name: 'ProductItem',
    components: {
        Timer
    },
    data(){
        return {
            getExistPId: null
        }
    },
    props: ['product', 'className'],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        quickView(e){
            this.$emit('clicked')
        },
        addToCart(item){
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            }]

            if(this.cart.length > 0){
                let id = item.id
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        }
    }
}
</script>
