<template>
    <div>
        <div class="mx-10 px-8">
        <div class="grid grid-cols-3 gap-4 my-12">
            <div class="bg-white rounded-xl shadow">
                <div class="p-6">
                    <div><p class="text-gray-700 text-xl">Best Person</p></div>
                    <div class="my-3">
                        <div :class="`shadow-md rounded-md p-3 my-4 flex justify-between items-center ${item.cborder}`" v-for="(item,index) in persons" :key="index">
                            <div class="flex">
                                <div class="img w-12 h-12"><img class="rounded-full" :src="item.avatar"></div>
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
                                <img src="@/assets/chart.svg">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-4">
                        <div>
                            <p class="text-gray-700 text-lg">Total Visitors</p>
                            <p class="font-medium text-gray-800 my-1">
                                <animated-number
                                easing="linear"
                                :value="17241"
                                :formatValue="formatToPrice"
                                :duration="4000"
                                />
                            </p>
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
                            <img src="@/assets/chart.svg">
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4">
                    <div>
                        <p class="text-gray-700 text-lg">Paid Visitors</p>
                        <p class="font-medium text-gray-800 my-1">
                            <animated-number
                            easing="linear"
                            :value="45395"
                            :formatValue="formatToPrice"
                            :duration="4000"
                            />
                        </p>
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
                <p class="text-gray-700">TEAM A</p>
                <p class="text-gray-500 text-center">
                    <animated-number
                    easing="linear"
                    :value="77"
                    :formatValue="formatpercent"
                    :duration="3000"
                    />
                </p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM B</p>
                <p class="text-gray-500 text-center">
                  <animated-number
                  easing="linear"
                  :value="84"
                  :formatValue="formatpercent"
                  :duration="3000"
                  />
                </p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM C</p>
                <p class="text-gray-500 text-center">
                  <animated-number
                  easing="linear"
                  :value="94"
                  :formatValue="formatpercent"
                  :duration="3000"
                  />
                </p>
              </div>
              <div class="pl-1">
                <p class="text-gray-700">TEAM D</p>
                <p class="text-gray-500 text-center">
                <animated-number
                easing="linear"
                :value="94"
                :formatValue="formatpercent"
                :duration="3000"
                />
                </p>
              </div>
            </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 bg-white rounded-xl p-4">
                <div class="p-2"><p class="text-gray-800 text-xl">Status Level</p></div>
                <div>
                    <apexchart type="scatter" height="350" :options="chartOptions" :series="seriesOptions"></apexchart>
                </div>
            </div>
            <div class="bg-white rounded-xl p-4">
                <div class="p-2"><p class="text-gray-800 text-xl">Status Level</p></div>
                <div class="grid col-1 gap-4">
                    <div class="bg-white rounded-xl flex p-4 justify-between items-center shadow-md">
                        <div class="icon flex justify-center items-center  rounded-full bg-green-600 w-12 h-12" style="background:linear-gradient(to right, rgb(49 229 117) 0%, rgb(86 248 151) 100%)">
                            <img class="h-6 w-6" src="@/assets/wheelchair.svg">
                        </div>
                        <div class="text-right text-lg">
                            <p class="text-gray-700">Health Insurance</p>
                            <p class="font-semibold text-green-500">
                                <animated-number
                                easing="linear"
                                :value="25281"
                                :formatValue="formatToPrice"
                                :duration="4000"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl flex p-4 justify-between items-center shadow-md">
                        <div class="icon flex justify-center items-center  rounded-full w-12 h-12" style="background: linear-gradient(to right,#fbc647 0%,#ffd369 100%);">
                            <img class="h-6 w-6" src="@/assets/handshake.svg">
                        </div>
                        <div class="text-right text-lg">
                            <p class="text-gray-700">Health Insurance</p>
                            <p class="font-semibold text-yellow-500">
                                <animated-number
                                easing="linear"
                                :value="25281"
                                :formatValue="formatToPrice"
                                :duration="4000"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl flex p-4 justify-between items-center shadow-md">
                        <div class="icon flex justify-center items-center  rounded-full w-12 h-12" style="background: linear-gradient(to right, #67ddea 0%, #6ce6f4 100%);
">
                            <img class="h-6 w-6" src="@/assets/health-care.svg">
                        </div>
                        <div class="text-right text-lg">
                            <p class="text-gray-700">Social Insurance</p>
                            <p class="font-semibold text-blue-400">
                                <animated-number
                                easing="linear"
                                :value="25281"
                                :formatValue="formatToPrice"
                                :duration="4000"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl flex p-4 justify-between items-center
                     shadow-md">
                        <div class="icon flex justify-center items-center  rounded-full w-12 h-12" style="background: linear-gradient(to right, #827af3 0%, #b47af3 100%) !important">
                            <img class="h-6 w-6" src="@/assets/building.svg">
                        </div>
                        <div class="text-right text-lg">
                            <p class="text-gray-700">Auto Insurance</p>
                            <p class="font-semibold text-blue-400">
                                <animated-number
                                easing="linear"
                                :value="25281"
                                :formatValue="formatToPrice"
                                :duration="4000"
                                />
                            </p>
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
  data () {
    return {
      persons: [
        { name: 'Pete Sariya', due: '24 jan, 2020', no: 157, cborder: 'primary', avatar: require('@/assets/staff/06.jpg') },
        { name: 'Anna Mull', due: '15 feb, 2020', no: 280, cborder: 'success', avatar: require('@/assets/staff/07.jpg') },
        { name: 'Alex john', due: '05 March, 2020', no: 200, cborder: 'danger', avatar: require('@/assets/staff/08.jpg') },
        { name: 'Cliff Hanger', due: '10 April, 2020', no: 150, cborder: 'info', avatar: require('@/assets/staff/09.jpg') }
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
                label: 'TOTAL',
                value: 46
              }
            }
          }
        },
        labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
      },
      chartOptions: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
      },
      seriesOptions: [{
        name: 'SAMPLE A',
        data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
      }, {
        name: 'SAMPLE B',
        data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
      }, {
        name: 'SAMPLE C',
        data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
      }]
    }
  },
  methods: {
    formatToPrice (value) {
      return `${Number(value).toFixed(0)}`
    },
    formatpercent (value) {
      return `${Number(value).toFixed(0)}%`
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
