<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center"> {{$t('balance.login')}}  </h2>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5 mr-auto">
                                    <div class="social text-center">
                                        <h4> {{$t('balance.login_message')}} </h4>
                                    </div>
                                    <form class="form" @submit.prevent="login">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-sign-in-alt"></i>
                                                    </span>
                                                </div>
                                                <input type="text" v-model="data.customer_id" name="customer_id"
                                                       class="form-control"
                                                       :placeholder="$t('balance.login_holder')">
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button class="btn btn-primary btn-round">{{$t('balance.login')}}</button>
                                        </div>
                                    </form>
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

    export default {
        name: "balance",
        data() {
            return {data: {customer_id: ''}, alert: {message: '', type: ''}}
        },
        methods: {
            login() {
                this.$http.post(url('/api/balance/login'), this.data).then(response => {
                    Session.set('token', response.data.token);
                    this.$router.push('/verify');
                    // this.$parent.loading = false;
                }, response => {
                    // this.alert = { message: response.data.message, type: 'error' }
                    // this.$parent.loading = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>