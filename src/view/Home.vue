<template>
    <div class="container body">
        <div class="main_container">
            <div class="col-md-3 left_col menu_fixed">
                <div class="left_col scroll-view">
                    <div class="navbar nav_title" style="border: 0;">
                        <a href="index.html" class="nav site_title"><i style="border:0;"><img src="images/logob.png" class="" style="height:35px;" alt="Protagonist"></i></a>
                    </div>
                    <div class="clearfix"></div>
                    <br><br><br>
                    <!-- sidebar menu -->
                    <Menu :course=this.course></Menu>
                    <!-- /sidebar menu -->
                </div>
            </div>
            <!-- top navigation -->
            <TopNav></TopNav>
            <!-- /top navigation -->
            <!-- page content -->
            <div class="right_col" role="main" style="background:#000000">
                <div class="">

                    <div class="clearfix"></div>

                    <div class="row text-center">
                        <div class="col-md-8 col-sm-offset-2 col-sm-12 col-xs-12">
                            <h3 style="color:#fff">{{ aula }}</h3>
                            <div class='embed-container'>
                                <iframe src="https://player.vimeo.com/video/333486144" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page content -->
        <!-- footer content -->
        <Footer></Footer>
        <!-- /footer content -->
    </div>
</template>

<script>
    import Menu from './../components/Menu';
    import Footer from './../components/Footer';
    import TopNav from './../components/TopNav';
    export default {
        name: "Home",
        components: {
            Menu,
            Footer,
            TopNav,
        },
        data(){
            return {
                course: 'Curso 1'
            }
        }
    }
</script>

<style scoped>

</style>
