<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div>
    <div class="mx-10 px-8">
    <div class="my-8">
      <p class="text-gray-800 text-lg font-semibold">DASHBOARD</p>
    </div>
    <div class="profiles my-6 grid grid-cols-3 gap-5">
      <div class="profile bg-white rounded-md" v-for="(item,index) in staffs" :key="index">
        <div class="bg-cover rounded">
          <div class="flex flex-wrap">
            <div class="w-7/12">
              <div class="p-4" style="color: #556ee6!important;">
                <p class="font-semibold">Welcome Back !</p>
                <p class="mb-3">Skote Dashboard</p>
              </div>
            </div>
            <div class="w-5/12 flex justify-center">
              <div class="w-20 h-20 self-center"><img class="w-full h-full" src="@/assets/profile/m.png"></div>
            </div>
          </div>
        </div>
        <div class="profile-body pt-0 mx-4 mt-1 mb-6">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <div class="avatar -mt-8 w-20 h-20">
                <img class="w-full h-full rounded-full p-1 border img-thumbnail" :src="item.avatar">
              </div>
              <p class="text-gray-800 text-lg font-medium text-truncate">{{item.name}}</p>
              <p class="text-gray-600 font-light text-truncate">UI/UX Designer</p>
            </div>
            <div class="col-span-2">
              <div class="pt-4">
                <div class="w-full flex">
                  <div class="w-1/2">
                    <p class="text-gray-700 text-lg font-semibold">
                        <animated-number
                          easing="linear"
                          :value="128"
                          :formatValue="formatnum"
                          :duration="4000"
                          />
                    </p>
                    <p class="text-gray-600 text-sm">projects</p>
                  </div>
                  <div class="w-1/2">
                    <p class="text-gray-700 text-lg font-semibold">
                      <animated-number
                        easing="linear"
                        :value="645"
                        :formatValue="formatToPrice"
                        :duration="4000"
                        />
                    </p>
                    <p class="text-gray-600 text-sm">Revenue</p>
                  </div>
                </div>
                <div class="w-full mt-4">
                    <button class="bg-blue-600 text-white px-2 p-1 rounded-md leading-6">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-700" >
        </div>
        <div class="w-1/4">
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div v-for="(item,index) in filteredList" :key="index">
                <div class="card  shadow border p-4 lg:w-full bg-white shadow-lg rounded">
                    <div class="flex justify-center my-4">
                        <div class="img w-20 h-20">
                        <img class="w-full h-full rounded-full p-1 border" :src="item.avatar"/>
                        </div>
                    </div>
                    <div  class="my-4 text-center text-base text-indigo-600 space-y-2">
                        <p>{{item.name}}</p>
                        <span>{{item.type}}</span>
                        <p>{{item.enail}}</p>
                        <p class="text-gray-700">{{item.tel}}</p>
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
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/06.jpg') },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/07.jpg') },
        { name: 'charly', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/08.jpg') },
        { name: 'Michek', type: 'pharmacist', email: 'pharmacist@gmail.com', tel: '+9715481653', avatar: require('@/assets/staff/09.jpg') },
        { name: 'omar', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/09.jpg') },
        { name: 'rommy', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/08.jpg') },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/07.jpg') },
        { name: 'jolly', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/06.jpg') },
        { name: 'Mhmd', type: 'pharmacist', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/07.jpg') },
        { name: 'Marry', type: 'nurse', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/08.jpg') },
        { name: 'Mhmd', type: 'doctor', email: 'doctor@gmail.com', tel: '+972016541653', avatar: require('@/assets/staff/06.jpg') },
        { name: 'maria', type: 'pharmacist', email: 'nurse@gmail.com', tel: '+97245001653', avatar: require('@/assets/staff/09.jpg') }
      ],
      search: '',
      options: ['All', 'doctor', 'nurse', 'pharmacist'],
      value: 'All'
    }
  },
  methods: {
    formatToPrice (value) {
      return `${Number(value).toFixed(0)}$`
    },
    formatnum (value) {
      return `${Number(value).toFixed(0)}`
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
<style scoped>
.bg-cover{
    background-color: rgba(85,110,230,.10)!important;
}
</style>
