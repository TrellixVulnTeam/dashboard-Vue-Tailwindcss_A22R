<template>
    <div>
        <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;background-color:#fafbfc">
        <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Pharmacy</p>
            </div>
        </div>
        </div>
        <div class="bg-gray-200 my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="w-full inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" >
        </div>
        <div class="w-1/4">
            <multiselect class="mx-4" v-model="category" :options="categoryoptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Filter By Category.."></multiselect>
        </div>
        <div class="w-1/4">
            <multiselect class="ml-8" v-model="group" :options="groupoptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Filter By Group.."></multiselect>
        </div>
        <div class="w-1/4 flex items-center justify-end pr-6">
          <button @click="showprojectModal" class="bg-green-600 w-10 h-10 text-lg text-white rounded-full flex items-center justify-center
          focus:bg-green-300
          "><i class="fas fa-plus"></i></button>
        </div>
        </div>
        <div class="my-6">
        <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
            <thead>
                <tr class="border-b border-gray-600">
                    <th class="py-2 text-left text-base font-normal text-gray-600">Name</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Company</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Group</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Quntity</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Category</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in filteredList" :key="index" class="border-b border-gray-600 hover:bg-gray-200">
                <td class="py-2">{{item.name}}</td>
                <td class="py-2">{{item.company}}</td>
                <td class="py-2">{{item.group}}</td>
                <td class="py-2">{{item.quntity}}</td>
                <td class="py-2">{{item.category}}</td>
                <td class="text-green-600">
                    <i class="fas fa-pen"></i>
                    <i class="fas fa-trash mx-2"></i>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <ve-modal :show="show" @close="close" :width="500">
        <h4 class="modal-title">Add New Project </h4>
           <form @submit.prevent="addPharmacy">
                <div class="flex flex-wrap my-8">
                    <div class="w-full my-2">
                        <input type="text" required placeholder="Name..." v-model="input.name" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                     <div class="w-full my-2">
                        <input type="text" required placeholder="company..." v-model="input.company" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-2">
                        <multiselect required v-model="input.group" :options="groupoptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="choose group"></multiselect>
                    </div>
                    <div class="w-full my-2">
                        <multiselect required v-model="input.category" :options="categoryoptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="choose category"></multiselect>
                    </div>
                    <div class="w-full my-4">
                        <input type="number" required min="0" placeholder="quantity" v-model="input.quntity" class="border border-gray-300 leading-9 w-full px-2">
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
  name: 'pharmacy',
  data () {
    return {
      search: '',
      pharmacies: [
        { name: 'popularised', company: 'popularised', group: 'group1', quntity: 5, category: 'category2' },
        { name: 'scrambled', company: 'scrascrambledmbled', group: 'group3', quntity: 5, category: 'scrambled' },
        { name: 'Letraset', company: 'Letraset', group: 'group3', quntity: 5, category: 'versions' },
        { name: 'versions', company: 'Letraset', group: 'group2', quntity: 5, category: 'scrambled' },
        { name: 'standard', company: 'Letraset', group: 'group1', quntity: 5, category: 'necessary' },
        { name: 'necessary', company: 'Letraset ', group: 'group2', quntity: 5, category: 'category2' }
      ],
      categoryoptions: ['All', 'scrambled', 'category2', 'necessary', 'versions'],
      groupoptions: ['All', 'group1', 'group2', 'group3'],
      category: 'All',
      group: 'All',
      show: false,
      input: {}
    }
  },
  computed: {
    filteredList () {
      return this.pharmacies.filter(item => {
        return (item.category === this.category || this.category === 'All') && (item.name.toLowerCase().includes(this.search.toLowerCase()) && (item.group === this.group || this.group === 'All'))
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
    addPharmacy () {
      this.pharmacies.push(this.input)
      this.close()
    }
  }
}
</script>
