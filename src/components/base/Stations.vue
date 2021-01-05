<template>
    <div>
      <div class="text-gray-600 bg-white w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
          <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
            <div class="lg:w-1/4 w-full">
            <p class="text-gray-700 text-3xl text-start font-serif">Stations</p>
            </div>
            <div class="lg:w-1/3 w-full">
            <input type="text" class="bg-gray-200 text-black form-text-input w-full px-4 focus:outline-none focus:border-indigo-700 rounded-md" placeholder="Type here to search..." >
            <a style="position: absolute;right: 24px; top: 30px; font-size: 16px;"><i class="fas fa-search"></i></a>
            </div>
        </div>
    </div>
    <div class="mx-10 px-8">
    <div class="my-6 grid grid-cols-3 gap-4">
      <div class="bg-white  col-span-2 rounded-lg">
          <div class="my-8 bg-white rounded-lg">
        <div class="px-4"><p class="text-xl text-gray-700">Frequent Post List</p></div>
        <div class="py-4 px-8 mt-4">
          <table class="table-responsive-full sort-table  rounded-lg  bg-white lg:w-full">
          <thead>
              <tr class="border-0">
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Package No.</th>
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Date</th>
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Delivery</th>
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Status</th>
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Location</th>
                  <th class="py-2  text-base font-normal font-semibold text-gray-800">Progress</th>
          </tr>
          </thead>
         <tbody>
            <tr v-for="(post,index) in postslist" :key="index">
              <td class="text-gray-800 py-2 px-2 text-center"><p>#{{post.No}}</p></td>
              <td class="text-gray-800 py-2 px-2 text-center"><p>{{post.Date}}</p></td>
              <td class="text-gray-800 py-2 px-2 text-center"><p>{{post.Delivery}}</p></td>
              <td class="text-gray-800 py-2 px-2 text-center"><P :class="`${post.Status} rounded-md text-white text-sm`">{{post.Status}}</P></td>
              <td class="text-gray-800 py-2 px-2 text-center"><P>{{post.Location}}</P></td>
              <td class="text-gray-800 py-2 px-2 text-center">
                <div class="iq-progress-bar">
                  <span :class="`${post.Status}`" :style="{'width': post.Progress+ '%'}" style="transition: width 2s ease 0s;"></span>
                </div>
              </td>
            </tr>
          </tbody>
      </table>
        </div>
    </div>

      </div>
      <div class="bg-white h-full rounded-lg">
        <div class="my-8 bg-white rounded-lg">
        <div class="px-4"><p class="text-xl text-gray-700">Post Summary</p></div>
        <div class="mt-8 px-4"><p class="text-sm text-gray-600">List Of statistics</p></div>
        <div class="statistics flex flex-wrap pr-1">
          <div class="w-1/2 my-2"  v-for="(item,index) in statistics" :key="index">
              <div class="flex items-center">
                <div class="iq-scale-border mx-2" :class="`${item.title}`"></div>
                <div>
                  <h2 class="text-gray-800">{{item.number}}</h2>
                  <p class="text-gray-500">{{item.title}}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="maps my-8">
<GmapMap
    :center="{lat:currentlocation.lat, lng:currentlocation.lng}"
    :zoom="8"
  map-type-id="terrain"
  style="width: 100%; height: 520px"
    >
        <GmapMarker
    :key="index"
    v-for="(item, index) in stations"
    :position="getPosition(item)"
    :clickable="true"
    :draggable="false"
    :icon="{ url: require('@/assets/home.svg'),scaledSize: {width:28, height: 28}}"
/>
  <gmap-info-window
  :key="index"
    v-for="(item, index) in stations"
          :options="infoWindowOptions"
          :position="getPosition(item)"
          :opened="true"
          @closeclick="handleInfoWindowClose"

      >
          <div class="info-window text-ingido-800" style="padding:16px">
            {{item.name}}
        </div>
      </gmap-info-window>

    </GmapMap>
    </div>
    </div>
    </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  name: 'stations',
  data () {
    return {
      postslist: [
        { No: '0879985', Date: '26/12/2019', Delivery: '9/2/2019', Status: 'Moving', Location: 'Victoria 8007 Australia', Progress: 90 },
        { No: '0879984', Date: '23/12/2019', Delivery: '14/12/2019', Status: 'Pending', Location: 'Athens 2745 Greece', Progress: 70 },
        { No: '0879983', Date: '21/12/2019', Delivery: '15/8/2019', Status: 'Canceled', Location: 'Victoria 8007 Australia', Progress: 48 },
        { No: '0879982', Date: '15/12/2019', Delivery: '1/12/2019', Status: 'Working', Location: 'Delhi 0014 India', Progress: 80 },
        { No: '0874585', Date: '12/12/2019', Delivery: '12/12/2019', Status: 'Working', Location: 'Athens 2745 Greece', Progress: 85 },
        { No: '0879112', Date: '29/18/2019', Delivery: '31/12/2019', Status: 'Pending', Location: 'Delhi 0014 India', Progress: 60 }
      ],
      statistics: [
        { title: 'Likes', number: 2.864 },
        { title: 'Comments', number: 24 },
        { title: 'Share', number: 15 },
        { title: 'Repost', number: 864 },
        { title: 'Views', number: 2864 },
        { title: 'Posts', number: 864 }
      ],
      stations: [
        { name: 'station1', lat: 31.506432, lng: 34.239167999999995 },
        { name: 'station2', lat: 31.606432, lng: 34.939167999999995 },
        { name: 'station3', lat: 31.906432, lng: 34.0039167999999995 },
        { name: 'station4', lat: 31.006432, lng: 34.119167999999995 }
      ],
      currentlocation: { lat: 0, lng: 0 },
      infoWindowOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  computed: {
    google: gmapApi
    /*  infoWindowPosition () {
      return {
        lat: parseFloat(this.activedriver.lat),
        lng: parseFloat(this.activedriver.lng)
      }
    } */
  },
  methods: {
    getPosition (item) {
      return {
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lng)
      }
    },
    getCoords () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentlocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
    /*    handleInfoWindowClose () {
      this.activedriver = []
      this.infoWindowOpened = false
    } */
  },
  created () {
    this.getCoords()
  }
}
</script>
<style scoped>
.gm-style .gm-style-iw-c {
  padding: 4px !important;
  max-height: 48px !important;
  color: rgba(67, 56, 202, 1) !important;
}
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
.Moving{
    background-color: #28a745!important;
}
.Pending{
    background-color: #ffc107!important;
}
.Canceled{
    background-color: #dc3545!important;
}
.Working{
    background-color: #17a2b8!important;
}
.iq-scale-border {
    height: 50px;
    width: 50px;
    border: 8px solid;
    border-radius: 50%;
}
.iq-scale-border.Likes{
    border-color: #e0defc !important;
}
.iq-scale-border.Comments{
    border-color: #e5fafc !important;
}
.iq-scale-border.Share{
    border-color: #fedc8a !important;
}
.iq-scale-border.Repost{
    border-color: #fa847b !important;
}
.iq-scale-border.Views{
    border-color: #56d172 !important;
}
.iq-scale-border.Posts{
    border-color: #cacaca !important;
}
</style>
