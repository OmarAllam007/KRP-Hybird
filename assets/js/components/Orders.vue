<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">{{$t('order.orders')}}</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group">
                                    <router-link class="btn btn-primary btn-block" to="/create-order"><i
                                            class="fa fa-plus"></i> {{$t('order.new')}}
                                    </router-link>
                                </div>

                                <section class="card" v-if="orders.length">
                                    <article class="card-body" v-for="order in orders" :key="order.id">
                                        <table class="table table-bordered">
                                            <tbody>
                                            <tr>
                                                <td class="table-danger">{{$t('order.order_date')}}</td>
                                                <td>{{ order.created_at }}</td>
                                            </tr>
                                            <tr>
                                                <td class="table-danger">{{$t('order.order_type')}}</td>
                                                <td>{{ order.order_type }}</td>
                                            </tr>
                                            <tr>
                                                <td class="table-danger">{{$t('order.delivery_date')}}</td>
                                                <td>{{ order.delivery_date_time }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <router-link :to="`/orders/${order.id}`" class="btn btn-info btn-block btn-sm">
                                            {{$t('order.show_more')}}
                                        </router-link>
                                    </article>
                                </section>
                                <div class="alert alert-info" v-else><i class="fa fa-info-circle"></i>
                                    {{$t('order.no-orders')}}
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

    export default {
        name: "orders",
        data() {
            return {
                // alert: Session.getFlash(),
                orders: []
            }
        },
        created() {
            this.loadOrders();
        },
        methods: {
            loadOrders() {
                // this.$parent.loading = true;
                let device_id = '123456'
                this.$http.get(url('/api/orders/display'), {device_id: device_id}).then(response => {
                    this.orders = response.data.data;
                    // this.$parent.loading = false;
                }, () => {
                    // this.$parent.loading = false;
                });
            },

            displayOrder(id) {
                this.$router.push(`/orders/${id}`);
            }
        },
    }
</script>

<style scoped>

</style>