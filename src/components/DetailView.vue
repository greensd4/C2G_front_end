<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="'data:image/JPG;base64,' + img.imageData" />
      </div>
      <div class="info">
        <span>{{ img.imageName }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ img.title }}</span>
      </div>
    </div>

    <br>
    <router-link class="mdl-button mdl-js-button" :to="{ name: 'albumDetail', params: {Aid: this.albumID } }">
    Back To Album..
    </router-link>
  </div>
</template>
<script>
  // import { find } from 'lodash'
  export default {
    data () {
      return {
        img: '',
        albumID: ''
      }
    },
    mounted () {
      this.img = this.$route.params.img
      this.albumID = this.$route.params.id
    }
  }
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  router-link {
    padding: 5px;
    color: #555;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>