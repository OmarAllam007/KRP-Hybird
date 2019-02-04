<template>
    <div>
        <router-link to="/cart-details" title="" data-placement="bottom" class="navbar-brand">
            <i class="fa fa-shopping-cart"></i>
        </router-link>
        <span class="badge badge-pill badge-dark" style="padding: 3px" v-model="items_count"
              v-text="items_count"></span>
    </div>
</template>

<script>
    import Session from './helpers/Session.js';
    import EventBus from './helpers/EventBus'

    export default {
        name: "cart",
        data() {
            return {
                cart: [],
                items: 0,
                products: [],
            }
        },
        computed: {
            items_count() {
                if (Session.get('cart-products') && Session.get('cart-products').length) {
                    this.items = Session.get('cart-products').length;
                } else {
                    this.items = 0
                }
                return this.items;
            }
        },
        methods: {
            productExist(item) {
                return this.$parent.cart.some((el) => {
                    return el.id === item.id;
                });
            }
        },
        created() {
            this.$parent.cart = Session.get('cart-products') ? Session.get('cart-products') : [];

            EventBus.$on('add-to-cart', (item) => {
                item.quantity = 1;
                if (this.$parent.cart.length) {
                    if (!this.productExist(item)) {
                        this.$parent.cart.push(item)
                    }
                } else {
                    this.$parent.cart.push(item)
                }

                Session.set('cart-products', this.$parent.cart);
                this.items = (Session.get('cart-products') && Session.get('cart-products').length) ? Session.get('cart-products').length : 0
            });

            EventBus.$on('remove-from-cart',(target)=>{
                var items = Session.get('cart-products').filter((item)=>{
                    return target.id !== item.id;
                })
                Session.set('cart-products',items)
                this.items = Session.get('cart-products').length
            })
        }
    }
</script>

<style scoped>

</style>