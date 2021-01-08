<template>
    <div>
    <div class="mx-10 px-8">
    <div class="my-8 project-card">
      <div class="my-6"><p class="text-gray-700 font-semibold text-xl">Project Card</p></div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white rounded-md pb-2 pt-8 px-2" v-for="(card,index) in cards" :key="index">
          <div class="content mb-4 px-4">
            <div class="flex">
              <div class="avatar bg-gray-100 rounded-full w-12 h-12 mr-4 flex justify-center items-center"><img class="rounded-full w-6 h-6" :src="card.icon"></div>
              <div class="body w-2/3">
                <p class="text-gray-800">{{card.name}}</p>
                <p class="text-gray-600 mb-3">{{card.description}}</p>
                <div class="team flex items-center">
                <a class="avatar w-8 h-8 mr-2"><img class="rounded-full" src="@/assets/staff/07.jpg"></a>
                <a class="avatar w-8 h-8 mr-2"><img class="rounded-full" src="@/assets/staff/06.jpg"></a>
              </div>
              </div>
            </div>
          </div>
          <div class="border-t px-4 py-2 flex items-center text-xs">
              <span :class="`text-white rounded-md px-1 mr-1 ${card.status}`">{{card.status}}</span>
              <span class="text-gray-700 mr-1"><i class="far fa-calendar-alt"></i>{{card.date}}</span>
              <span class="text-gray-700"><i class="far fa-comment-alt"></i> {{card.comments}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="my-8 bg-white rounded-lg">
        <div class="py-8 px-4">
               <input type="text" v-model="search" placeholder="Search.."
            class="bg-gray-200 form-text-input inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-700">
        </div>
        <div class="py-4 px-8">
          <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
          <thead>
              <tr class="border-0">
                  <th class="py-2 text-left text-base font-normal font-semibold">Project title</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Person</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Category</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Due by</th>
                  <th class="py-2 text-left text-base font-normal font-semibold">Progress</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(worker,index) in workers" :key="index">
              <td class="text-gray-800 py-6 px-2"  :class="`${worker.Progress}`"><p>{{worker.title}}</p></td>
              <td class="text-gray-800 py-6"><p>{{worker.person}}</p></td>
              <td class="text-gray-800 py-6"><p>{{worker.Category}}</p></td>
              <td class="text-gray-800 py-6"><p>{{worker.Designation}}</p></td>
              <td class="text-gray-800 py-6 bg"><span :class="`rounded-md px-1 text-sm text-center bg ${worker.Progress}`">{{worker.Progress}}</span></td>
            </tr>
          </tbody>
      </table>
        </div>
    </div>
    <div class="bg-white my-4 p-4 flex justify-between">
        <div class="w-1/4">
            <input type="text" v-model="search" placeholder="Search.."
            class="inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-700">
        </div>
        <div class="w-1/3 flex justify-center items-center">
        <p class="text-sm text-gray-600 mr-2" style="white-space: nowrap;">Filter By Status ...</p>
            <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
        </div>
        <div class="w-1/4">
            <button @click="showprojectModal" class="rounded w-full leading-9" style="background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);color: white;"><i class="fas fa-plus"></i>Add New</button>
        </div>
    </div>

    <div class="my-6">
        <table id="content-table3" class="table-responsive-full sort-table  rounded-lg shadow bg-white lg:w-full">
            <thead>
            <tr class="text-white" style="transition: all .3s ease-in-out ;background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);">
            <th class="flex justify-center p-4">
                <div class="flex justify-between items-center">
                <p class="mr-2 text-base">ID</p>
                <span @click="sortby()"><i class="fas fa-arrow-up"></i></span>
                </div>
            </th>
            <th class="prijs p-4">
                <div class="flex justify-center items-center">
                <p class="mr-2 text-base">Date</p>
                <span @click="sortby('date')"><i class="fas fa-arrow-up"></i></span>
                </div>
            </th>
            <th class="omzet p-4">
                <div class="flex justify-center items-center">
                <p class="mr-2 text-base">informatie</p>
                <span @click="sortby()"><i class="fas fa-arrow-up"></i></span>
                </div>
            </th>
            <th class="sales p-4">
                <div class="flex justify-center items-center">
                <p class="mr-2 text-base">Status</p>
                <span @click="sortby()"><i class="fas fa-arrow-up"></i></span>
                </div>
            </th>
            <th class="totaal p-4">
                <div class="flex justify-center items-center">
                <p class="mr-2 text-base">Price</p>
                <span @click="sortby('price')"><i class="fas fa-arrow-up"></i></span>
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
                <td data-label="Datum" class="productinformatie">
                <div class="text-center text-gray-600">
                    <p>{{item.date}}</p>
                </div>
                </td>

                <td data-label="Aantal" class="omzet text-gray-600  text-center">
                <p>
                    {{item.info}}
                </p>
                </td>
                <td data-label="Prijs" class="sales  text-gray-600  text-center">{{item.status}}</td>
                <td data-label="Totaal" class="totaal  text-gray-600  text-center">{{item.price}}{{currency}}</td>
            </tr>
        </tbody>
        </table>
    </div>
        <ve-modal :show="show" @close="close" :width="500">
            <h4 class="modal-title">Add New Project </h4>
            <form @submit.prevent="addProject">
                <div class="flex flex-wrap my-8">
                    <div class="w-full my-2">
                        <input type="text" required placeholder="Project Title" v-model="input.info" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-2">
                        <multiselect required v-model="input.status" :options="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="choose status of project"></multiselect>
                    </div>
                    <div class="w-full my-4">
                        <input  type="date" required placeholder="enter date created of project" v-model="input.date" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-4">
                        <input type="number" required min="0" placeholder="enter price of project" v-model="input.price" class="border border-gray-300 leading-9 w-full px-2">
                    </div>
                    <div class="w-full my-4  flex justify-end">
                        <button type="submit" class="w-1/3 bg-gray-300 mx-2 p-2 rounded" style="background: linear-gradient(90deg,#55c3b7 0,#5fd0a5 48%,#66da90 100%);color: white;">Save</button>
                        <button type="button" @click="close" class="w-1/3 border border-gray-400 mx-2 p-2 rounded hover:bg-red-600 hover:text-white">Close</button>
                    </div>
                </div>
                </form>
        </ve-modal>
    </div>
    </div>
</template>
<script>
export default {
  name: 'project',
  data () {
    return {
      projects: [
        { date: '28-08-2019', info: 'consectetur adipiscing', status: 'completed', price: '210' },
        { date: '28-08-2020', info: 'vitae fermentum', status: 'canceled', price: '250' },
        { date: '28-09-2020', info: 'Orci varius natoque', status: 'completed', price: '520' },
        { date: '28-08-2021', info: 'magnis dis parturient', status: 'canceled', price: '310' },
        { date: '28-06-2020', info: 'enim diam tristique', status: 'ongoing', price: '120' }
      ],
      workers: [
        { title: 'check add new project', person: 'Anna Sthesia', Category: 'Electronic', Designation: '#1456', Hour: '$300', Progress: 'Paid' },
        { title: 'check add new project', person: 'Brock Lee', Category: 'Laptop', Designation: '#8965', Hour: '$1200', Progress: 'Shipped' },
        { title: 'check add new project', person: 'Dan Druff', Category: 'Mobile', Designation: '#6325', Hour: '$600', Progress: 'Pending' },
        { title: 'check add new project', person: 'Lynn Guini', Category: 'Bluetooth', Designation: '#4875', Hour: '$200', Progress: 'Stoped' },
        { title: 'check add new project', person: 'Eric Shun', Category: 'Camera', Designation: '#8956', Hour: '$300', Progress: 'Paid' }
      ],
      cards: [
        { name: 'New admin Design', description: 'It will be as simple as Occidental', status: 'Completed', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-1.png') },
        { name: 'Brand logo design', description: 'Assigned to Mark simple', status: 'RePending', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-2.png') },
        { name: 'New Landing UI', description: 'Skote Saas Dashboard Assigned', status: 'Delay', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-4.png') },
        { name: 'New admin Design', description: 'It will be as simple as Occidental', status: 'Completed', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-5.png') },
        { name: 'New Landing UI', description: 'Skote Saas Dashboard Occidental', status: 'Delay', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-6.png') },
        { name: 'Blog Template UI', description: 'It will be as simple as Occidental', status: 'Completed', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-6.png') },
        { name: 'New admin Design', description: 'Next meeting tom meetingor row Delay', status: 'RePending', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-5.png') },
        { name: 'Blog Template UI', description: 'Assigned to Mar meetingk', status: 'Completed', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-4.png') },
        { name: 'Skote Saas Dashboard', description: 'It will be as simple as Occidental', status: 'Delay', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-2.png') },
        { name: 'Brand logo design', description: 'Next meeting tomorrow meeting', status: 'Delay', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-1.png') },
        { name: 'New admin Design', description: 'Skote Saas Next Dashboard Next', status: 'RePending', date: '15 Oct, 19', comments: 214, icon: require('@/assets/projectcard/img-5.png') }
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
        return (item.info.toLowerCase().includes(this.search.toLowerCase()) && (item.status === this.value || this.value === 'All'))
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
    },
    sortby (prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>
<style scoped>
      .Paid{
    border-left:3px solid  #28a745 !important;
  }
  .Pending{
    border-left:3px solid #ffc107 !important;
  }
  .Stoped{
   border-left:3px solid #dc3545 !important;
  }
  .Shipped{
    border-left:3px solid  #007bff !important;
  }
  .bg.Paid{
  color: #34c38f !important;
  background-color: rgba(52,195,143,.18) !important;
  border:0 !important;
  }
  .bg.Pending{
  color: #f1b44c !important;
  background-color: rgba(241,180,76,.18) !important;
  border:0 !important;
  }
  .bg.Shipped{
  background: #7aade3c9;
  color: #007bff;
  border: 0px !important;
  }
  .bg.Stoped{
  color: #f46a6a !important;
  background-color: rgba(244,106,106,.18)!important;
  border:0 !important;
  }
  .Completed{
      background-color: #556ee6;
  }
  .RePending{
      background-color: #f1b44c;
  }
  .Delay{
      background-color: #f46a6a;
  }
</style>
