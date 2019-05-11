import axios from 'axios'
const API_URL = 'http://localhost:8080'

export class APIService {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    this.a = null
  }
  // GET: api/album/{userName}
  async getAlbums (userName) {
    const url = `${API_URL}/album/${userName}`
    return new Promise((resolve, reject) => {
      axios.get(url, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
  // POST: api/album/{userName}
  createNewAlbum (userName, albumData) {
    const url = `${API_URL}/album/${userName}`
    return new Promise((resolve, reject) => {
      axios.post(url, albumData, {
      })
        .then(function (response) {
          console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }
  // GET: api/album/{userName}/{albumId}
  async getAlbumImages (userName, albumId) {
    const url = `${API_URL}/album/${userName}/${albumId}`
    return new Promise((resolve, reject) => {
      axios.get(url, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
  // Get: api/image/{id}
  async getImage () {
    const url = `${API_URL}/image/faces.jpeg`
    return new Promise((resolve, reject) => {
      axios.get(url, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
  // POST: api/image
  postImg (img) {
    console.log(img)
    const url = `${API_URL}/image`
    return new Promise((resolve, reject) => {
      axios.post(url, img, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
  // POST: api/register
  register (user) {
    const url = `${API_URL}/register`
    return new Promise((resolve, reject) => {
      axios.post(url, user, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
  // GET: api/login
  login (id, password) {
    const url = `${API_URL}/login/${id}:${password}`
    return new Promise((resolve, reject) => {
      axios.get(url, {
      })
        .then(function (response) {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          // console.log(error)
          reject(error)
        })
    })
  }
}
