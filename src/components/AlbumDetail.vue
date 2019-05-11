<template>
<div class="mdl-grid">
    <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
    <label>{{album.albumName}}</label>
    <ul>
        <li @click="showDetails(img)" v-for="img in this.album.images">
            <div class="img_Card">
                <img :src="'data:image/JPG;base64,' + img.imageData"/>
                <br>
                <!-- <button @click="showDetails(img)">
                    details
                </button> -->
            </div>
        </li>
    </ul>
    <router-link class="mdl-button mdl-js-button" to="/albumsView">
    Back To Albums..
    </router-link>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/upload">
      <i class="material-icons">add</i>
    </router-link>
</div>
</template>

<script>
  // import { find } from 'lodash'
  import {APIService} from '../services/cam2gether'
  import data from '../data'

  const api = new APIService()
  export default {
    data () {
      return {
        albumID: '',
        album: ''
        // images: null,
        // img: null,
        // albumCheck: null,
        // imagesCheck: null
      }
    },
    mounted () {
      // this.album = data.albums[this.$route.params.Aid]
      this.albumID = this.$route.params.Aid
      // this.images = this.album.images
      this.getImages()
    },
    methods: {
      getImages () {
        api.getAlbumImages(data.userName, this.albumId).then(data => {
          console.log(data)
          this.album = {
            'images': data.images,
            'Creator': data.Creator,
            'Name': data.Name,
            'Participants': data.Participants,
            'Description': data.Description,
            'Rules': data.Rules,
            'CreationDate': data.CreationDate,
            'ExpirationDate': data.ExpirationDate
          }
          // this.images = data.images
        })
      },
      goBack () {
        this.$router.push({name: 'albumsView'})
      },
      showDetails (img) {
        console.log(img)
        this.$router.push(
          {
            name: 'detail',
            params:
                {
                  img: img,
                  id: this.albumID
                }
          })
      }
    }

  }
</script>

<style scoped>

.img_Card {
 width: 30%;
 margin: 1%;
 float: left;   
}

ul {
  list-style-type: none;
  overflow: hidden;
}
label {
    width: auto;
}
img {
    width: 100%;
    height: 100px;
}
</style>