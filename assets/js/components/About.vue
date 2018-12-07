<template>
    <div>
        <div class="page-header header-filter" data-parallax="true"
             style="background-image: url('img/kit/bg3.jpg');"></div>
        <div class="main main-raised" style="margin-bottom: 15px">
            <div class="profile-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <div class="profile">
                                <div class="avatar">
                                    <img src="img/kit/faces/christian.jpg" alt="Circle Image" class="img-raised rounded img-fluid">
                                </div>
                                <div class="name">
                                    <h3 class="title">  {{$t('about.title')}} </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <p>{{$t('about.content')}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

</style>