<template>
  <v-container py-0 class="MainContainer" id="contacts">
    <v-layout row wrap>
      <v-flex xs12 class="mb40">
        <v-layout row wrap>
          <v-flex xs12>
            <div class="fs24 fw800 mb40">{{ data.title }}</div>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center>
          <v-flex xs12 sm4>
            <div class="mb40">{{ data.email }}</div>
          </v-flex>
          <v-flex xs12 sm4>
            <div class="mb40">{{ data.phone }}</div>
          </v-flex>
          <v-flex xs12 sm4>
            <!-- <div class="mb40" v-html="data.address"/> -->
            <div class="mb20">
              <v-btn
                class="ma-0 pa-0 mr-2"
                icon
                flat
                v-for="i in social"
                v-if="i.link"
                :key="i.key"
                :href="i.link"
                target="_blank"
              >
                <v-icon v-if="i.icon">{{ i.icon }}</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 v-if="map">

        <GmapMap
          :center="{lat:mapLat, lng:mapLng}"
          :zoom="mapZoom"
          map-type-id="terrain"
          style="width: 100%; height: 360px;"
          :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            disableDefaultUi: false
          }"
        >
          <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          /> -->
        </GmapMap>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'data',
      'social',
      'map'
    ],
    data () {
      return {
        mapLat: 50.4620758,
        mapLng: 30.4960409,
        mapZoom: 16
      }
    }
  }
</script>

<style lang="stylus">
</style>
