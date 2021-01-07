<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div>
    <div class="mx-10 px-8">
    <div class="bg-white my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-700" >
        </div>
        <div class="w-1/4">
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
    </div>
    <div class="grid grid-cols-5 gap-4"  >
        <div v-for="(item,index) in filteredList" :key="index">
                <div class="card  shadow border p-4 lg:w-full bg-white shadow-lg rounded">
                    <div class="flex justify-center my-4">
                        <div class="img w-20 h-20">
                        <img class="w-full h-full rounded-full p-1 border" :src="item.avatar"/>
                        </div>
                    </div>
                    <div  class="my-4 text-center text-base text-indigo-600 space-y-2">
                        <p>{{item.name}}</p>
                        <p>{{item.type}}</p>
                        <p>{{item.enail}}</p>
                        <p>{{item.tel}}</p>
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
      staffs: [
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'charly', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Michek', type: 'pharmacist', email: 'pharmacist@gmail.com', tel: '+9715481653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'omar', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'rommy', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'jolly', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Mhmd', type: 'pharmacist', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/avataruser.jpg') },
        { name: 'maria', type: 'pharmacist', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/avataruser.jpg') }
      ],
      search: '',
      options: ['All', 'doctor', 'nurse', 'pharmacist'],
      value: 'All'
    }
  },
  computed: {
    filteredList () {
      return this.staffs.filter(item => {
        return (item.name.toLowerCase().includes(this.search.toLowerCase()) && (item.type === this.value || this.value === 'All'))
      })
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
