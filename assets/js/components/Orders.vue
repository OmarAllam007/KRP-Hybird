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
                            <h2 class="card-title text-center">{{$t('order.orders')}}</h2>
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="form-group">
                                        <router-link class="btn btn-primary btn-block" to="/create-order"><i
                                                class="fa fa-plus"></i> {{$t('order.new')}}
                                        </router-link>
                                    </div>
                                </div>
                                <form>
                                    <div class="form-row ">
                                        <div class="col">
                                            <select class="form-control" v-model="filters.type">
                                                <option value="">{{$t('order.order_type')}}</option>
                                                <option value="blocks">{{$t('labels.orders.blocks')}}</option>
                                                <option value="readymix">{{$t('labels.orders.readymix')}}</option>
                                            </select>
                                        </div>
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
                                </form>
                                <br>
                                <div class="row  justify-content-center">
                                    <div v-if="!loading">
                                        <section class="card" v-if="filtered_orders.length">
                                            <article class="card-body" v-for="order in filtered_orders" :key="order.id">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                    <tr>
                                                        <td class="table-danger">{{$t('order.order_date')}}</td>
                                                        <td>{{ order.created_at | formatDate }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-danger">{{$t('order.order_type')}}</td>
                                                        <td>{{ $t('labels.orders.'+order.order_type) }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table-danger">{{$t('order.delivery_date')}}</td>
                                                        <td>{{ order.delivery_date_time | formatDate }}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <router-link :to="`/orders/${order.id}`"
                                                             class="btn btn-info btn-block btn-sm">
                                                    {{$t('order.show_more')}}
                                                </router-link>
                                            </article>
                                        </section>
                                        <div class="col-md-12 alert alert-info" v-else>
                                            <i class="fa fa-info-circle"></i> {{$t('order.no-orders')}}
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="loading">
                                            <div class="overlay"></div>
                                            <div class="spinner text-center">
                                                <i class="fa fa-spinner fa-2x fa-spin"></i>
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
    </div>
</template>

<script>
    import Session from './helpers/Session';
    import url from './helpers/URL';
    import moment from "moment";

    export default {
        name: "orders",
        data() {
            return {
                // alert: Session.getFlash(),
                orders: [],
                loading: false,
                filters: {
                    type: "",
                    branch: "",
                    status: ""
                }
            }
        },
        created() {
            this.loadOrders();
        },
        methods: {
            loadOrders() {
                this.loading = true;
                let device_id = '123456'
                this.$http.get(url('/api/orders/display'), {device_id: device_id}).then(response => {
                    this.orders = response.data.data;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
            },

            displayOrder(id) {
                this.$router.push(`/orders/${id}`);
            },
            resetFilter() {
                this.filters.branch = this.filters.type = this.filters.status = ""
            }
        },
        computed: {
            filtered_orders() {
                return this.orders.filter((order) => {
                    if (this.filters.status && order.status) {
                        return order.status.toLowerCase() == this.filters.status
                    }
                    return true
                }).filter((order) => {
                    if (this.filters.branch && order.branch) {
                        return order.branch === this.filters.branch
                    }
                    return true
                }).filter((order) => {
                    if (this.filters.type && order.order_type) {
                        return order.order_type.toLowerCase() === this.filters.type
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
    select {
        text-align: center;
        text-align-last: center;
    }

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