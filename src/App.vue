<template>
  <div id="app">
    <h1> {{ msg }} </h1>
    <p></p>
    <h2>{{ tip }}</h2>
    <ul>
      <li v-for="(data,i) in nav" :key="i">
        <router-link :to="data.to" >{{data.tip}}</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: "Welcome to Vue's world!",
        tip: "click to switch",
        uuid: "microhuman@126.com"
      }
    },
    created() {
      document.getElementById('loading').style.opacity = 0.0;
      document.getElementById('appview').style.opacity = 1.0;
    },
    computed: {
      //自定义导航
      nav () {
        return [
        {
          to: '/one?' + this.uuid,
          tip: 'one'
        }, {
          to: '/two?' + this.uuid,
          tip: 'two'
        }, {
          to: '/three?' + this.uuid,
          tip: 'three'
        },{
          to: '/donate?' + this.uuid,
          tip: 'donate'
        }]
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
