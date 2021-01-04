<template>
    <div>
     <div class="text-gray-600 bg-white w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
        <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
            <div class="lg:w-1/4 w-full">
            <p class="text-gray-700 text-3xl text-start font-serif">Tracker</p>
            </div>
            <div class="lg:w-1/3 w-full">
            <input type="text" class="bg-gray-200 text-black form-text-input w-full px-4 focus:outline-none focus:border-indigo-700 rounded-md" placeholder="Type here to search..." >
            <a style="position: absolute;right: 24px; top: 30px; font-size: 16px;"><i class="fas fa-search"></i></a>
            </div>
        </div>
    </div>
    <div class="mx-10 px-8">
    <div class="grid grid-cols-4 gap-4 mt-6 mb-12">
      <div class="px-4 rounded-md bg-white shadow-md border-b-2 border-yellow-500">
        <div class="my-2 flex justify-between items-center">
          <div class="w-12 h-12">
          <img class="w-full h-full" src="../assets/globe.svg" alt="">
          </div>
          <div class="text-lg">
            <p class="text-gray-700">Projects</p>
            <P class="text-gray-600 text-right">
            <animated-number
            easing="linear"
            :value="1345"
            :formatValue="formatnum"
            :duration="4000"
            />
            </P>
          </div>
        </div>
      </div>
      <div class="px-4 rounded-md bg-white shadow-md border-b-2 border-indigo-700">
        <div class="my-2 flex justify-between items-center">
          <div class="w-12 h-12">
          <img class="w-full h-full" src="../assets/stopwatch.svg" alt="">
          </div>
          <div class="text-lg">
            <p class="text-gray-700">Orders</p>
            <P class="text-gray-600 text-right">
              <animated-number
              easing="linear"
              :value="2595"
              :formatValue="formatnum"
              :duration="4000"
              />
            </P>
          </div>
        </div>
      </div>
      <div class="px-4 rounded-md bg-white shadow-md border-b-2 border-blue-600">
        <div class="my-2 flex justify-between items-center">
          <div class="w-12 h-12">
          <img class="w-full h-full" src="../assets/checked.svg" alt="">
          </div>
          <div class="text-lg">
            <p class="text-gray-700">Average Price</p>
            <P class="text-gray-600 text-right">
              <animated-number
              easing="linear"
              :value="21295"
              :formatValue="formatToPrice"
              :duration="4000"
              />
            </P>
          </div>
        </div>
      </div>
      <div class="px-4 rounded-md bg-white shadow-md border-b-2 border-green-400">
        <div class="my-2 flex justify-between items-center">
          <div class="w-12 h-12">
          <img class="w-full h-full" src="../assets/coins.svg" alt="">
          </div>
          <div class="text-lg">
            <p class="text-gray-700">Revenue</p>
            <P class="text-gray-600 text-right">
              <animated-number
              easing="linear"
              :value="25495"
              :formatValue="formatToPrice"
              :duration="4000"
              />
            </P>
          </div>
        </div>
      </div>
    </div>
    <div class="charts my-8 grid grid-cols-2 gap-4">
            <div class="bg-gray-100 shadow-lg rounded-xl p-2">
                <div>
                    <apexchart height="300" type="donut" :options="options" :series="series"></apexchart>
                </div>
            </div>
            <div class="bg-gray-100 shadow-lg rounded-xl p-2">
                <apexchart  height="300" type="line" :options="options" :series="series2"></apexchart>
            </div>
            <div class="bg-gray-100 shadow-lg rounded-xl p-2">
                <apexchart height="300" type="bar" :options="optionsbar" :series="seriesbar"></apexchart>
            </div>
            <div class="bg-gray-100 shadow-lg rounded-xl p-2">
                <apexchart type="area"  height="300" :options="chartOptions" :series="seriesarea"></apexchart>
            </div>
    </div>
    <div class="my-8 bg-white rounded-lg">
        <div class="py-8 px-4"><p class="text-xl">Worker List</p></div>
        <div class="py-4 px-8">
          <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
          <thead>
              <tr class="border-0">
                  <th class="py-2 text-left text-base font-normal font-semibold"></th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Worker</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Category</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Designation</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Working Hour</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Progress</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(worker,index) in workers" :key="index">
              <td>
                <div class="w-12 h-12 py-6 flex items-center"><img class="w-full rounded-full" src="../assets/staff/avataruser.jpg"></div>
              </td>
              <td class="text-gray-800 py-6"><p>{{worker.name}}</p></td>
              <td class="text-gray-800 py-6"><p>{{worker.Category}}</p></td>
              <td class="text-gray-800 py-6"><p>{{worker.Designation}}</p></td>
              <td class="text-gray-800 py-6"><P>{{worker.Hour}}</P></td>
              <td class="text-white py-6"><p :class="`${worker.Progress} rounded-md p-0.5 w-2/3 text-center`">{{worker.Progress}}</p></td>
            </tr>
          </tbody>
      </table>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      workers: [
        { name: 'Anna Sthesia', Category: 'Electronic', Designation: '#1456', Hour: '$300', Progress: 'Paid' },
        { name: 'Brock Lee', Category: 'Laptop', Designation: '#8965', Hour: '$1200', Progress: 'Shipped' },
        { name: 'Dan Druff', Category: 'Mobile', Designation: '#6325', Hour: '$600', Progress: 'Pending' },
        { name: 'Lynn Guini', Category: 'Bluetooth', Designation: '#4875', Hour: '$200', Progress: 'Stoped' },
        { name: 'Eric Shun', Category: 'Camera', Designation: '#8956', Hour: '$300', Progress: 'Paid' }
      ],
      options: {},
      series: [44, 55, 41, 17, 15],
      series2: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      optionsbar: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      seriesbar: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      seriesarea: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }

    }
  },
  methods: {
    formatToPrice (value) {
      return `${Number(value).toFixed(0)}$`
    },
    formatnum (value) {
      return `${Number(value).toFixed(0)}`
    }
  }

}
</script>
<style scoped>
  .Paid{
    background:#28a745 !important;
  }
  .Pending{
    background:#ffc107 !important;
  }
  .Stoped{
    background:#dc3545 !important;
  }
  .Shipped{
    background: #007bff !important;
  }

</style>
