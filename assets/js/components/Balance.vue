<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <div v-if="loading" class="text-center">
                            <i style="position: relative;
    text-align: center;
    font-size: x-large;" class="fa fa-2x fa-spinner fa-spin"></i>
                        </div>

                        <div v-else>
                            <h2 class="card-title text-center"> {{$t('layout.balance')}} </h2>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-5 mr-auto">
                                        <div class="panel-heading">

                                            <!--<h4 class="panel-title">{{$t('layout.balance')}}</h4>-->
                                            <!--<button class="btn btn-default btn-sm btn-refresh" @click="getBalance"><i class="fa fa-refresh"></i></button>-->
                                        </div>

                                        <!--<div class="panel-body" v-show="alert.message">-->
                                        <!-- <alert :message="alert.message" :type="alert.type"></alert> -->
                                        <!--</div>-->

                                        <div class="list-group">
                                            <article class="list-group-item active">
                                                <h4 class="list-group-item-heading">{{$t('layout.balance')}}</h4>
                                            </article>

                                            <article class="list-group-item">
                                                <p class="lead text-center">{{balance.available_balance |
                                                    number_format}}</p>
                                            </article>

                                            <article class="list-group-item active">
                                                <h4 class="list-group-item-heading">{{$t('balance.credit_limit')}}</h4>
                                            </article>

                                            <article class="list-group-item">
                                                <p class="lead text-center">{{balance.credit|number_format}}</p>
                                            </article>

                                            <article class="list-group-item active">
                                                <h4 class="list-group-item-heading">
                                                    {{$t('balance.pending_orders')}}</h4>
                                            </article>
                                            <article class="list-group-item">
                                                <p class="lead text-center">{{balance.pending_orders|number_format}}</p>
                                            </article>
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
    // import Alert from './helpers/Alert.vue';
    import Session from './helpers/Session';
    import url from './helpers/URL';


    export default {
        data() {
            return {
                alert: {message: '', type: ''},
                balance: {credit_limit: 0, pending_orders: 0, balance: 0},
                toggleBalance: false,
                token: Session.get('token'),
                verified: Session.get('verified'),
                loading: false
            }
        },

        created() {

            if (!this.token) {
                this.$router.push('/login');
            } else if (!this.verified) {
                this.$router.push('/verify');
            } else {
                this.getBalance();
            }
        },

        methods: {
            getBalance() {
                this.loading = true;
                // this.toggleBalance = false;

                this.$http.get(url(`/api/balance/display/${this.token}`)).then(response => {
                    this.balance = response.data;
                    this.$parent.customer= response.data
                    // this.toggleBalance = true;
                    this.loading = false;
                    // this.$parent.loading = false;
                }, response => {
                    this.loading = false;
                    // this.alert = { message: response.data.message, type: 'error'};
                    // this.$parent.loading = false;
                });
            }
        },

        // components: { Alert },

        filters: {
            number_format(value) {
                if (window.localStorage.locale == 'ar') {
                    return parseFloat(parseFloat(value).toFixed(2)).toLocaleString('ar-SA');

                }
                return parseFloat(parseFloat(value).toFixed(2)).toLocaleString();
            }
        }
    }
</script>

<style scoped>
    article.list-group-item.active {
        background-color: #e0343f;
        border-radius: 20px;
    }
</style>