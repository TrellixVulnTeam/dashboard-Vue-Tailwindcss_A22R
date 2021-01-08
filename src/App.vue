<template>
<div class="flex flex-wrap w-full font-body">
<header  id="page-wrap"  v-bind:class="{ show: showlink }" class=" flex flex-wrap items-center lg:py-0  w-full xl:w-1/12  shadow-xl"
    style="background-color: #fff; transition:all .3s ease-in-out">

            <div class="scrollmenu hidden xl:flex mx-auto w-full xl:h-screen overflow-y-auto" id="menu">
                <nav v-if="showSidebar == true" class="w-full text-black" >
                <div   style="background-color: #fff;">
                    <div  v-bind:class="{show3: !showlink }"
                    class="navigation-icons flex flex-col items-center text-gray-700  mx-6 px-2">
                    <div @click="showlink = !showlink" class="flex flex-wrap px-4 py-2 d-hidden">
                        <i class=" fas fa-align-justify text-2xl text-right transform skew-y-3 mt-8 my-3 hover:text-indigo-800 cursor-pointer w-1/2 transition ease-in-out delay-100"></i>
                        </div>
                        <i @click="selected_menu = 'Dashboard'"  :style="getclass('Dashboard')" class=" my-1   hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100" aria-hidden="true">
                              <i class="fas fa-archway"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Home
                            </a>
                        </i>
                        <i @click="selected_menu = 'Home'" :style="getclass('Home')" class=" my-1   hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100" aria-hidden="true">
                            <i class="fas fa-home"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Dashboard
                            </a>
                        </i>
                        <i @click="selected_menu = 'Project'" :style="getclass('Project')" class="my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="fab fa-affiliatetheme"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Project
                            </a>
                        </i>
                        <i @click="selected_menu = 'Terms'" :style="getclass('Terms')" class="my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="fab fa-amazon-pay"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Invoice
                            </a>
                        </i>
                        <i  @click="selected_menu = 'Staffs'" :style="getclass('Staffs')" class="  my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="fas fa-users"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Staffs
                            </a>
                        </i >
                        <i  @click="selected_menu = 'Stations'" :style="getclass('Stations')" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="fas fa-globe-europe"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Stations
                            </a>
                        </i>
                        <i  @click="selected_menu = 'Calender'" :style="getclass('Calender')" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="far fa-calendar-alt"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Calender
                            </a>
                        </i>
                        <i @click="selected_menu = 'Product'" :style="getclass('Product')" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                           <i class="fas fa-pager"></i>
                            <a v-show="showlink" class="text-base ml-4 font-semibold font-sans">
                            Product
                            </a>
                        </i>
                        <i @click="selected_menu = 'GoldenCalculator'" :style="getclass('GoldenCalculator')" class=" my-1  hover:text-indigo-800 cursor-pointer w-full rounded p-4 px-2 transition ease-in-out delay-100">
                            <i class="fas fa-calculator"></i>
                            <a v-show="showlink" class="text-base ml-2 font-semibold font-sans">
                            GoldenCalc
                            </a>
                        </i>

                    </div>
                </div>
                </nav>
            </div>
        </header>

<div  v-bind:class="{ show2 : showlink}" class="xl:w-11/12 h-screen overflow-y-auto relative w-full bg-gray-100">
<div class="relative" style="min-height: 100vh;">
<div   style=" padding-bottom: 4rem;"  class="relative">
<Navbar/>
<div :class="tab_visible('Terms')">
    <Terms></Terms>
</div>
<div :class="tab_visible('Home')">
    <Level></Level>
</div>
<div :class="tab_visible('Dashboard')">
    <Dashboard></Dashboard>
</div>
<div :class="tab_visible('Project')">
    <Project></Project>
</div>
<div :class="tab_visible('Staffs')">
    <Staffs></Staffs>
</div>
<div :class="tab_visible('Product')">
    <Product></Product>
</div>
<div :class="tab_visible('Stations')">
    <Stations></Stations>
</div>
<div :class="tab_visible('Calender')">
    <Calender></Calender>
</div>
<div :class="tab_visible('GoldenCalculator')">
    <GoldenCalculator></GoldenCalculator>
</div>

<!-- <router-view></router-view> -->
</div>
<footer class="px-6 py-4 text-center text-sm w-full" style="  position: absolute;
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

export default ({

  data () {
    return {
      tempbolapi: '',
      bolapi: null,
      mobile_menu: false,
      showSidebar: true,
      showlink: true,
      selected_menu: 'Dashboard'
    }
  },
  methods: {
    tab_visible (tab) {
      if (tab === this.selected_menu) {
        return 'block'
      } else {
        return 'hidden'
      }
    },
    getclass (active) {
      if (active === this.selected_menu) {
        return 'background: linear-gradient(to right, rgb(130, 122, 243) 0%, rgb(180, 122, 243) 100%) !important;;color: white;'
      }
    }
  },
  created () {

  },
  mounted () {

  },

  components: {
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
    background: linear-gradient(to right, rgb(130, 122, 243) 0%, rgb(180, 122, 243) 100%) !important;;color: white;

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
