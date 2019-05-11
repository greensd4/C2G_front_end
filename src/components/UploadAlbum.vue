<template>
<div>
    <!-- <div class="l1">
    <label> Album Name </label>
    <input v-model="albumData.albumName" type="text"> 
    <br><br>
    <label> Radius </label>
    <input v-model="albumData.rules.radius" type="number">  
    </div>
    <br><br>
    <button @click="onUpload">Upload!</button> -->

  <form @submit.prevent="handleSubmit">
    <div class="form-group">
        <label for="albumName">Album Name</label>
        <input type="text" v-model="albumData.name" name="albumName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('albumName') }" />

    </div>
    <div class="form-group">
        <label for="radius">Radius</label>
        <input type="number" v-model="albumData.rules.radius"  name="radius" class="form-control" :class="{ 'is-invalid': submitted && errors.has('radius') }" />
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <input type="text" v-model="albumData.description" name="description" class="form-control" :class="{ 'is-invalid': submitted && errors.has('description') }" />
    </div>
  </form>
  <br><br>
  <button @click="onUpload">Upload!</button>


</div>
</template>

<script>
import {APIService} from '../services/cam2gether'
import data from '../data'
// import moment from 'moment'

const apiService = new APIService()

export default {
  data () {
    return {
      albumData: {
        images: null,
        thumbnails: null,
        creator: data.userName,
        name: '',
        participants: null,
        description: '',
        rules: {
          longitude: null,
          latitude: null,
          radius: null,
          startTime: null,
          endTime: null
        },
        // creationDate: moment(Date()).format('YYYY/MM/DD hh:mm'),
        // expirationDate: moment(Date()).format('YYYY/MM/DD hh:mm')
        creationDate: null,
        expirationDate: null
      },
      ret: '',
      submitted: false,
      lat: null,
      lon: null
    }
  },
  methods: {
    onUpload () {
      this.getGeoLocation()
      apiService.createNewAlbum(data.userName, this.albumData)
    },
    getGeoLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } else {
        this.error = 'Geolocation is not supported.'
      }
    },
    showPosition: function (position) {
      this.albumData.rules.latitude = position.coords.latitude
      this.albumData.rules.longitude = position.coords.longitude
    }
  },
  computed: {
    // date: Date()
  }
}
</script>

<style scoped>
l1 {
    float: left;
}
</style>

