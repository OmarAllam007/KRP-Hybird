<template>
    <div class="page-header header-filter" filter-color="gray"
         style="background-image: url(img/kit/bg2.jpg); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h3 class="card-title text-center"> {{$t('location.locations')}} </h3>
                        <div class="card-body">
                            <div class="row">
                                <div class="container-fluid text-center">
                                    <div class="row">
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.229985620492!2d49.558694851579176!3d25.397111083724056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzQ5LjYiTiA0OcKwMzMnMzkuMiJF!5e0!3m2!1sen!2ssa!4v1524731360947" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a class="btn  btn-link btn-primary btn-lg"
                                                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.229985620492!2d49.558694851579176!3d25.397111083724056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzQ5LjYiTiA0OcKwMzMnMzkuMiJF!5e0!3m2!1sen!2ssa!4v1524731360947" target="_blank"
                                                >{{$t('location.head')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7823173665356!2d49.55691705157883!3d25.378611083732775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIyJzQzLjAiTiA0OcKwMzMnMzIuOCJF!5e0!3m2!1sen!2ssa!4v1524730239485" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn  btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7823173665356!2d49.55691705157883!3d25.378611083732775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIyJzQzLjAiTiA0OcKwMzMnMzIuOCJF!5e0!3m2!1sen!2ssa!4v1524730239485">{{$t('location.hasa')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.256974764573!2d50.02072265159182!3d26.44744438324831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzUwLjgiTiA1MMKwMDEnMjIuNSJF!5e0!3m2!1sen!2ssa!4v1524730690315" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.256974764573!2d50.02072265159182!3d26.44744438324831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzUwLjgiTiA1MMKwMDEnMjIuNSJF!5e0!3m2!1sen!2ssa!4v1524730690315"> {{$t('location.dammam')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.0461342579615!2d49.53543925159953!3d27.06029168298125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAzJzM3LjEiTiA0OcKwMzInMTUuNSJF!5e0!3m2!1sen!2ssa!4v1524730945930" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.0461342579615!2d49.53543925159953!3d27.06029168298125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAzJzM3LjEiTiA0OcKwMzInMTUuNSJF!5e0!3m2!1sen!2ssa!4v1524730945930">{{$t('location.jubail')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7816640101796!2d46.93875035157279!3d24.871305583970656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzE2LjciTiA0NsKwNTYnMjcuNCJF!5e0!3m2!1sen!2ssa!4v1524731052605" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7816640101796!2d46.93875035157279!3d24.871305583970656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzE2LjciTiA0NsKwNTYnMjcuNCJF!5e0!3m2!1sen!2ssa!4v1524731052605">{{$t('location.riyadh')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.5071025460143!2d39.48419485156717!3d24.39844438419684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIzJzU0LjQiTiAzOcKwMjknMTEuMCJF!5e0!3m2!1sen!2ssa!4v1524731139792" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.5071025460143!2d39.48419485156717!3d24.39844438419684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIzJzU0LjQiTiAzOcKwMjknMTEuMCJF!5e0!3m2!1sen!2ssa!4v1524731139792">{{$t('location.madinah')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.324576803949!2d39.264389251536315!3d21.57324998563586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzIzLjciTiAzOcKwMTUnNTkuNyJF!5e0!3m2!1sen!2ssa!4v1524731212986" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.324576803949!2d39.264389251536315!3d21.57324998563586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzIzLjciTiAzOcKwMTUnNTkuNyJF!5e0!3m2!1sen!2ssa!4v1524731212986">{{$t('location.jeddah')}}</a>
                                            </div>
                                            <div class="space-line">
                                            </div>
                                        </div>
                                        <div class="section-div">
                                            <div class="col-md-6">
                                                <iframe class="img-raised rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.421056499857!2d41.76150035160508!3d27.48727778279966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzE0LjIiTiA0McKwNDUnNDkuMyJF!5e0!3m2!1sen!2ssa!4v1524731296746" width="240px" height="90px" frameborder="0" style="border:0"></iframe>
                                                <a target="_blank" class="btn btn-link btn-primary btn-lg" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.421056499857!2d41.76150035160508!3d27.48727778279966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzE0LjIiTiA0McKwNDUnNDkuMyJF!5e0!3m2!1sen!2ssa!4v1524731296746">{{$t('location.hail')}}</a>
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
    export default {
        name: "locations"
    }
</script>

<style scoped>

</style>