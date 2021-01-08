<template>
    <div>
    <div class="mx-10 px-8">
    <div class="grid grid-cols-3 gap-4 my-8">
        <div class="col-span-2 bg-white rounded-xl shadow p-4">
        <div class="p-2"><p class="text-gray-800 text-xl">Invoice Stats</p></div>
        <div class="chart">
          <apexchart height="340"  :options="options" :series="series"></apexchart>
        </div>
        </div>
        <div class="grid grid-cols-1 gap-4 bg-white p-4 rounded-xl shadow divide-y divide-indigo-100">
        <div class="p-4"  v-for="(invoice,index) in invoices" :key="index">
          <div class="flex items-center">
            <div :class="`icon flex justify-center items-center  rounded-lg  w-12 h-12 bg ${invoice.status}`">
                <img class="w-6 h-6" :src="invoice.avatar">
            </div>
            <div class="ml-8 w-2/3">
              <div class="flex items-center justify-between">
                <span class="text-gray-800">{{invoice.name}}</span>
                <div><p :class="`font-semibold text-indigo-600 ${invoice.status}`">
                    <animated-number
                    easing="linear"
                    :value="invoice.price"
                    :formatValue="formatToPrice"
                    :duration="4000"
                    />
                  </p></div>
              </div>
              <span class="text-sm text-gray-500">{{invoice.Transaction}} Transaction </span>
              <div class="w-full inline-flex">
                <div class="iq-progress-bar" style=" transition: width 2s;">
                  <span style="transition: width 2s ease;" :style="`width: ${invoice.percent}%;`"></span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    <div class="my-6">
<table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
    <thead>
        <tr class="border-b border-gray-600">
            <th class="py-2 text-left text-base font-normal text-gray-600 px-4">Group</th>
            <th class="py-2 text-left text-base font-normal text-gray-600">Quntity</th>
            <th class="py-2 text-left text-base font-normal text-gray-600">Actions</th>
    </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in groups" :key="index" class="border-b border-gray-600 hover:bg-gray-200">
            <router-link :to="'/bloodgroup/'+item.title">
            <td class="py-2 px-4">{{item.title}}</td>
            </router-link>
            <td>{{item.qunt}}</td>
            <td @click="showEditModal(item,index)" class="text-indigo-800"><i class="fas fa-pen"></i></td>
        </tr>
    </tbody>
</table>
    </div>
      <ve-modal :show="show" @close="close" :width="500">
        <div class="my-4">
          <h2>change Quntity of group {{this.editData.title}}</h2>
          <form @submit.prevent="editeQun">
          <div class="my-4">
            <input type="number"  min="0" placeholder="enter number of group" v-model.number="editData.qunt" class="border border-gray-300 leading-9 w-full px-2">
          </div>
              <div class="w-full my-4  flex justify-end">
                <button type="submit"  class="w-1/3 bg-gray-300 mx-2 p-2 rounded" style="background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);color: white;">Save</button>
                <button type="button" @click="close" class="w-1/3 border border-gray-400 mx-2 p-2 rounded hover:bg-red-600 hover:text-white">Close</button>
              </div>
          </form>
        </div>
      </ve-modal>
    </div>
    </div>
</template>
<script>
export default {
  name: 'terms',
  data () {
    return {
      groups: [
        { title: 'A+', qunt: 45 },
        { title: 'A-', qunt: 15 },
        { title: 'B+', qunt: 12 },
        { title: 'B-', qunt: 0 },
        { title: 'O+', qunt: 8 },
        { title: 'O-', qunt: 26 },
        { title: 'AB+', qunt: 6 },
        { title: 'AB-', qunt: 5 }
      ],
      show: false,
      editData: {},
      index: null,
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#66C7F4'],

        stroke: {
          width: [4, 4, 4]
        },
        plotOptions: {
          bar: {
            columnWidth: '20%'
          }
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [
          {
            seriesName: 'Column A',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true
            },
            title: {
              text: 'Price'
            }
          },
          {
            seriesName: 'Column A',
            show: false
          }, {
            opposite: true,
            seriesName: 'Line C',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true
            },
            title: {
              text: 'product'
            }
          }
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false
          }
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
      series: [

        {
          name: 'Column A',
          type: 'column',
          data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
        },
        {
          name: 'Column B',
          type: 'column',
          data: [10, 19, 27, 26, 34, 35, 40, 38]
        },
        {
          name: 'Line C',
          type: 'line',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }
      ],
      invoices: [
        { name: 'House, bills', Transaction: '78', price: '130', avatar: require('@/assets/invoice/home.svg'), percent: '38', status: 'Paid' },
        { name: 'House, bills', Transaction: '61', price: '470', avatar: require('@/assets/invoice/dashboard.svg'), percent: '65', status: 'Stopped' },
        { name: 'House, bills', Transaction: '38', price: '230', avatar: require('@/assets/invoice/credit-card.svg'), percent: '85', status: 'Shipped' },
        { name: 'House, bills', Transaction: '34', price: '314', avatar: require('@/assets/invoice/shutter.svg'), percent: '45', status: 'Pending' }
      ]
    }
  },
  methods: {
    formatToPrice (value) {
      return `${Number(value).toFixed(0)}$`
    },
    showEditModal (item, index) {
      this.editData.title = item.title
      this.show = true
      this.index = index
      console.log(index)
    },
    editeQun () {
      this.groups[this.index].qunt = parseInt(this.editData.qunt)
      this.close()
    },
    close () {
      this.editData = {}
      this.$emit('close')
      this.show = false
      this.index = null
    }
  }
}
</script>
<style>
.apexcharts-text .apexcharts-yaxis-title-text,
#SvgjsText1084,.apexcharts-yaxis-title ,#SvgjsText1109{
  font-family: monospace !important;
  font-size:18px !important;
}
#SvgjsText1244{
  font-size:20px !important;
}
/* .apexcharts-text, .apexcharts-yaxis-title-text
,#SvgjsText1234{
  font-size: 22px !important;
  font-family: monospace !important;
} */
</style>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
.chart {
  font-family: Roboto, sans-serif;
}
.iq-progress-bar {
    background: #eef1f7;
    box-shadow: 0 0 0;
    height: 6px;
    margin: 0;
    position: relative;
    width: 100%;
    border-radius: 4px;
}
.iq-progress-bar > span {
    background: #827af3 none repeat scroll 0 0;
    display: block;
    height: 100%;
    width: 0;
    border-radius: 4px;
}
.Paid{
  color:#827af3
}
.Pending{
color:#27b345
}
.Shipped{
color:#6ce6f4
}
.Stopped{
color:#f1b44c
}
.bg.Paid{
  background: linear-gradient(to right, rgba(130, 122, 243, 0.2) 0%, rgba(180, 122, 243, 0.2) 100%);
}
.bg.Pending{
  background: #eefff2 !important;
}
.bg.Shipped{
  background: #e5fafc !important;
}
.bg.Stopped{
  background-color: rgba(241,180,76,.18) !important;
}

</style>
