<template>
    <div>
    <div class="text-gray-600 bg-white w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
        <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
            <div class="lg:w-1/4 w-full">
            <p class="text-gray-700 text-3xl text-start font-serif">Appinment</p>
            </div>
            <div class="lg:w-1/3 w-full">
            <input type="text" class="bg-gray-200 text-black form-text-input w-full px-4 focus:outline-none focus:border-indigo-700 rounded-md" placeholder="Type here to search..." >
            <a style="position: absolute;right: 24px; top: 30px; font-size: 16px;"><i class="fas fa-search"></i></a>
            </div>
        </div>
        </div>

    <div class="bg-white my-4 p-4 flex justify-between">
    <div class="w-1/4">
        <input type="text" v-model="search" placeholder="Search.."
        class="w-full inline-block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" >
    </div>

    <div class="w-1/4 flex items-center justify-end pr-6">
      <button @click="showprojectModal" class="bg-indigo-800 w-10 h-10 text-lg text-white rounded-full flex items-center justify-center
      focus:bg-indigo-600
      "><i class="fas fa-plus"></i></button>
    </div>
    </div>

    <div class="my-6">
    <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
        <thead>
            <tr class="border-b border-gray-600">
                <th class="py-2 text-left text-base font-normal text-gray-600">Name</th>
                <th class="py-2 text-left text-base font-normal text-gray-600">Gender</th>
                <th class="py-2 text-left text-base font-normal text-gray-600">Status</th>
                <th class="py-2 text-left text-base font-normal text-gray-600">Quntity</th>
                <th class="py-2 text-left text-base font-normal text-gray-600">Address</th>
                <th class="py-2 text-left text-base font-normal text-gray-600">Phone</th>
        </tr>

        </thead>
    </table>
</div>

    </div>
</template>
<script>
export default {
  name: 'appinment',
  data () {
    return {
      search: ''
    }
  }
}
</script>
