<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">{{$t('order.order')}} #{{order.id}}</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group">
                                    <router-link class="btn btn-primary btn-block" to="/create-order"><i
                                            class="fa fa-plus"></i> {{$t('order.new')}}
                                    </router-link>
                                    <router-link class="btn btn-info btn-block" to="/display-orders"><i
                                            class="fa fa-history"></i> {{$t('order.order_history')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <table class="table table-bordered table-striped table-condensed">
                                    <tr>
                                        <td class="table-danger">{{$t('order.order_date')}}</td>
                                        <td>{{ order.created_at | formatDate }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('order.order_type')}}</td>
                                        <td>{{order.order_type}}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('order.delivery_date')}}</td>
                                        <td>{{ order.delivery_date_time | formatDate }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('order.branch')}}</td>
                                        <td>{{ order.branch }}</td>
                                    </tr>
                                    <tr v-if="order.order_type == 'readymix'">
                                        <td class="table-danger">{{$t('labels.orders.readymix')}}</td>
                                        <td>{{ order.readymix_type }}</td>
                                    </tr>
                                    <tr v-if="order.order_type == 'blocks'">
                                        <td class="table-danger">{{$t('labels.orders.blocks_type')}}</td>
                                        <td>{{ order.blocks_type }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('labels.orders.amount')}}</td>
                                        <td>{{ order.amount }}</td>
                                    </tr>
                                    <tr>
                                        <td class="table-danger">{{$t('labels.orders.comments')}}</td>
                                        <td>{{ order.comments }}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="table-danger">Status:</td>
                                        <td>{{ order.status }}</td>
                                    </tr> -->
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
                order: {},
                device_id:'123456'
            }
        },
        created() {
            this.loadOrder()
        },
        methods: {
            loadOrder() {
                const path = url(`/api/orders/${this.$route.params.id}?device_id=${this.device_id}`);

                this.$http.get(path).then(response => {
                    this.order = response.data;
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