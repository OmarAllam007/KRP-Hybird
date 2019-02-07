<template>
    <div class="page-header" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">

                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card-body">
                        <div class="col-lg-6 col-md-12">
                            <div class="row">
                                <div class="card card-signup">
                                    <!--<h2 class="card-title text-center"> {{$t('products.index')}} </h2>-->
                                    <div  class="card-body">
                                        <table class="table table-bordered">
                                            <thead style="background-color: #DD163D;color: white;font-weight: 600;">
                                            <tr>
                                                <td>{{$t('product.product_name')}}</td>
                                                <td>{{$t('product.quantity')}}</td>
                                                <td>{{$t('product.price')}}</td>
                                                <td>{{$t('product.total_price')}}</td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, index) in data.products" :class="{'not-exist': !item.is_available}" :index="index">
                                                <td>{{item.name}}</td>
                                                <td>
                                                    <input type="number"  class="form-control"  v-model="item.quantity">
                                                </td>
                                                <td>
                                                    {{item.price }}
                                                </td>
                                                <td>
                                                    {{item.price * item.quantity}}
                                                </td>
                                                <td>
                                                    <a href="#" @click="removeProduct(index,item)"><i class="fa fa-minus-circle"></i></a>
                                                </td>

                                            </tr>
                                            <tr style="background-color: #DD163D;color: white;font-weight: 600;">
                                                <td >Total</td>
                                                <td>{{total_quantity}}</td>
                                                <td>{{total_price}}</td>
                                                <td>{{total_qty_price}}</td>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <p v-if="!isValidToPay">1234</p>

                                        <ul>
                                            <li v-for="error in errors" class="text-danger" style="font-size:10pt">
                                                {{error}}
                                            </li>
                                        </ul>

                                        <div class=" text-center">
                                            <a href="#" class="btn btn-default" @click="cancelPayment">{{$t('products.cancel')}}</a>

                                            <button class="btn btn-primary" style="font-weight:600" :disabled="!isValidToPay" >
                                                <i class="fa fa-credit-card"></i>  {{$t('products.pay')}}
                                            </button>
                                        </div>

                                    </div>

                                    <!--<div v-else class="card-body text-center">-->
                                        <!--<i class="fa fa-shopping-cart fa-4x cart-icon"></i>-->
                                        <!--<p class="no_product">{{$t('products.no_items')}}</p>-->
                                        <!--<router-link to="/products" class="btn btn-primary" style="font-weight:600">-->
                                            <!--<i class="fa fa-cart"></i>  {{$t('products.goShopping')}}-->

                                        <!--</router-link>-->

                                    <!--</div>-->
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
    import CJSON from 'circular-json'
    import Session from './helpers/Session.js';
    import EventBus from './helpers/EventBus'

    export default {
        name: "check-point",
        data() {
            let data = {products:[]};
            return {
                data,
                loading:false,
                errors:{}
            }
        },
        computed:{
            isValidToPay(){
                if(this.data.products && this.data.products.length) {
                    return this.data.products.some((product)=>{
                        if(!product.is_available){
                            return false;
                        }
                        return true;
                    })
                }

            },
            total_quantity() {
                var total = 0
                if(this.data.products && this.data.products.length) {
                    total = this.data.products.reduce((item, product) => {
                        return item + parseInt(product.quantity);
                    }, 0);
                }
                return total;
            },
            total_price(){
                var total = 0;
                if(this.data.products && this.data.products.length) {
                    total =  this.data.products.reduce((item, product) => {
                        return item + parseFloat(product.price);
                    }, 0);
                }

                return total;
            },
            total_qty_price(){
                var total = 0
                if(this.data.products && this.data.products.length) {
                 total =  this.data.products.reduce((item, product) => {
                        return item + parseFloat(product.price * product.quantity);
                    }, 0);
                }

                return total;
            },

        },
        methods:{
            canPay(){

            },
            removeProduct(index,item){
                this.data.products.splice(index, 1);
                EventBus.$emit('remove-from-cart',item);

            },
            cancelPayment(){
                EventBus.$emit('clear-cart')
                this.$router.push('/products')
            }

        },
        created() {

            this.data.products = Session.get('cart-products');
        }
    }
</script>

<style scoped>
.not-exist{
    background-color: #fbffc8;
}
</style>