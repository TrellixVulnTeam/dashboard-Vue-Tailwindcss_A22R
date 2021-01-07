<template>
<div>
<div class="text-gray-600 bg-white w-full shadow py-1 h-20" style="position: sticky;">
    <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
        <div class="lg:w-1/3 w-full">
        <input type="text" class="bg-gray-200 text-black leading-10 w-full px-4 focus:outline-none focus:border-indigo-700 rounded-full" placeholder="Type here to search..." >
        <a style="position: absolute;top: 24px;left: 343px; font-size: 16px;"><i class="fas fa-search"></i></a>
        </div>
        <div>
          <div class="icon flex justify-between items-center">
            <div class="mx-6 w-4 h-4 animate-bounce delay-700">
              <span class=""><img src="@/assets/icon/bell.svg" alt=""></span>
              <span class="animate-pulse bg-red-500 text-center p-0 rounded-full absolute h-1 w-1" style=" top: -8px;
                  right: 2px;animation: shadow-pulse-dots 1s infinite;"></span>
            </div>
            <div class="mx-6 w-4 h-4 animate-bounce delay-500">
              <span class=""><img src="@/assets/icon/email.svg" alt=""></span>
              <span class="animate-pulse text-center p-0 rounded-full absolute h-1 w-1" style="background: #827af3; top: -8px; right: 2px;"></span>
            </div>
            <div class="profile flex justify-center items-center">
              <div class="w-10 h-10"><img class="rounded-full" src="@/assets/staff/06.jpg"></div>
              <div class="ml-1">
                <span>Rock lai</span>
                <span class="ml-1 text-xs"><i class="fas fa-chevron-down"></i></span>
              </div>
            </div>
            <div class="mx-6 w-5 h-5 animate-spin delay-300">
              <span class=""><img src="@/assets/icon/settings.svg" alt=""></span>
            </div>
          </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
