<template>
<div class="flex flex-wrap w-full font-body">
<header  id="page-wrap"  v-bind:class="{ show: showlink }" class=" flex flex-wrap items-center lg:py-0  w-full xl:w-1/12  shadow-xl"
    style="background-color: #fff; transition:all .3s ease-in-out">

            <div class="scrollmenu hidden xl:flex mx-auto w-full xl:h-screen overflow-y-auto" id="menu">
                <nav v-if="showSidebar == true" class="w-full text-black" >
                <div   style="background-color: #fff;">
                    <div  v-bind:class="{show3: !showlink }"
                    class="navigation-icons flex flex-col items-center text-gray-500  mx-6 px-2">
                    <div @click="showlink = !showlink" class="flex flex-wrap px-4 py-5 d-hidden">
                        <i class=" fas fa-align-justify text-2xl text-right transform skew-y-3 mt-8 my-3 hover:text-indigo-800 cursor-pointer w-1/2 transition ease-in-out delay-200"></i>
                        </div>
                        <router-link to="/" class=" my-1   hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200" aria-hidden="true">
                              <i class="fas fa-archway"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Home
                            </a>
                        </router-link>
                        <router-link to="/form" class="my-1 justify-center  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                              <i class="fas fa-ankh"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Form
                            </a>
                        </router-link>
                        <router-link to="/project" class="my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="fab fa-affiliatetheme"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Project
                            </a>
                        </router-link>
                        <router-link to="/terms"  class="my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="fab fa-amazon-pay"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Terms
                            </a>
                        </router-link>
                        <router-link to="/staffs" class="  my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="fas fa-users"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Staffs
                            </a>
                        </router-link >
                        <router-link to="/stations" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="fas fa-globe-europe"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Stations
                            </a>
                        </router-link>
                        <router-link to="/calender" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="far fa-calendar-alt"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Calender
                            </a>
                        </router-link>
                        <router-link to="/pharmacy" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="far fa-calendar-alt"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            pharmacy
                            </a>
                        </router-link>
                        <router-link to="/appointment" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 transition ease-in-out delay-200">
                            <i class="fas fa-clock"></i>
                            <a v-show="showlink" class="text-base ml-2 font-semibold font-sans">
                            Appointment
                            </a>
                        </router-link>
                    </div>
                </div>
                </nav>
            </div>
        </header>

<div  v-bind:class="{ show2 : showlink}" class="xl:w-11/12 h-screen overflow-y-auto relative w-full">
<div class="relative lg:mx-12 my-1 px-12" style="min-height: 100vh;">
<div   style=" padding-bottom: 4rem;"  class="relative">
<!-- <div :class="tab_visible('Terms')">
<Terms></Terms>
</div> -->
<router-view></router-view>
</div>
<footer class="bg-white px-6 py-4 text-center text-sm w-full" style="  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;   ">
    Made by Zafer Mushtaha, the lovely developer ❤️<br>
    Copyright © zafer 2020
</footer>
</div>
</div>

    </div>
</template>
<script>
/*     import ProductTracker from './ProductTracker'
    import GoldenCalculator from './GoldenCalculator'
    import ProductGenerator from './ProductGenerator'
    import KeywordFinder from './KeywordFinder'

    import LogBoek from './LogBoek' */

export default ({

  data () {
    return {
      tempbolapi: '',
      bolapi: null,
      mobile_menu: false,
      showSidebar: true,
      showlink: true
    }
  },
  methods: {
  },
  created () {

  },
  mounted () {

  },

  components: {
    /*        ProductTracker,
            GoldenCalculator,
            ProductGenerator,
            LogBoek,
            KeywordFinder */
  }
})
</script>
<style scpoed>
.show{
    width: 18% !important;
}
.show2{
    width: 82% !important;
}
.show3{
    text-align: center;
    margin: 0rem 1.5rem 0rem 1.5rem;
    width: 50%;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left:0 !important;
    padding-right:0 !important;
}
.router-link-exact-active
{
background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);color: white;
}
.router-link-exact-active:hover{
color:white !important;
}

@media screen and (max-width: 1220px ) {
    .show{
width: 100% !important ;
    }
    .show2{
        width: 100% !important;

    }
    .d-hidden{
        display:none !important;
    }
}
</style>
