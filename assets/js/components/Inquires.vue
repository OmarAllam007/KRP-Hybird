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
                            <h2 class="card-title text-center">{{$t('contact.contact_history')}}</h2>
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="form-group ">
                                        <router-link class="btn btn-primary btn-block" to="/contact-us"><i
                                                class="fa fa-plus"></i>
                                            {{$t('contact.new')}}
                                        </router-link>
                                    </div>
                                </div>
                                <form>
                                    <div class="form-row ">
                                        <div class="col">
                                            <select class="form-control" v-model="filters.branch">
                                                <option value="" selected>{{$t('labels.orders.select_branch')}}</option>
                                                <option value="AlAhsa">{{$t('labels.orders.city.AlAhsa')}}</option>
                                                <option value="Dammam">{{$t('labels.orders.city.Dammam')}}</option>
                                                <option value="Hail">{{$t('labels.orders.city.Hail')}}</option>
                                                <option value="Jeddah">{{$t('labels.orders.city.Jeddah')}}</option>
                                                <option value="Jubail">{{$t('labels.orders.city.Jubail')}}</option>
                                                <option value="Madina">{{$t('labels.orders.city.Madina')}}</option>
                                                <option value="Riyadh">{{$t('labels.orders.city.Riyadh')}}</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <select class="form-control" v-model="filters.status">
                                                <option value="" selected>{{$t('order.status')}}</option>
                                                <option value="open">{{$t('labels.orders.statuses.Open')}}</option>
                                                <option value="closed">{{$t('labels.orders.statuses.Closed')}}</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <a role="button" class="btn btn-sm btn-outline-danger" @click="resetFilter">
                                                <i class="fa fa-sync"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col">
                                            <input class="form-control" type="text" v-model="filters.message"
                                                   :placeholder="$t('labels.message')"/>
                                        </div>
                                        <div class="col">
                                            <input class="form-control" type="text" v-model="filters.mobile"
                                                   :placeholder="$t('labels.mobile')"/>
                                        </div>

                                    </div>
                                </form>
                                <br>
                                <div class="row" v-if="filtered_inquries.length">
                                    <section class="card">
                                        <article class="card-body" v-for="inquiry in filtered_inquries"
                                                 :key="inquiry.id">
                                            <table  class="table table-bordered">
                                                <tbody>
                                                <tr>
                                                    <td class="table-danger">{{$t('contact.date')}}</td>
                                                    <td>{{ inquiry.created_at | formatDate }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-danger">{{$t('labels.name')}}</td>
                                                    <td>{{ inquiry.name }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-danger">{{$t('labels.mobile')}}</td>
                                                    <td>{{ inquiry.mobile }}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <router-link :to="`/inquires/${inquiry.id}`"
                                                         class="btn btn-info btn-block btn-sm">
                                                {{$t('contact.show_more')}}
                                            </router-link>
                                        </article>
                                    </section>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-md-12 alert alert-info"><i class="fa fa-info-circle"></i>
                                        {{$t('contact.no-inquiries')}}
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
    import moment from "moment";

    export default {
        name: "inquires",
        data() {
            return {
                // alert: Session.getFlash(),
                inquires: [],
                loading: false,
                filters: {
                    mobile: "",
                    branch: "",
                    message: "",
                    status: ""
                }
            }
        },
        created() {
            this.loadInquiries();
        },

        methods: {
            loadInquiries() {
                this.loading = true;
                let device_id = '123456';
                this.$http.get(url('/api/display-inquiries'), {
                    device_id: device_id
                }).then(response => {
                    this.inquires = response.data;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
            },

            displayOrder(id) {
                this.$router.push(`/inquires/${id}`);
            },
            resetFilter() {
                this.filters.branch = this.filters.mobile = this.filters.message = this.filters.status = ""
            }
        },
        computed: {
            filtered_inquries() {
                return this.inquires.filter((inquiry) => {
                    if (this.filters.branch && inquiry.branch) {
                        return inquiry.branch === this.filters.branch
                    }
                    return true
                }).filter((inquiry) => {
                    if (this.filters.message && inquiry.comments) {
                        return inquiry.comments.indexOf(this.filters.message) > -1
                    }
                    return true
                }).filter((inquiry) => {
                    if (this.filters.mobile && inquiry.mobile) {
                        return inquiry.mobile.indexOf(this.filters.mobile) > -1
                    }
                    return true
                }).filter((inquiry) => {
                    if (this.filters.status && inquiry.status) {
                        return inquiry.status_name.toLowerCase() == this.filters.status
                    }
                    return true
                })
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
    table {
        box-shadow: -1px 0px 8px 2px #c6c2c2;
    }

    td.table-danger {
        background-color: #ea464f !important;
        color: white !important;
        font-weight: 600;
    }

    a.btn-info {
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }

    a.btn-info:hover {
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }

    .alert-info {
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }
</style>