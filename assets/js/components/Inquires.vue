<template>
    <div class="page-header header-filter" filter-color="gray" style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">{{$t('contact.contact_history')}}</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group ">
                                    <router-link class="btn btn-primary btn-block" to="/contact-us"><i class="fa fa-plus"></i>
                                        {{$t('contact.new')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row" v-if="inquires.length">
                                <section class="card">
                                    <article class="card-body" v-for="inquiry in inquires" :key="inquiry.id">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td class="table-danger">{{$t('contact.date')}}</td>
                                                    <td>{{ inquiry.created_at }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-danger">{{$t('contact.name')}}</td>
                                                    <td>{{ inquiry.name }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-danger">{{$t('contact.mobile')}}</td>
                                                    <td>{{ inquiry.mobile }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <router-link :to="`/inquires/${inquiry.id}`" class="btn btn-info btn-block btn-sm">
                                            {{$t('contact.show_more')}}
                                        </router-link>
                                    </article>
                                </section>
                            </div>
                            <div class="row" v-else>
                                <div class="col-md-12 alert alert-info"><i class="fa fa-info-circle"></i>
                                    {{$t('contact.no-inquiries')}}∏
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
        name: "inquires",
        data() {
            return {
                // alert: Session.getFlash(),
                inquires: []
            }
        },
        created() {
            this.loadInquiries();
        },
        methods: {
            loadInquiries() {
                // this.$parent.loading = true;
                let device_id = '123456';
                this.$http.get(url('/api/inquires/display'), {
                    device_id: device_id
                }).then(response => {
                    this.inquires = response.data.data;
                    // this.$parent.loading = false;
                }, () => {
                    // this.$parent.loading = false;
                });
            },

            displayOrder(id) {
                this.$router.push(`/inquires/${id}`);
            }
        },
    }
</script>

<style scoped>

</style>