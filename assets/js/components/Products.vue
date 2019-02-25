<template>
    <div class="page-header header-filter" filter-color="gray"
         style="
         background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container" style="padding-top: 5vh;">
            <div class="row" style="padding-top: 100px">
                <div class="col-md-10 ml-auto mr-auto">

                    <div class="card card-signup">
                        <div v-if="loading" class="text-center">
                            <i style="position: relative;
    text-align: center;
    font-size: x-large;" class="fa fa-2x fa-spinner fa-spin"></i>
                        </div>
                        <!--<h2 class="card-title text-center"> {{$t('products.index')}} </h2>-->
                        <div class="card-body" v-else>
                            <div class="row justify-content-center">

                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="pills-all-tab" data-toggle="pill"
                                           href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"
                                           @click="changeType(0)">All</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                           role="tab" aria-controls="pills-home" aria-selected="true"
                                           @click="changeType(1)">Readymix</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill"
                                           href="#pills-profile" role="tab" aria-controls="pills-profile"
                                           aria-selected="false" @click="changeType(2)">Blocks</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="row justify-content-center">
                                <div class="products-container">

                                    <div class="product" v-for="(product, index) in filtered_products">
                                        <h5 class="product-name">{{product.name}}</h5>
                                        <!--<h6 class="card-subtitle mb-2 text-muted">{{product.name}}</h6>-->
                                        <div class="product-bottom">
                                            <p class="product-description">{{product.description}}</p>

                                        </div>
                                        <div class="product-add text-center" style="height:50px;margin:2px">
                                            <a href="#" style="width:100%" class="btn btn-sm btn-outline-primary"
                                               @click="addToCart(product)" v-if="!isSelected(product)"><i
                                                    class="fa fa-2x fa-cart-plus"></i></a>
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
                type: 0,
            }
        },
        created() {
            this.getProducts();
            this.cart = this.$parent.cart;
        },
        computed: {
            filtered_products() {
                if (this.type != 0) {
                    return this.products.filter((product) => {
                        return product.type === this.type
                    });
                }
                return this.products
            }
        }
        ,
        methods: {
            changeType(type) {
                this.type = type
            },

            getProducts() {
                this.loading = true;
                this.$http.get(url('/api/display-products')).then(response => {
                    this.products = response.data;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
            }
            ,
            addToCart(item) {
                EventBus.$emit('add-to-cart', item)
                this.isSelected(item)
            }
            ,
            isSelected(product) {
                    return this.$parent.cart.some((el) => {
                        return el.id === product.id;
                    });
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