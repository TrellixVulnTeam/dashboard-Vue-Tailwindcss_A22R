<template>
    <div>
        <div class="text-gray-600 w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
        <div class="px-4 flex flex-wrap mb-6">
            <div class="lg:w-1/4 w-full">
            <p class="font-bold text-3xl text-start">Stations</p>
            </div>
        </div>
        </div>
    <div class="maps">
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
</template>
<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  name: 'stations',
  data () {
    return {
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
<style>
.gm-style .gm-style-iw-c {
  padding: 4px !important;
  max-height: 48px !important;
  color: rgba(67, 56, 202, 1) !important;
}
</style>
