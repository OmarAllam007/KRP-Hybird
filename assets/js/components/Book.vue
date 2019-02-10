<template>
    <div class="page-header" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">

                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card-body">
                        <div class="col-lg-6 col-md-12">
                            <div class="row">
                                <div class="card card-signup">
                                    <!--<h2 class="card-title text-center"> {{$t('products.index')}} </h2>-->
                                    <div v-if="data.products.length" class="card-body">
                                        <table class="table table-bordered">
                                            <thead style="background-color: #DD163D;color: white;font-weight: 600;">
                                            <tr>
                                                <td>{{$t('product.product_name')}}</td>
                                                <td>{{$t('product.quantity')}}</td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, index) in data.products" :index="index">
                                                <td>{{item.name}}</td>
                                                <td>
                                                    <input type="number" class="form-control" v-model="item.quantity">
                                                </td>
                                                <td>
                                                    <a href="#" @click="removeProduct(index,item)"><i
                                                            class="fa fa-minus-circle"></i></a>
                                                </td>

                                            </tr>
                                            <tr style="background-color: #DD163D;color: white;font-weight: 600;">
                                                <td>Total</td>
                                                <td>{{total_quantity}}</td>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <fieldset>
                                            <div class="form-group">
                                                <label for="name" :class="{'text-danger':errors.name}">{{$t('products.form.name')}}
                                                    *</label>
                                                <input type="text" class="form-control" v-model="data.name" name="name"
                                                       id="name" autocomplete="off">
                                            </div>

                                            <div class="form-group">
                                                <label for="mobile" :class="{'text-danger':errors.mobile}">{{$t('products.form.mobile')}}
                                                    *</label>
                                                <input type="text" class="form-control" v-model="data.mobile"
                                                       name="mobile" id="mobile" autocomplete="off">
                                            </div>

                                            <div class="form-group">
                                                <label for="email" :class="{'text-danger':errors.email}">{{$t('products.form.email')}}
                                                    *</label>
                                                <input type="email" class="form-control" v-model="data.email"
                                                       name="email" id="email" autocomplete="off">
                                            </div>

                                            <div class="form-group">
                                                <label for="city" :class="{'text-danger':errors.city}">{{$t('products.form.city')}}
                                                    *</label>
                                                <select class="form-control" v-model="data.city" id="city">
                                                    <option value="0" selected>{{$t('labels.orders.select_branch') +
                                                        $t('layout.required')}}
                                                    </option>
                                                    <option value="AlAhsa">{{$t('labels.orders.city.AlAhsa')}}</option>
                                                    <option value="Dammam">{{$t('labels.orders.city.Dammam')}}</option>
                                                    <option value="Hail">{{$t('labels.orders.city.Hail')}}</option>
                                                    <option value="Jeddah">{{$t('labels.orders.city.Jeddah')}}</option>
                                                    <option value="Jubail">{{$t('labels.orders.city.Jubail')}}</option>
                                                    <option value="Madina">{{$t('labels.orders.city.Madina')}}</option>
                                                    <option value="Riyadh">{{$t('labels.orders.city.Riyadh')}}</option>
                                                </select>

                                            </div>

                                            <div class="form-group">
                                                <label for="mapCanvas">{{$t('products.form.location')}}</label>
                                                <div id="mapCanvas" class="mapCanvas"></div>

                                                <!--<input type="text" class="form-control" name="location" v-model="data.location" id="location" autocomplete="off">-->
                                            </div>

                                            <div class="form-group">
                                                <label for="delivery_date">{{$t('products.form.delivery_date')}}</label>
                                                <input type="date" class="form-control" name="delivery_date"
                                                       v-model="data.delivery_date" id="delivery_date"
                                                       autocomplete="off">
                                            </div>

                                            <div class="form-group">
                                                <label for="delivery_time">{{$t('products.form.delivery_time')}}</label>
                                                <input type="time" class="form-control" name="delivery_time"
                                                       v-model="data.delivery_time" id="delivery_time"
                                                       autocomplete="off">
                                            </div>


                                            <div class="form-group">
                                                <label for="description">{{$t('products.form.description')}}</label>
                                                <textarea class="form-control" name="description"
                                                          v-model="data.description" id="description"
                                                          rows="8"></textarea>
                                            </div>
                                        </fieldset>

                                        <ul>
                                            <li v-for="error in errors" class="text-danger" style="font-size:10pt">
                                                {{error}}
                                            </li>
                                        </ul>

                                        <div class="text-center">
                                            <button class="btn btn-primary" style="font-weight:600"
                                                    :disabled="!validToBooking" @click="bookOrder">
                                                <i class="fa fa-calendar-check"></i> {{$t('products.book')}}
                                            </button>
                                        </div>
                                    </div>

                                    <div v-else class="card-body text-center">
                                        <i class="fa fa-shopping-cart fa-4x cart-icon"></i>
                                        <p class="no_product">{{$t('products.no_items')}}</p>
                                        <router-link to="/products" class="btn btn-primary" style="font-weight:600">
                                            <i class="fa fa-cart"></i> {{$t('products.goShopping')}}
                                        </router-link>

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
    import EventBus from './helpers/EventBus'
    import Session from './helpers/Session.js';
    import url from '../components/helpers/URL'
    import CJSON from 'circular-json'


    export default {
        name: "Book",
        data() {
            let data = {
                name: '',
                mobile: '',
                email: '',
                location: '',
                delivery_date: '',
                delivery_time: '',
                products: [],
                latitude: '',
                longitude: '',
                map: '',
                user_location_city: ''
            };
            return {
                data,
                loading: false,
                errors: {}
            }
        },

        methods: {
            bookOrder() {
                this.loading = true;

                this.$http.post(url('/api/create-order'), JSON.parse(CJSON.stringify(this.data))).then(response => {
                    this.$parent.checkpoint = true
                    let alert_message_content = this.$t('alert.your_order_sent')
                    swal({
                        text: alert_message_content,
                        icon: 'success',
                        button: false,
                        timer: 8000,
                    });
                    Session.set('cart-products', response.data.products);
                    this.$parent.cart = response.data.products;
                    this.$router.push('/checkpoint');
                }, (response) => {
                    this.loading = false;
                    let errors = {};
                    for (let field in response.data) {
                        errors[field] = response.data[field][0];
                    }

                    this.errors = errors;
                });
            },
            removeProduct(index, item) {
                this.data.products.splice(index, 1);
                EventBus.$emit('remove-from-cart', item);
            },
            getMapLocation() {


                navigator.geolocation.getCurrentPosition
                ((position) => {
                    this.data.latitude = position.coords.latitude;
                    this.data.longitude = position.coords.longitude;

                    this.getMap(this.data.latitude, this.data.longitude);

                }, this.onMapError, {enableHighAccuracy: true});


            },
            getMap(latitude, longitude) {
                var mapOptions = {
                    center: new google.maps.LatLng(0, 0),
                    zoom: 1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                this.data.map = new google.maps.Map
                (document.getElementById("mapCanvas"), mapOptions);


                var latLong = new google.maps.LatLng(latitude, longitude);

                var marker = new google.maps.Marker({
                    position: latLong
                });

                marker.setMap(this.data.map);
                this.data.map.setZoom(15);
                this.data.map.setCenter(marker.getPosition());

                $.getJSON('//nominatim.openstreetmap.org/reverse?json_callback=?&format=json', {
                    lat: this.data.latitude,
                    lon: this.data.longitude
                }, (data) => {
                    this.data.user_location_city = data.address.city
                });
            },
            onMapError(error) {
                console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
            },
            watchMapPosition() {
                return navigator.geolocation.watchPosition
                ((position) => {

                    this.data.latitude = position.coords.latitude;
                    this.data.longitude = position.coords.longitude;
                    var updatedLatitude = position.coords.latitude;
                    var updatedLongitude = position.coords.longitude;

                    if (updatedLatitude != this.data.latitude && updatedLongitude != this.data.longitude) {

                        this.data.latitude = updatedLatitude;
                        this.data.longitude = updatedLongitude;

                        this.getMap(updatedLatitude, updatedLongitude);
                    }
                }, this.onMapError, {enableHighAccuracy: true});

            }
        },
        computed: {
            validToBooking() {
                return this.total_quantity !== '' && this.data.name !== '' && this.data.mobile !== '' && this.data.email;
            },
            total_quantity() {
                var count = this.data.products.reduce((item, product) => {
                    return item + parseInt(product.quantity);
                }, 0);

                return count ? count : '';
            }
        },
        created() {
            this.getMapLocation();
            this.watchMapPosition();
            this.data.products = Session.get('cart-products');
        }
    }
</script>

<style scoped>
    .mapCanvas {
        width: 300px;
        height: 200px;
        margin: 0 auto;
        background: gray;
    }

    .cart-icon {
        color: #e21638;
    }

    .no_product {
        margin-top: 18px;
    }
</style>