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
                                        <!--<tr>-->
                                        <!--<td class="table-danger">{{$t('order.order_type')}}</td>-->
                                        <!--<td>{{$t('labels.orders.'+order.order_type)}}</td>-->
                                        <!--</tr>-->
                                        <tr>
                                            <td class="table-danger">{{$t('order.delivery_date')}}</td>
                                            <td>{{ order.delivery_date_time | formatDate }}</td>
                                        </tr>
                                        <tr>
                                            <td class="table-danger">{{$t('order.location')}}</td>
                                            <td>{{ $t('labels.orders.city.'+order.branch)}}</td>
                                        </tr>


                                        <!--<tr v-if="order.order_type == 'readymix'">-->
                                        <!--<td class="table-danger">{{$t('labels.orders.readymix')}}</td>-->
                                        <!--<td>{{ order.readymix_type }}</td>-->
                                        <!--</tr>-->
                                        <!--<tr v-if="order.order_type == 'blocks'">-->
                                        <!--<td class="table-danger">{{$t('labels.orders.blocks_type')}}</td>-->
                                        <!--<td>{{ order.blocks_type }}</td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                        <!--<td class="table-danger">{{$t('labels.orders.amount')}}</td>-->
                                        <!--<td>{{ order.amount }}-->
                                        <!--<span class="control-label" v-if="order.order_type=='readymix'">-->
                                        <!--<span>m<sup>3</sup></span>-->
                                        <!--</span>-->
                                        <!--<span v-else>-->
                                        <!--Pieces-->
                                        <!--</span>-->
                                        <!--</td>-->
                                        <!--</tr>-->
                                        <tr>
                                            <td class="table-danger">{{$t('order.status')}}</td>
                                            <td>{{ $t('labels.orders.statuses.'+order.status_name) }}</td>
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
                                    <p>Products</p>

                                    <table class="table  table-striped table-condensed">
                                        <tr class="table-danger">
                                            <th >{{$t('order.products.name')}}</th>
                                            <th>{{$t('order.products.quantity')}}</th>

                                        </tr>
                                        <tr v-for="product in order.products">
                                            <td>{{product.name}}</td>
                                            <td>{{product.pivot.quantity}}</td>
                                        </tr>
                                    </table>
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
    // import Alert from './helpers/Alert';
    import moment from 'moment';
    import url from './helpers/URL';

    export default {
        name: "order",
        data() {
            return {
                order: {},
                device_id: '123456',
                loading:false
            }
        },
        created() {
            this.loadOrder()
        },
        methods: {
            loadOrder() {
                this.loading = true;
                const path = url(`/api/display-order/${this.$route.params.id}?device_id=${this.device_id}`);

                this.$http.get(path).then(response => {
                    this.order = response.data;
                    this.loading = false;
                }, (response) => {
                    this.loading = false;
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
    a.btn-info {
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }

    a.btn-info:hover {
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }

    table {
        box-shadow: -1px 0px 8px 2px #c6c2c2;
    }

    td.table-danger {
        background-color: #ea464f !important;
        color: white !important;
        font-weight: 600;
    }
</style>