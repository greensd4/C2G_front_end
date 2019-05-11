<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="user.mail">Email</label>
                <input type="email" v-model="user.email" name="user.email" class="form-control" :class="{ 'is-invalid': submitted && !user.email }" />
                <div v-show="submitted && !user.email" class="invalid-feedback">Email is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="user.userName">Username</label>
                <input type="text" v-model="user.userName" name="user.userName" class="form-control" :class="{ 'is-invalid': submitted && !user.userName }" />
                <div v-show="submitted && !user.userName" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="user.password">Password</label>
                <input type="password" v-model="user.password" name="user.password" class="form-control" :class="{ 'is-invalid': submitted && !user.password }" />
                <div v-show="submitted && !user.password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled='!submitted'>Register</button>
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        'userName': null,
        'password': null,
        'description': null,
        'birthday': null,
        'joinDate': null,
        'profileImage': null,
        'email': null,
        'friends': null
      }
    }
  },
  methods: {
    register () {
      console.log('registier in on..')
    },
    handleSubmit (e) {
      console.log('in handleSubmit')
      this.submitted = true
      const { username, password } = this
      if (username && password) {
        this.register()
      }
    }
  },
  computed: {
    submitted: {
      get () {
        if (this.user.email && this.user.userName && this.user.password) {
          return true
        }
        return false
      },
      set () {
        return this.user.email && this.user.userName && this.user.password
      }
    }
  }
}
</script>
<style scoped>

</style>
