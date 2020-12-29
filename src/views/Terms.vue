<template>
    <div>
        <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;background-color:#fafbfc">
        <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Blood Bank</p>
            </div>
        </div>
        </div>

    <div class="my-6">
<table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
    <thead>
        <tr class="border-b border-gray-600">
            <th class="py-2 text-left text-base font-normal text-gray-600">Group</th>
            <th class="py-2 text-left text-base font-normal text-gray-600">Quntity</th>
            <th class="py-2 text-left text-base font-normal text-gray-600">Actions</th>
    </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in groups" :key="index" class="border-b border-gray-600 hover:bg-gray-200">
            <td class="py-2">{{item.title}}</td>
            <td>{{item.qunt}}</td>
            <td @click="showEditModal(item,index)" class="text-green-600"><i class="fas fa-pen"></i></td>
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
                <button type="submit"  class="w-1/3 bg-gray-300 mx-2 p-2 rounded" style="background: linear-gradient(90deg,#55c3b7 0,#5fd0a5 48%,#66da90 100%);color: white;">Save</button>
                <button type="button" @click="close" class="w-1/3 border border-gray-400 mx-2 p-2 rounded hover:bg-red-600 hover:text-white">Close</button>
              </div>
          </form>
        </div>
      </ve-modal>
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
      index: null
    }
  },
  methods: {
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
