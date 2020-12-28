<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->

    <div>
    <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;background-color:#fafbfc">
    <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Staffs</p>
            </div>
    </div>
    </div>
    <div class="bg-gray-200 my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" >
        </div>
        <div class="w-1/4">
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
    </div>
    <div class="grid grid-cols-5 gap-4"  >
        <div v-for="(item,index) in filteredList" :key="index" v-if="item.type === value || value === 'All'">
                <div class="card bg-gray-200 shadow border p-4 lg:w-full bg-gray-100 shadow-lg rounded">
                    <div class="flex justify-center my-4">
                        <div class="img w-20 h-20">
                        <img class="w-full h-full rounded-full p-1 border" src="../assets/images/avataruser.jpg"/>
                        </div>
                    </div>
                    <div  class="my-4 text-center text-base text-indigo-400 space-y-2">
                        <p>{{item.name}}</p>
                        <p>{{item.type}}</p>
                        <p>{{item.enail}}</p>
                        <p>{{item.tel}}</p>
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
      staffs: [
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653' },
        { name: 'charly', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'Michek', type: 'pharmacist', email: 'pharmacist@gmail.com', tel: '+9715481653' },
        { name: 'omar', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'rommy', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653' },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'jolly', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653' },
        { name: 'Mhmd', type: 'pharmacist', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653' },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653' },
        { name: 'maria', type: 'pharmacist', email: 'nurse@gmail.com', tel: '+97245001653' }
      ],
      search: '',
      options: ['All', 'doctor', 'nurse', 'pharmacist'],
      value: 'All'
    }
  },
  computed: {
    filteredList () {
      return this.staffs.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
