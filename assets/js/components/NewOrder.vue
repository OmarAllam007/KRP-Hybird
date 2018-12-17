<template>
    <div class="page-header header-filter" filter-color="gray" style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">{{$t('order.new')}}</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group">
                                    <router-link class="btn btn-info btn-block" to="/display-orders"><i class="fa fa-history"></i>
                                        {{$t('order.orders')}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 mr-auto">
                                    <form class="form" @submit.prevent="newOrder">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <input type="text" name="mobile" class="form-control" v-model="data.mobile"
                                                    :placeholder="$t('labels.mobile') + $t('layout.required')">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <input type="text" name="id_num" class="form-control" v-model="data.id_number"
                                                    :placeholder="$t('labels.id_num_description')">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <select class="form-control" v-model="data.branch" placeholder="Select Branch (required)">
                                                    <option value="0" selected>{{$t('labels.orders.select_branch') + $t('layout.required')}}</option>
                                                    <option value="AlAhsa">{{$t('labels.orders.city.AlAhsa')}}</option>
                                                    <option value="Dammam">{{$t('labels.orders.city.Dammam')}}</option>
                                                    <option value="Hail">{{$t('labels.orders.city.Hail')}}</option>
                                                    <option value="Jeddah">{{$t('labels.orders.city.Jeddah')}}</option>
                                                    <option value="Jubail">{{$t('labels.orders.city.Jubail')}}</option>
                                                    <option value="Madina">{{$t('labels.orders.city.Madina')}}</option>
                                                    <option value="Riyadh">{{$t('labels.orders.city.Riyadh')}}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div :class="'form-group'">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"></span>
                                                </div>
                                                <select name="order_type" id="order_type" v-model="data.order_type"
                                                    class="form-control">
                                                    <option value="">{{$t("order.order_type") + $t("layout.required")}}</option>
                                                    <option value="blocks">{{$t('labels.orders.blocks')}}</option>
                                                    <option value="readymix">{{$t('labels.orders.readymix')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div :class="'form-group'" v-show="data.order_type == 'readymix'">
                                            <label for="readymix_type" class="control-label">
                                                {{$t("labels.orders.readymix")}} <span class="red">*</span>
                                            </label>
                                            <select name="readymix_type" id="readymix_type" v-model="data.readymix_type"
                                                class="form-control">
                                                <option value="">{{$t("labels.orders.select_readymix_type")}}
                                                </option>
                                                <option value="C15">C15</option>
                                                <option value="C20">C20</option>
                                                <option value="C25">C25</option>
                                                <option value="C30">C30</option>
                                                <option value="C35">C35</option>
                                                <option value="C40">C40</option>
                                                <option value="C45">C45</option>
                                                <option value="C50">C50</option>
                                                <option value="C55">C55</option>
                                            </select>
                                        </div>


                                        <div :class="'form-group '" v-show="data.order_type == 'blocks'">
                                            <label for="blocks_type" class="control-label">
                                                {{$t("labels.orders.select_blocks_type")}}
                                                <span class="red">*</span></label>
                                            <select name="blocks_type" id="blocks_type" v-model="data.blocks_type"
                                                class="form-control">
                                                <option value="">{{$t("labels.orders.select_blocks_type")}}</option>
                                                <option value="Cement Block 10 CM">Cement Block 10 CM</option>
                                                <option value="Cement Block 15 CM">Cement Block 15 CM</option>
                                                <option value="Cement Block 20 CM">Cement Block 20 CM</option>
                                                <option value="Cement Block 25 CM">Cement Block 25 CM</option>
                                                <option value="Insulated Blocks 15">Insulated Blocks 15</option>
                                                <option value="Insulated Blocks 20">Insulated Blocks 20</option>
                                                <option value=""></option>
                                            </select>
                                        </div>

                                        <div :class="'form-group '" v-show="data.order_type">
                                            <label for="amount" class="control-label" v-if="data.order_type=='readymix'">
                                                {{$t('labels.orders.amount')}} (
                                                <span >m<sup>3</sup></span>
                                                )
                                            </label>

                                            <label for="amount" class="control-label" v-else>
                                                {{$t('labels.orders.quantity')}} (
                                                <span >Pieces</span>
                                                )
                                                <span class="red">*</span>
                                            </label>


                                            <input type="number" v-model="data.amount" name="amount" id="amount" class="form-control">
                                        </div>

                                        <div class="form-group">
                                            <label for="blocks_type" class="control-label">
                                                {{$t("labels.orders.delivery_date")}}
                                                <span class="red">*</span>
                                            </label>
                                            <input type="date" class="form-control" v-model="data.delivery_date">
                                        </div>

                                        <div class="form-group">

                                            <label for="blocks_type" class="control-label">
                                                {{$t("labels.orders.delivery_time")}}
                                                <span class="red">*</span>
                                            </label>
                                            <input type="time" class="form-control" v-model="data.delivery_time">

                                        </div>

                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"></span>
                                                </div>
                                                <textarea class="form-control" cols="30" rows="4" v-model="data.comments"
                                                    :placeholder="$t('labels.orders.comments')"></textarea>
                                            </div>
                                        </div>
                                        <ul>
                                            <li v-for="error in errors" class="text-danger" style="font-size:10pt">
                                                {{error}}
                                            </li>
                                        </ul>
                                        <div class="text-center">
                                            <button class="btn btn-primary btn-round" :disabled="!canSend">
                                                <i class="fa fa-send-o"></i> {{$t('labels.send')}}
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
</template>

<script>
    import Session from './helpers/Session.js';
    import url from '../components/helpers/URL'
    import Alert from '../components/Alert'

    export default {
        name: "create-order",
        data() {
            return {
                data: {
                    mobile: '',
                    id_number: '',
                    branch: 0,
                    order_type: '',
                    amount: '',
                    comments: '',
                    delivery_date: '',
                    delivery_time: '',
                    type: '',
                    readymix_type: '',
                    blocks_type: '',
                    amount: 0,
                    // device_id: this.device_id()
                    device_id: '123456',

                },
                alert_message: {
                    message: '',
                    type: ''
                },
                errors:{}
            }
        },
        created() {

},
        methods: {
            newOrder() {
                this.$http.post(url('/api/orders/create-order'), this.data).then(response => {
                    let alert_message_content = this.$t('alert.your_order_sent')
                    swal({
                        text: alert_message_content,
                        icon: 'success',
                        button: false,
                        timer: 8000,
                    });

                    this.$router.push('/display-orders');
                    // this.$parent.loading = false;
                }, response => {
                    let alert_message_content = this.$t('alert.cannot_send_order')
                    swal({
                        text: alert_message_content,
                        icon: 'error',
                        button: false,
                        timer: 8000,
                    });
                    // this.alert.type = 'error';

                    let errors = {};
                    for (let field in response.data.errors) {
                        errors[field] = response.data.errors[field][0];
                    }

                    this.errors = errors;
                    // this.$parent.loading = false;
                });
            }
        },
        computed: {
            canSend() {
                return this.data.mobile.length && this.data.branch != 0 && this.data.order_type != 0 && this.data.delivery_date
                    .length
            }
        },
        watch: {
        
        },
        components: {
            Alert
        }
    }
</script>

<style scoped>
    a.btn-info{
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }
    a.btn-info:hover{
        background-color: #939393 !important;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 3px 1px -2px rgba(0, 1, 1, 0.2), 0 1px 5px 0 rgba(0, 19, 22, 0.27);
    }
</style>