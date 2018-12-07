<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">New Order</h2>
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="form-group">
                                    <router-link class="btn btn-info btn-block" to="/display-orders"><i
                                            class="fa fa-history"></i> Orders
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
                                                <input type="text" name="mobile" class="form-control"
                                                       v-model="data.mobile"
                                                       placeholder="Mobile (required) ">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <input type="text" name="id_num" class="form-control"
                                                       v-model="data.id_number"
                                                       placeholder="ID Number">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"> </span>
                                                </div>
                                                <select class="form-control" v-model="data.branch"
                                                        placeholder="Select Branch (required)">
                                                    <option value="0" selected>Select Branch (required)</option>
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

                                        <div :class="'form-group'">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"></span>
                                                </div>
                                                <select name="order_type" id="order_type" v-model="data.order_type"
                                                        class="form-control">
                                                    <option value="">Select Order Type (required)</option>
                                                    <option value="blocks">Blocks</option>
                                                    <option value="readymix">Readymix</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div :class="'form-group'" v-show="data.order_type == 'readymix'">
                                            <label for="readymix_type" class="control-label">
                                                ReadyMix <span class="red">*</span>
                                            </label>
                                            <select name="readymix_type" id="readymix_type" v-model="data.readymix_type"
                                                    class="form-control">
                                                <option value="">Select Readymix</option>
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
                                                Block Type
                                                <span class="red">*</span></label>
                                            <select name="blocks_type" id="blocks_type" v-model="data.blocks_type"
                                                    class="form-control">
                                                <option value="">Select Block Type</option>
                                                <option value="Cement Block 10 CM">Cement Block 10 CM</option>
                                                <option value="Cement Block 15 CM">Cement Block 15 CM</option>
                                                <option value="Cement Block 20 CM">Cement Block 20 CM</option>
                                                <option value="Cement Block 25 CM">Cement Block 25 CM</option>
                                                <option value="Insulated Blocks 15">Insulated Blocks 15</option>
                                                <option value="Insulated Blocks 20">Insulated Blocks 20</option>
                                                <option value=""></option>
                                            </select>
                                        </div>

                                        <div :class="'form-group '"
                                             v-show="data.order_type">
                                            <label for="amount" class="control-label">
                                                Amount (
                                                <span v-if="data.order_type=='readymix'">m<sup>3</sup></span>
                                                <span v-else>Pieces</span>
                                                )

                                                <span class="red">*</span>
                                            </label>
                                            <input type="number" v-model="data.amount" name="amount" id="amount"
                                                   class="form-control">
                                        </div>

                                        <div class="form-group">
                                                <label for="blocks_type" class="control-label">
                                                    Delivery Date
                                                    <span class="red">*</span>
                                                </label>
                                                <input type="date" class="form-control" v-model="data.delivery_date">
                                        </div>

                                        <div class="form-group">

                                                <label for="blocks_type" class="control-label">
                                                    Delivery Time
                                                    <span class="red">*</span>
                                                </label>
                                                <input type="time" class="form-control"
                                                       v-model="data.delivery_time">

                                        </div>

                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-textarea"></span>
                                                </div>
                                                <textarea class="form-control" cols="30" rows="4"
                                                          v-model="data.comments"
                                                          placeholder="Comments"></textarea>
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button class="btn btn-primary btn-round" :disabled="!canSend">
                                                <i class="fa fa-send-o"></i> Send
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
                    device_id: '123456'
                }
            }
        },
        created() {

        },
        methods: {
            newOrder() {
                this.$http.post(url('/api/orders/create-order'), this.data).then(response => {
                    // Session.flash(this.$t('alert.your_order_sent'), 'ok');
                    this.$router.push('/display-orders');
                    // this.$parent.loading = false;
                }, response => {
                    // this.alert.message = this.$t('alert.cannot_send_order');
                    // this.alert.type = 'error';

                    // let errors = {};
                    // for (let field in response.data) {
                    //     errors[field] = response.data[field][0];
                    // }
                    //
                    // this.errors = errors;
                    // this.$parent.loading = false;
                });
            }
        },
        computed: {
            canSend() {
                return this.data.mobile.length && this.data.branch !== 0 && this.data.order_type !== 0 && this.data.delivery_date.length
            }
        },
        watch: {
            // order_type(val) {
            //     if (val === 'blocks') {
            //         this.data.blocks_type = val
            //         this.data.readymix_type = '';
            //     }
            //     else if (val === 'readymix') {
            //         this.data.readymix_type = val;
            //         this.data.blocks_type = '';
            //     } else {
            //         this.readymix_type = '';
            //         this.data.blocks_type = '';
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>