<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">{{$t('contact.inquiry')}} #{{inquiry.id}}</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group">
                                    <router-link class="btn btn-primary btn-block" to="/contact-us"><i
                                            class="fa fa-plus"></i> {{$t('contact.new')}}
                                    </router-link>

                                     <router-link class="btn btn-info btn-block" to="/inquires"><i
                                            class="fa fa-history"></i> {{$t('contact.contact_history')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <table class="table table-bordered table-striped table-condensed">
                                    <tr>
                                        <td class="table-danger">{{$t('contact.date')}}</td>
                                        <td>{{ inquiry.created_at | formatDate }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('contact.name')}}</td>
                                        <td>{{inquiry.name}}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('contact.mobile')}}</td>
                                        <td>{{ inquiry.mobile }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('contact.branch')}}</td>
                                        <td>{{ inquiry.branch }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('contact.name')}}</td>
                                        <td>{{ inquiry.comments }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // import Alert from './helpers/Alert';
    import moment from 'moment';
    import url from './helpers/URL';

    export default {
        name: "order",
        data() {
            return {
                inquiry: {},
                device_id:'123456'
            }
        },
        created() {
            this.loadOrder()
        },
        methods: {
            loadOrder() {
                const path = url(`/api/inquires/${this.$route.params.id}?device_id=${this.device_id}`);

                this.$http.get(path).then(response => {
                    this.inquiry = response.data;
                    // this.$parent.loading = false;
                }, (response) => {
                    // this.$parent.loading = false;
                });
            }
        },
        filters: {
            formatDate(value) {
                if (window.localStorage.locale == 'ar') {
                    moment.locale('ar-sa');
                } else {
                    moment.locale('en-us');
                }

                return moment(value).format('DD MMMM YYYY HH:mm');
            }
        },
    }
</script>

<style scoped>

</style>