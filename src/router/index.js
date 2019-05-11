import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DetailView from '@/components/DetailView'
import UploadImg from '@/components/UploadImg'
import UploadAlbum from '@/components/UploadAlbum'
import AlbumsView from '@/components/AlbumsView'
import AlbumDetail from '@/components/AlbumDetail'
import LoginPage from '@/components/LoginPage'
import RegisterPage from '@/components/RegisterPage'
import Watcher from '@/components/Watcher'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watcher
    },
    {
      path: '/uploadAlbum',
      name: 'uploadAlbum',
      component: UploadAlbum
    },
    {
      path: '/albumsView',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/albumDetail/:Aid',
      name: 'albumDetail',
      component: AlbumDetail
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadImg
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})
