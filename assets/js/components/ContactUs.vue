<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="form-group">

                </div>
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <div v-if="loading" class="text-center">
                            <i style="position: relative;
    text-align: center;
    font-size: x-large;" class="fa fa-2x fa-spinner fa-spin"></i>
                        </div>
                        <div v-else>
                            <h2 class="card-title text-center">{{$t('contact.new')}}</h2>
                            <div class="card-body">
                                <router-link class="btn btn-info btn-block" to="/inquires"><i
                                        class="fa fa-history"></i> {{$t('contact.contact_history')}}
                                </router-link>
                            </div>
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
                                                           :placeholder="$t('labels.name') + $t('layout.required') ">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-textarea"> </span>
                                                    </div>
                                                    <input type="text" v-model="data.mobile" class="form-control"
                                                           :placeholder="$t('labels.mobile') + $t('layout.required')">
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
                                                    <textarea class="form-control" :placeholder="$t('contact.comments') + $t('layout.required')"
                                                              v-model="data.comments"></textarea>
                                                </div>
                                            </div>

                                            <ul>
                                                <li v-for="error in errors" class="text-danger" style="font-size:10pt">
                                                    {{error}}
                                                </li>
                                            </ul>

                                            <div class="text-center">
                                                <button type="submit" :disabled="!canSend"
                                                        class="btn btn-primary btn-round"> {{$t('contact.save')}}
                                                </button>
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
    </div>
</template>

<script>
    import Session from './helpers/Session';
    import url from './helpers/URL.js';
    import messages from '../translations';
    import Alert from '../components/Alert'


    export default {
        name: "contact-us",
        data() {
            return {
                data: {
                    name: '', branch: '', mobile: ''
                }, errors: {}, alert: {message: '', type: ''},loading:false

            };
        },

        methods: {

            send() {
                // this.data.locale = this.$i18n.lang;
                this.data.device_id = '123456';
                this.loading = true;
                this.$http.post(url('/api/create-inquiry'), this.data).then(response => {
                    var message = this.$t('alert.message_sent')
                    swal({
                        text: message,
                        icon: 'success',
                        timer: 3000,
                    });

                    this.$router.push('/inquires');
                    this.loading = false;

                    // this.$parent.loading = false;
                }, response => {
                    var message = this.$t('alert.could_not_send_message')
                    swal({
                        text: message,
                        icon: 'error',
                        timer: 3000,
                    });

                    let errors = {};
                    for (let field in response.data.errors) {
                        errors[field] = this.$t('errors.'+field);
                    }

                    this.errors = errors;
                    this.loading = false;

                });
            },

        },
        computed: {
            canSend() {
                return this.data.name.length && this.data.mobile.length
            },
        }

    }
</script>

<style scoped>
    table {
        box-shadow: -1px 0px 8px 2px #c6c2c2;
    }
    td.table-danger {
        background-color: #ea464f !important;
        color:white !important;
        font-weight: 600;
    }
    a.btn-info{
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }
    a.btn-info:hover{
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }
</style>