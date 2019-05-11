<template>
<div>
    <input type="file" accept="image/*" @change="onFileChanged">
    <button @click="onUpload">Upload!</button>
    <br><br>
    <div class="image-card__picture">
    </div>
</div>
</template>

<script>
import {APIService} from '../services/cam2gether'
import moment from 'moment'
import data from '../data'
const apiService = new APIService()

export default {

  data () {
    return {
      img: {
        'imageData': null,
        'imageSize': null,
        'imageHeight': null,
        'imageWidth': null,
        'imageName': null,
        'albumName': null,
        'latitude': null,
        'longitude': null,
        'date': null,
        'title': '',
        'userName': data.userName
      }
    }
  },
  methods: {
    onFileChanged (event) {
      // var _URL = window.URL || window.webkitURL
      this.getDataFromFile(event.target.files[0])
      // this.img = this.$data
    },
    getDataFromFile (file) {
      let vm = this
      var i = new Image()
      i.src = window.URL.createObjectURL(file)
      i.onload = function () {
        vm.img.imageWidth = this.width
        vm.img.imageHeight = this.height
      }
      this.img.date = moment(String(Date())).format('YYYY-MM-DD HH:mm:ss')
      this.img.imageSize = file.size
      this.img.imageName = file.name
      var reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = function () {
        vm.img.imageData = btoa(reader.result)
      }
      this.getLocation()
    },
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
        // console.log(navigator.geolocation)
      } else {
        this.error = 'Geolocation is not supported.'
      }
    },
    showPosition (position) {
      this.img.latitude = position.coords.latitude
      this.img.longitude = position.coords.longitude
    },
    onUpload () {
      console.log(this.img)
      this.ret = apiService.postImg(this.img)
    }
  }
}
</script>

<style scoped>

</style>