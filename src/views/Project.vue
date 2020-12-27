<template>
    <div>
    <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;background-color:#fafbfc">
    <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Projects</p>
            </div>
    </div>
    </div>
    <div class="bg-gray-200 my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="inline-block appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" >
        </div>
        <div class="w-1/4">
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
        <div class="w-1/4">
            <button @click="showprojectModal" class="rounded w-full leading-9" style="background: linear-gradient(90deg,#55c3b7 0,#5fd0a5 48%,#66da90 100%);color: white;"><i class="fas fa-plus"></i>Add New</button>
        </div>
    </div>
    <div class="my-6">
        <table id="content-table3" class="table-responsive-full sort-table  rounded-lg shadow bg-white lg:w-full">
            <thead>
            <tr class="bg-green-400 text-white" style="transition: all .3s ease-in-out">
            <th class="flex justify-center p-4">
                <div class="flex justify-between items-center">
                <p class="mr-2 text-base">ID</p>
                </div>
            </th>
            <th class="prijs p-4">
                <div class="flex justify-center">
                <p class="mr-2 text-base">Date</p>
                </div>
            </th>
            <th class="omzet p-4">
                <div class="flex justify-center">
                <p class="mr-2 text-base">informatie</p>
                </div>
            </th>
            <th class="sales p-4">
                <div class="flex justify-center">
                <p class="mr-2 text-base">Status</p>
                </div>
            </th>
            <th class="totaal p-4">
                <div class="flex justify-center">
                <p class="mr-2 text-base">Price</p>
                </div>
            </th>
            </tr>
        </thead>
        <tbody class="shadow">
            <tr v-for="(item,index) in filteredList" :key="index" class="shadow">
                <td data-label="Order ID" class="py-3" v-if="item.status === value || value === 'All'">
                <div class="text-center text-gray-600">
                    <p>{{index+1}}</p>
                </div>
                </td>
                <td data-label="Datum" class="productinformatie" v-if="item.status === value || value === 'All'">
                <div class="text-center text-gray-600">
                    <p>{{item.date}}</p>
                </div>
                </td>

                <td data-label="Aantal" class="omzet text-gray-600  text-center" v-if="item.status === value || value === 'All'">
                <p>
                    {{item.info}}
                </p>
                </td>
                <td data-label="Prijs" class="sales  text-gray-600  text-center" v-if="item.status === value || value === 'All'">{{item.status}}</td>
                <td data-label="Totaal" class="totaal  text-gray-600  text-center" v-if="item.status === value || value === 'All'">{{item.price}}{{currency}}</td>
            </tr>
        </tbody>
        </table>
    </div>

        <ve-modal :show="show" @close="close" :width="500">
            <h4 class="modal-title">Add New Project </h4>
            <form @submit.prevent="addProject">
                <div class="flex flex-wrap my-8">
                    <div class="w-full my-2">
                        <input type="text" placeholder="Project Title" v-model="input.info" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-2">
                        <multiselect v-model="input.status" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="choose status of project"></multiselect>
                    </div>
                    <div class="w-full my-4">
                        <input type="date" placeholder="enter date created of project" v-model="input.date" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-4">
                        <input type="number" min="0" placeholder="enter price of project" v-model="input.price" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-4  flex justify-end">
                        <button type="submit" class="w-1/3 bg-gray-300 mx-2 p-2 rounded" style="background: linear-gradient(90deg,#55c3b7 0,#5fd0a5 48%,#66da90 100%);color: white;">Save</button>
                        <button type="button" @click="close" class="w-1/3 border border-gray-400 mx-2 p-2 rounded hover:bg-red-600 hover:text-white">Close</button>
                    </div>
                </div>
                </form>
        </ve-modal>
    </div>
</template>
<script>
export default {
  name: 'project',
  data () {
    return {
      projects: [
        { date: '28-08-2020', info: 'consectetur adipiscing', status: 'completed', price: '250' },
        { date: '28-08-2020', info: 'vitae fermentum', status: 'canceled', price: '250' },
        { date: '28-08-2020', info: 'Orci varius natoque', status: 'completed', price: '250' },
        { date: '28-08-2020', info: 'magnis dis parturient', status: 'canceled', price: '250' },
        { date: '28-08-2020', info: 'enim diam tristique', status: 'ongoing', price: '250' }
      ],
      currency: '$',
      search: '',
      options: ['All', 'completed', 'ongoing', 'canceled'],
      value: 'All',
      show: false,
      input: {}
    }
  },
  computed: {
    filteredList () {
      return this.projects.filter(item => {
        return item.info.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    showprojectModal () {
      this.show = true
    },
    close () {
      this.input = {}
      this.$emit('close')
      this.show = false
    },
    addProject () {
      this.projects.push(this.input)
      this.show = false
    }
  }
}
</script>
