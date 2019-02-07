import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import Home from './components/Home.vue'
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue';
import Locations from './components/Locations.vue';
import BalanceLogin from './components/BalanceLogin.vue';
import Balance from './components/Balance.vue';
import Verify from './components/Verify.vue';
import NewOrder from './components/NewOrder.vue';
import Orders from './components/Orders.vue';
import Order from './components/Order.vue';
import Inquires from './components/Inquires.vue';
import Inquiry from './components/Inquiry.vue';
import Products from './components/Products'
import messages from './translations';
import swal from 'sweetalert';
import Cart from './components/Cart.vue'
import Book from './components/Book.vue'
import Checkpoint from './components/CheckPoint.vue'
import Session from './components/helpers/Session.js';

window.jQuery = require('jquery');
require('bootstrap-sass');

document.addEventListener('deviceready', () => {
    window.localStorage.device_id = device.uuid + '-' + device.serial;
});
Vue.prototype.device_id = () => window.localStorage.device_id;


var router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/contact-us', component: ContactUs},
        {path: '/locations', component: Locations},
        {path: '/login', component: BalanceLogin},
        {path: '/verify', component: Verify},
        {path: '/create-order', component: NewOrder},
        {path: '/display-orders', component: Orders},
        {path: '/orders/:id', component: Order},
        {path: '/inquires', component: Inquires},
        {path: '/inquires/:id', component: Inquiry},
        {path: '/balance', component: Balance},
        {path:'/products',component:Products},
        {path:'/cart-details',component:Book},
        {path:'/checkpoint',component:Checkpoint},
    ]
});

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueI18n);

const locale = Vue.config.lang = window.localStorage.locale || 'en';

const i18n = new VueI18n({
    locale, messages
});

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.prototype.$dispatch = function () {
    this.$emit(...arguments);
};

var App = new Vue({
    router, i18n, swal,
    el: '#app',
    data() {
        const locale = window.localStorage.locale;

        return {
            locale,loading: false,cart:[],
        }
    },

    computed: {
        layout_dir() {
            return (this.locale == 'ar')? 'rtl' : 'ltr';
        },

        nav_dir() {
            return (this.locale == 'ar')? 'text-align: right;' : 'text-align: left;';
        },

    },
    created(){
        Session.set('cart-products',[])
    },
    methods: {
        switchLanguage() {
            this.locale = (this.locale == 'en') ? 'ar' : 'en';
            window.localStorage.locale = Vue.config.lang = this.$i18n.locale = this.locale;
        }
    },
    components:{Cart}
});