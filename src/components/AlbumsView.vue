<template>

<div>
    <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
  <ul class="card-list">
        <li v-for="album in albums.albums" class="card-item">
            <div class="albumCard">
                <img v-bind:src="thumbnail"/>
                <button @click="displayDetails(album.name)">
                    {{album.name}}
                </button>
            </div>
        </li>
    </ul>
  <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/uploadAlbum">
      <i class="material-icons">add</i>
    </router-link>
</div>
</template>

<script>
import data from '../data'
import {APIService} from '../services/cam2gether'
const api = new APIService()
export default {
  data () {
    return {
      'thumbnail': data.albums[0].thumbnail,
      'albums': ''
    }
  },
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'albumDetail', params: { Aid: id }})
    }
  },
  mounted () {
    api.getAlbums(data.userName).then(data => {
      console.log(data)
      this.albums = {
        'albums': data.albums
      }
    })
  }
}
</script>

<style scoped>

.albumCard {
 width: 10%;
 margin: 10%;
 float: left;   
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  button {
    font-family: 'btn-icon' !important;
    font-size: 70%;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>