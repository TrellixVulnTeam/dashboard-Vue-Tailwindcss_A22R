<template>
    <div>
    <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;background-color:#fafbfc">
        <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Tracker</p>
            </div>
    </div>
    </div>
    <div class="charts  flex flex-wrap">
            <div class="lg:w-1/2 bg-gray-100 shadow-lg rounded ">
                <div>
                    <apexchart height="300" type="donut" :options="options" :series="series"></apexchart>
                </div>
            </div>
            <div class="lg:w-1/2 bg-gray-100 shadow-lg rounded">
                <apexchart  height="300" type="line" :options="options" :series="series2"></apexchart>
            </div>
            <div class="lg:w-1/2 bg-gray-100 shadow-lg rounded">
                <apexchart height="300" type="bar" :options="optionsbar" :series="seriesbar"></apexchart>
            </div>
            <div class="lg:w-1/2 bg-gray-100 shadow-lg rounded">
                <apexchart type="area"  height="300" :options="chartOptions" :series="seriesarea"></apexchart>
            </div>
    </div>

    </div>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
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
  }

}
</script>
