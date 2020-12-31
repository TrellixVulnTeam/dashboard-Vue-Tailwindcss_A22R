<template>

<div>

<div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
<div class="px-4 flex flex-wrap mb-6">
    <div class="w-full">
    <p class="font-bold text-3xl text-start">Blood Group {{group}} details</p>
    </div>
</div>
</div>

<div class="bg-gray-200 my-4 p-4 flex justify-between">
<div class="w-1/4">
    <input type="text" v-model="search" placeholder="Search.."
    class="w-full inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" >
</div>
<div class="w-1/2 flex items-center justify-center">
    <label class="text-gray-600 mr-2">Filter by status of group</label>
    <multiselect class="w-50" v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
</div>
</div>

<div class="my-6">
    <table id="content-table3" class="table-responsive-full sort-table  rounded-lg shadow bg-white lg:w-full">
        <thead>
        <tr class="text-white" style="transition: all .3s ease-in-out ;background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);">
        <th class="flex justify-center p-4">
            <div class="flex justify-between items-center">
            <p class="mr-2 text-base">ID</p>
            </div>
        </th>
        <th class="prijs p-4">
            <div class="flex justify-center">
            <p class="mr-2 text-base">Doner Name</p>
            </div>
        </th>
        <th class="omzet p-4">
            <div class="flex justify-center">
            <p class="mr-2 text-base">AGE</p>
            </div>
        </th>
        <th class="omzet p-4">
            <div class="flex justify-center">
            <p class="mr-2 text-base">Phone</p>
            </div>
        </th>
        <th class="sales p-4">
            <div class="flex justify-center">
            <p class="mr-2 text-base">Status</p>
            </div>
        </th>
        <th class="totaal p-4">
            <div class="flex justify-center">
            <p class="mr-2 text-base">Date</p>
            </div>
        </th>
        </tr>
    </thead>
    <tbody class="shadow">
        <tr v-for="(item,index) in filteredList" :key="index" class="shadow">
            <td data-label="Order ID" class="py-3">
            <div class="text-center text-gray-600">
                <p>{{index+1}}</p>
            </div>
            </td>
            <td data-label="Datum">
            <div class="text-center text-gray-600">
                <p>{{item.name}}</p>
            </div>
            </td>

            <td data-label="Aantal" class="omzet text-gray-600  text-center">
            <p>
                {{item.age}}
            </p>
            </td>
            <td data-label="Prijs" class="sales  text-gray-600  text-center">{{item.phone}}</td>
            <td data-label="Totaal" class="totaal  text-gray-600  text-center">{{item.status}}{{currency}}</td>
            <td data-label="Totaal" class="totaal  text-gray-600  text-center">{{item.date}}{{currency}}</td>
        </tr>
    </tbody>

    </table>
</div>

</div>
</template>

<script>
export default {
  name: 'bloodgroup',
  props: ['group'],
  data () {
    return {
      doners: [
        { name: 'Marry', age: 22, status: 'good', phone: '+97259716656', date: '28/12/2020' },
        { name: 'charly', age: 22, status: 'bad', phone: '+97259716656', date: '28/12/2020' },
        { name: 'rommy', age: 22, status: 'bad', phone: '+97259716656', date: '28/12/2020' },
        { name: 'jolly', age: 22, status: 'bad', phone: '+97259716656', date: '28/12/2020' },
        { name: 'Michek', age: 22, status: 'good', phone: '+97259716656', date: '28/12/2020' },
        { name: 'Mhmd', age: 22, status: 'good', phone: '+97259716656', date: '28/12/2020' },
        { name: 'Michek', age: 22, status: 'good', phone: '+97259716656', date: '28/12/2020' },
        { name: 'Mhmd', age: 22, status: 'bad', phone: '+97259716656', date: '28/12/2020' },
        { name: 'rommy', age: 22, status: 'bad', phone: '+97259716656', date: '28/12/2020' }],
      search: '',
      options: ['All', 'good', 'bad'],
      value: 'All'
    }
  },
  computed: {
    filteredList () {
      return this.doners.filter(item => {
        return (item.name.toLowerCase().includes(this.search.toLowerCase()) && (item.status === this.value || this.value === 'All'))
      })
    }
  }
}
</script>
<style>
.w-50{
width:50% !important;
}
</style>
