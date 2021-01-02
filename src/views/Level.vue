<template>
    <div>
        <div class="text-gray-600 bg-white w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
        <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
            <div class="lg:w-1/4 w-full">
            <p class="text-gray-700 text-3xl text-start font-serif">Dashboard</p>
            </div>
            <div class="lg:w-1/3 w-full">
            <input type="text" class="bg-gray-200 text-black form-text-input w-full px-4 focus:outline-none focus:border-indigo-700 rounded-md" placeholder="Type here to search..." >
            <a style="position: absolute;right: 24px; top: 30px; font-size: 16px;"><i class="fas fa-search"></i></a>
            </div>
        </div>
        </div>

        <div class="grid grid-cols-3 gap-4 my-12">
            <div class="bg-white rounded-xl">
                <div class="p-6">
                    <div><p class="text-gray-700 text-xl">Best Person</p></div>
                    <div class="my-3">
                        <div :class="`shadow-md rounded-md p-3 my-4 flex justify-between items-center ${item.cborder}`" v-for="(item,index) in persons" :key="index">
                            <div class="flex">
                                <div class="img w-12 h-12"><img class="rounded-full" src="../assets/images/avataruser.jpg"></div>
                                <div class="mx-2">
                                    <p class="text-gray-700">{{item.name}}</p>
                                    <p class="text-gray-500 text-sm">{{item.due}}</p>
                                </div>
                            </div>
                            <div><span :class="`px-1 rounded text-white font-semibold bg ${item.cborder}`">{{item.no}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-between">
                <div class="bg-white shadow rounded-xl">
                    <div class="p-4 rounded-xl flex justify-between items-center text-white rounded-md" style="background: linear-gradient(to right, #827af3 0%,#b47af3 100%) !important;">
                        <div>
                            <div class="icon flex justify-center items-center border border-white rounded-lg  w-12 h-12" style="background: linear-gradient(to right, #827af3 0%,#b47af3 100%) !important">
                                <i class="fas fa-user-alt"></i>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between items-center">
                                <span class="bg-white p-1 rounded mr-2"></span>
                                <p>New Visitor</p>
                            </div>
                            <div class="w-8 h-8">
                                <img src="../assets/chart.svg">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-4">
                        <div>
                            <p class="text-gray-700 text-lg">Total Visitors</p>
                            <p class="font-medium text-gray-800 my-1">17,241</p>
                        </div>
                        <div class="h-20">
                            <progress-bar
                                :options="optionsone"
                                :value="valueone"
                                />
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow rounded-xl">
              <div class="p-5 rounded-xl flex justify-between items-center text-white rounded-md" style="background: linear-gradient(to right, #67ddea 0%, #6ce6f4 100%);">
                    <div>
                        <div class="icon flex justify-center items-center border border-white rounded-lg  w-12 h-12" style="background: linear-gradient(to right, #67ddea 0%, #6ce6f4 100%);">
                            <i class="fas fa-user-alt"></i>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center">
                            <span class="bg-white p-1 rounded mr-2"></span>
                            <p>New Visitor</p>
                        </div>
                        <div class="w-8 h-8">
                            <img src="../assets/chart.svg">
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4">
                    <div>
                        <p class="text-gray-700 text-lg">Paid Visitors</p>
                        <p class="font-medium text-gray-800 my-1">45,395</p>
                    </div>
                    <div class="h-20">
                    <progress-bar
                        :options="optionstwo"
                        :value="valuetwo"
                        />
                    </div>
                </div>

                </div>
            </div>
            <div class="bg-white shadow rounded-xl">
            <div class="p-4 text-gray-800 text-xl">
              <p>Total Progress</p>
            </div>
            <div>
            <apexchart height="300" :options="options1" :series="series"></apexchart>
            </div>
            <div class="mt-8 px-6 flex justify-between item-center divide-x divide-gray-500">
              <div class="">
                <p class="text-gray-700">TOTAL</p>
                <p class="text-gray-500">77%</p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM A</p>
                <p class="text-gray-500">84%</p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM B</p>
                <p class="text-gray-500">94%</p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM C</p>
                <p class="text-gray-500">94%</p>
              </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      persons: [
        { name: 'Pete Sariya', due: '24 jan, 2020', no: 157, cborder: 'primary' },
        { name: 'Anna Mull', due: '15 feb, 2020', no: 280, cborder: 'success' },
        { name: 'Alex john', due: '05 March, 2020', no: 200, cborder: 'danger' },
        { name: 'Cliff Hanger', due: '10 April, 2020', no: 150, cborder: 'info' }
      ],
      primary: '#007bff',
      success: '#28a745',
      danger: '#dc3545',
      info: '#17a2b8',
      valueone: '67',
      valuetwo: '48',
      optionsone: {
        text: {
          color: '#827af3',
          shadowEnable: false,
          shadowColor: '#000000',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: '#827af3',
          backgroundColor: '#eef1f7'
        },
        layout: {
          height: 35,
          width: 140,
          verticalTextAlign: 56,
          horizontalTextAlign: 56,
          strokeWidth: 15,
          progressPadding: 12,
          type: 'circle'
        }
      },
      optionstwo: {
        text: {
          color: '#6ce6f4',
          shadowEnable: false,
          shadowColor: '#000000',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: '#6ce6f4',
          backgroundColor: '#eef1f7'
        },
        layout: {
          height: 35,
          width: 140,
          verticalTextAlign: 56,
          horizontalTextAlign: 56,
          strokeWidth: 15,
          progressPadding: 0,
          zeroOffset: 40,
          type: 'circle'
        }
      },
      series: ['77', '77', '84', '97'],
      options1: {
        chart: {
          height: 280,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: 'TOTAL'
              }
            }
          }
        },
        labels: ['TOTAL', 'TEAM A', 'TEAM B', 'TEAM C']
      }
    }
  }
}
</script>
<style scoped>
.primary{
    border-left:3px solid  #007bff!important;
}
.success{
    border-left:3px solid #28a745!important;
}
.danger{
    border-left:3px solid  #dc3545!important
}
.info{
    border-left:3px solid  #17a2b8!important;
}
.bg.primary{
    background: #007bff!important;
}
.bg.success{
    background: #28a745!important;
}
.bg.danger{
    background: #dc3545!important;
}
.bg.info{
    background: #17a2b8!important;
}
.vuejs-progress-bar{
width:unset !important;
}
.flex-col{
height:unset !important;
max-height:unset !important;
}
</style>
