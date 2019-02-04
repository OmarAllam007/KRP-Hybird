<template>
    <div class="page-header header-filter" filter-color="gray"
         style="
         background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container" style="padding-top: 5vh;">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <!--<h2 class="card-title text-center"> {{$t('products.index')}} </h2>-->
                        <div class="card-body">
                            <div class="row">
                                <div class="products-container">
                                    <div class="product" v-for="(product, index) in products">
                                        <h5 class="product-name">{{product.name}}</h5>
                                        <!--<h6 class="card-subtitle mb-2 text-muted">{{product.name}}</h6>-->
                                        <div class="product-bottom">
                                            <p class="product-description">{{product.description}}</p>
                                            <a href="#" class="" @click="addToCart(product)"><i
                                                    class="fa fa-2x " :class="isSelected(product.id)"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import url from '../components/helpers/URL'
    import Session from './helpers/Session.js';
    import EventBus from './helpers/EventBus'

    export default {
        name: "products",
        data() {
            return {
                products: [],
                loading: false,
                cart: [],
            }
        },
        created() {
            this.getProducts();
        },
        computed:{

        },
        methods: {
            getProducts() {
                this.loading = true;
                this.$http.get(url('/api/display-products')).then(response => {
                    this.products = response.data;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
            },
            addToCart(item) {
                EventBus.$emit('add-to-cart',item)
            },
            isSelected(id){
                return 'fa-cart-plus';

                // if((Session.get('cart-products') && Session.get('cart-products').indexOf(id) == -1) || !Session.get('cart-products')){
                //     return 'fa-cart-plus';
                //
                // }else{
                //     return 'fa-minus-square';
                // }
            }
        }
    }
</script>

<style scoped>
    .products-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .product {
        border: 1px solid #7d1115;
        display: flex;
        width: 10rem;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 1px 3px 3px 0px grey;
        margin: 5px;
        padding: 5px;
    }

    .product-name {
        color: #e21638;
        font-weight: normal;
    }

    .product-description {
        height: 30px;
        margin-bottom: 15px;

    }

    .product-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .add-product {
        /*margin: auto;*/
    }
</style>