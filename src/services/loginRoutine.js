import axios from 'axios'
const API_URL = 'http://localhost:8080'

export class LoginService {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    this.a = null
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
  login (userName, password) {
    console.log('In logging routine...')
    const url = `${API_URL}/login/${userName}`
    return new Promise((resolve, reject) => {
      axios.get(url, password, {
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
