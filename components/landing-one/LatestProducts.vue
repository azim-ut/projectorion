<template>
    <div>
        <!-- Start All Products Area -->
        <section class="all-products-area pb-60">
            <div class="container">
                <div class="row">
                    <ProductItem
                        v-for="(product, index) in products"
                        :product="product"
                        :key="index"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>

                </div>
            </div>
        </section>
        <!-- End all Products Area -->
    </div>
</template>

<script>
import ProductItem from './ProductItem';
export default {
    components: {
        ProductItem
    },
    methods: {
        toggle() {
            mutations.toggleQuickView();
        }
    },
    computed: {
        products(){
            return this.$store.state.products.all.filter(product => product.latest === true)
        }
    },
}
</script>
