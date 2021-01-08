<template>
    <div>
        <div class="mx-10 px-8">
        <div class="grid grid-cols-3 gap-4 my-8">
            <div class="bg-white rounded p-4">
              <div class="content">
                <p class="text-gray-700 font-semibold pl-3">Social Source</p>
                <div class="text-center p-4">
                  <div class="avatar">
                    <span class="text-blue-600 text-5xl"><i class="fab fa-facebook"></i></span>
                  </div>
                  <div class="text-content text-content space-y-3">
                    <p class="text-gray-800 font-semibold">Facebook - <span class="text-gray-700">125 sales</span></p>
                    <p class="text-gray-600 text-sm">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                    <a href="#" class="text-sm text-blue-500">Learn more <i class="text-2xs fas fa-chevron-right"></i></a>
                  </div>
                  <div class="grid grid-cols-3 gap-4 my-6">
                    <div>
                      <div class="avatart-icon">
                        <div class="avatar w-8 h-8 mx-auto mb-3">
                          <span class="text-white bg-blue-600 w-full h-full flex justify-center items-center rounded-full"><i class="fab fa-facebook-f"></i></span>
                        </div>
                        <p class="text-gray-800 font-semibold">Facebook</p>
                        <p class="text-gray-500">125 sales</p>
                      </div>
                    </div>
                    <div>
                      <div class="avatart-icon">
                        <div class="avatar w-8 h-8 mx-auto mb-3">
                          <span class="text-white bg-twitter w-full h-full flex justify-center items-center rounded-full"><i class="fab fa-twitter"></i></span>
                        </div>
                        <p class="text-gray-800 font-semibold">Twitter</p>
                        <p class="text-gray-500">125 sales</p>
                      </div>
                    </div>
                    <div>
                      <div class="avatart-icon">
                        <div class="avatar w-8 h-8 mx-auto mb-3">
                          <span class="text-white bg-instagram w-full h-full flex justify-center items-center rounded-full"><i class="fab fa-instagram"></i></span>
                        </div>
                        <p class="text-gray-800 font-semibold">Instagram</p>
                        <p class="text-gray-500">125 sales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded p-4">
              <p class="text-gray-700 font-semibold pl-3 mb-6">Activity</p>
              <ul class="timeline border-l-2 border-dashed pl-0 my-0 list-none mx-4 grid grid-cols-1 gap-4" style="border-color: #f6f6f6;">
                <li class="relative pt-0 pr-0 pb-4 pl-8 mb-2" v-for="(item,index) in activities" :key="index">
                    <div class="event-icon absolute text-gray-600" style="left: -6px;top: 0;z-index: 9;font-size: 16px;
  animation-duration: 4s;">
                        <i :class="`${item.stautsicon}`"></i>
                    </div>
                    <div class="body flex">
                      <div class="w-3/5">
                        <p class="text-gray-800 font-semibold">{{item.date}}<i  class="ml-2 text-indigo-500 align-middle text-xs fas fa-arrow-right"></i> </p>
                      </div>
                      <div class="text-sm text-center">
                        <p>{{item.desc}}</p>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded p-4">
            <div class="grid grid-cols-1 gap-3 bg-white p-4 rounded-xl divide-y divide-indigo-100">
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
        </div>
                <div class="bg-white rounded-lg my-8 p-4">
            <div class="my-8">
              <p class="text-gray-800 text-lg font-semibold">Latest Project</p>
            </div>
            <div class="p-4">
            <table id="content-table3" class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Order ID</p>
                    </div>
                    </th>
                    <th class= "p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Billing Name</p>
                    </div>
                    </th>
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Date</p>
                    </div>
                    </th>
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Total</p>
                    </div>
                    </th>
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Payment Status</p>
                    </div>
                    </th>
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Payment Method</p>
                    </div>
                    </th>
                    <th class="p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">View Details</p>
                    </div>
                    </th>
                </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 text-center" v-for="(order,index) in orders" :key="index">
                <td class="text-gray-800 py-3 px-2" ><p>{{order.ID}}</p></td>
                <td class="text-gray-800 py-3 px-2" ><p>{{order.Name}}</p></td>
                <td class="text-gray-800 py-3 px-2" ><p>{{order.Date}}</p></td>
                <td class="text-gray-800 py-3 px-2" ><p>{{order.Total}}</p></td>
                <td class="text-gray-800 py-3 px-2" ><span :class="`${order.Status} rounded-lg px-1`">{{order.Status}}</span></td>
                <td class="text-gray-800 py-3 px-2" ><p><span class="px-1"><i :class="`fab ${order.Statusimg}`"></i></span>{{order.Method}}</p></td>
                <td class="text-gray-800 py-3 px-2" >
                  <button type="button" class="rounded-lg bg-indigo-600 text-white text-xs px-1 focus:outline-none">View More</button>
                </td>
              </tr>
            </tbody>
            </table>
            </div>
        </div>
        <div class="bg-white my-4 p-4 flex justify-between">
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
          <button @click="showprojectModal" class="bg-indigo-800 w-10 h-10 text-lg text-white rounded-full flex items-center justify-center
          focus:bg-indigo-500
          "><i class="fas fa-plus"></i></button>
        </div>
        </div>
        <div class="my-6">
        <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
            <thead>
                <tr class="border-b border-gray-600">
                    <th class="py-2 text-left text-base font-normal text-gray-600 px-4">Name</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Company</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Group</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Quntity</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Category</th>
                    <th class="py-2 text-left text-base font-normal text-gray-600">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in filteredList" :key="index" class="border-b border-gray-600 hover:bg-gray-200">
                <td class="py-2 px-4">{{item.name}}</td>
                <td class="py-2">{{item.company}}</td>
                <td class="py-2">{{item.group}}</td>
                <td class="py-2">{{item.quntity}}</td>
                <td class="py-2">{{item.category}}</td>
                <td class="text-indigo-800">
                    <i class="fas fa-pen hover:text-indigo-700"></i>
                    <i class="fas fa-trash mx-2 hover:text-indigo-700"></i>
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
                        <button type="submit" class="w-1/3 bg-indigo-700 mx-2 p-2 rounded text-white">Save</button>
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
  name: 'pharmacy',
  data () {
    return {
      search: '',
      invoices: [
        { name: 'House, bills', Transaction: '78', price: '130', avatar: require('@/assets/invoice/home.svg'), percent: '38', status: 'Paid-i' },
        { name: 'House, bills', Transaction: '61', price: '470', avatar: require('@/assets/invoice/dashboard.svg'), percent: '65', status: 'Stopped-i' },
        { name: 'House, bills', Transaction: '38', price: '230', avatar: require('@/assets/invoice/credit-card.svg'), percent: '85', status: 'Shipped-i' },
        { name: 'House, bills', Transaction: '34', price: '314', avatar: require('@/assets/invoice/shutter.svg'), percent: '45', status: 'Pending-i' }
      ],
      activities: [
        { date: '22 Nov', desc: 'Responded to need “Volunteer Activities', stautsicon: 'far fa-arrow-alt-circle-right' },
        { date: '17 Nov', desc: 'Responded to need “Volunteer Activities', stautsicon: 'fas fa-arrow-circle-right text-blue-600 bouncex' },
        { date: '20 Nov', desc: 'Responded to need “Volunteer Activities', stautsicon: 'far fa-arrow-alt-circle-right' },
        { date: '15 Nov', desc: 'Responded to need “Volunteer Activities', stautsicon: 'far fa-arrow-alt-circle-right' }
      ],
      pharmacies: [
        { name: 'popularised', company: 'popularised', group: 'group1', quntity: 5, category: 'category2' },
        { name: 'scrambled', company: 'scrascrambledmbled', group: 'group3', quntity: 5, category: 'scrambled' },
        { name: 'Letraset', company: 'Letraset', group: 'group3', quntity: 5, category: 'versions' },
        { name: 'versions', company: 'Letraset', group: 'group2', quntity: 5, category: 'scrambled' },
        { name: 'standard', company: 'Letraset', group: 'group1', quntity: 5, category: 'necessary' },
        { name: 'necessary', company: 'Letraset ', group: 'group2', quntity: 5, category: 'category2' }
      ],
      orders: [
        { ID: '#SK2540', Name: 'Neal Matthews', Date: '07 Oct, 2019', Total: '$400', Status: 'Paid', Method: 'Mastercard', Statusimg: 'fa-cc-mastercard' },
        { ID: '#SK2541', Name: 'Jamal Burnett', Date: '06 Oct, 2019', Total: '$380', Status: 'Chargeback', Method: 'Visa', Statusimg: 'fa-cc-visa' },
        { ID: '#SK2542', Name: 'Barry Dick', Date: '05 Oct, 2019', Total: '$$384', Status: 'Paid', Method: 'Paypal', Statusimg: 'fa-cc-paypal' },
        { ID: '#SK2543', Name: 'Ronald Taylor', Date: '04 Oct, 2019', Total: '$412', Status: 'Paid', Method: 'Mastercard', Statusimg: 'fa-cc-mastercard' },
        { ID: '#SK2544', Name: 'Juan Mitchell', Date: '09 Oct, 2019', Total: '$404', Status: 'Refund', Method: 'Visa', Statusimg: 'fa-cc-visa' },
        { ID: '#SK2545', Name: 'Jacob Hunter', Date: '12 Oct, 2019', Total: '$392', Status: 'Paid', Method: 'Paypal', Statusimg: 'fa-cc-paypal' }
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
    },
    formatToPrice (value) {
      return `${Number(value).toFixed(0)}$`
    }
  }
}
</script>
<style scoped>
.Paid{
  color: #34c38f;
  background-color: rgba(52,195,143,.18);
}
.Chargeback{
  color: #f46a6a;
  background-color: rgba(244,106,106,.18);
}
.Refund{
color: #f1b44c;
background-color: rgba(241,180,76,.18);
}
</style>
<style scoped>
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
.Paid-i{
  color:#827af3
}
.Pending-i{
color:#27b345
}
.Shipped-i{
color:#6ce6f4
}
.Stopped-i{
color:#f1b44c
}
.bg.Paid-i{
  background: linear-gradient(to right, rgba(130, 122, 243, 0.2) 0%, rgba(180, 122, 243, 0.2) 100%);
}
.bg.Pending-i{
  background: #eefff2 !important;
}
.bg.Shipped-i{
  background: #e5fafc !important;
}
.bg.Stopped-i{
  background-color: rgba(241,180,76,.18) !important;
}

</style>
