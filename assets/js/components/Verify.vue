<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">Verify</h2>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5 mr-auto">
                                    <div class="social text-center">
                                        <h4>
                                            Please enter the verification code
                                        </h4>
                                    </div>
                                    <form class="form" @submit.prevent="verify">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-sign-in-alt"></i>
                                                    </span>
                                                </div>
                                                <input type="text" v-model="data.code" name="code"
                                                       class="form-control"
                                                       placeholder="Code (4 Digits)">
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button class="btn btn-danger btn-round">Verify</button>
                                            <!--<button class="btn btn-dark btn-round">Resend</button>-->
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
    import Session from './helpers/Session.js';
    import url from '../components/helpers/URL'

    export default {
        name: "verify",
        data() {
            return {
                data: {code: '',token: Session.get('token'), verified: Session.get('verified')},
                alert: {message: '', type: ''},
            };
        },

        methods: {
            verify() {
                this.$http.put(url(`/api/balance/verify/${this.token}`), this.data).then(response => {
                    if (response.data.ok) {
                        Session.set('verified', true);
                        console.log(response.data.customer.name)
                        Session.set('customer_name', response.data.customer.name);
                        Session.set('customer_email', response.data.customer.email);
                        Session.set('customer_mobile', response.data.customer.mobile);
                        this.$router.push('/balance');
                    } else {
                        // this.alert = {message: response.data.message, type: 'error'};
                    }
                    // Session.set('token', response.data.token);
                    // this.$router.push('/balance');
                    console.log(response)
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