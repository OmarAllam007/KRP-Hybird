<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="form-group">

                </div>
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <div class="card-body">
                            <router-link class="btn btn-info btn-block" to="/inquires"><i
                                    class="fa fa-history"></i> {{$t('contact.contact_history')}}
                            </router-link>
                        </div>

                        <h2 class="card-title text-center">{{$t('contact.contact')}}</h2>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5 mr-auto">
                                    <form class="form" @submit.prevent="send">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <input type="text" v-model="data.name" class="form-control"
                                                       :placeholder="$t('labels.name')">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <input type="text" v-model="data.mobile" class="form-control"
                                                       :placeholder="$t('labels.mobile')">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <select class="form-control" :placeholder="$t('contact.select-branch')"
                                                        v-model="data.branch">
                                                    <option value="">{{$t('contact.select-branch')}}</option>
                                                    <option value="AlAhsa">AlAhsa</option>
                                                    <option value="Dammam">Dammam</option>
                                                    <option value="Hail">Hail</option>
                                                    <option value="Jeddah">Jeddah</option>
                                                    <option value="Jubail">Jubail</option>
                                                    <option value="Madina">Madina</option>
                                                    <option value="Riyadh">Riyadh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"></span>
                                                </div>
                                                <textarea class="form-control" :placeholder="$t('contact.comments')"
                                                          v-model="data.comments"></textarea>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-round"> {{$t('contact.save')}} </button>
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
    import Session from './helpers/Session';
    import url from './helpers/URL.js';

    export default {
        name: "contact-us",
        data() {
            return {data: {
                branch:''
            }, errors: {}, alert: {message: '', type: ''}};
        },

        methods: {
            send() {
                // this.data.locale = this.$i18n.lang;
                this.data.device_id = '123456';
                // this.$parent.loading = false;

                this.$http.post(url('/api/inquires/create-inquiry'), this.data).then(response => {
                    // Session.flash(this.$t('alert.message_sent'), 'ok');
                    this.$router.push('/inquires');
                    // this.$parent.loading = false;
                }, response => {
                    // this.$set('errors', response.data.errors);
                    // this.alert.message = this.$t('alert.could_not_send_message');
                    // this.alert.type = 'error';
                    // this.$parent.loading = false;
                });
            }
        },
    }
</script>

<style scoped>

</style>