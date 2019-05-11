<template>
<div>
    <input type="text" v-model="dir">
    <button @click="listen">Listen!</button>
    <br><br>
    <Textarea v-model="change"></Textarea>
</div>
</template>

<script>
// import watch from 'watch'
export default {
  data () {
    return {
      dir: '',
      change: ''
    }
  },
  methods: {
    listen () {
      var watch = require('watch')
      watch.createMonitor('C:\\Users\\green\\Desktop\\camTogether\\images', function (monitor) {
        // monitor.files['/home/green/.zshrc'] // Stat object for my zshrc.
        monitor.on('created', function (f, stat) {
        // Handle new files
          console.log(f)
          console.log(stat)
        })
        monitor.on('changed', function (f, curr, prev) {
        // Handle file changes
        })
        monitor.on('removed', function (f, stat) {
          // Handle removed files
        })
        monitor.stop() // Stop watching
      })
    }
  }
}
</script>

<style scoped>
</style>