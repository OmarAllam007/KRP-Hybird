<template>
    <div class="page-header" filter-color="gray" style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card-body">
                        <div class="col-lg-6 col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="nav nav-pills nav-pills-icons flex-column" role="tablist">
                                        <li class="nav-item">
                                            <router-link to="/balance" class="nav-link active" style="background-image: url(img/kit/back_w.png);  background-repeat: no-repeat;  background-position: bottom left;">
                                                <i class="fa fa-balance-scale"></i> {{$t('layout.balance')}}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/display-orders" class="nav-link active2" style="background-image: url(img/kit/back_g.png);  background-repeat: no-repeat;  background-position: bottom left;">
                                                <i class="fa fa-shopping-basket"></i> {{$t('layout.orders')}}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/inquires" rel="tooltip" title="" data-placement="bottom" class="nav-link active" style="background-image: url(img/kit/back_w.png);  background-repeat: no-repeat;  background-position: bottom left;">
                                                <i class="fa fa-envelope-open"></i> {{$t('layout.contact')}}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/about" class="nav-link active2" style="background-image: url(img/kit/back_g.png);  background-repeat: no-repeat;  background-position: bottom left;">
                                                <i class="fa fa-address-card"></i> {{$t('layout.about')}}
                                            </router-link>
                                        </li>
                                    </ul>
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
    export default {
        name: "home"
    }
</script>

<style scoped>
    
</style>