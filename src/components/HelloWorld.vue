<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <qriously :value="value" :size="size" :backgroundAlpha="backgroundAlpha"/>
    <div>{{token}}</div>
    <button @click="add()">addCookie</button>
    <button @click="get()">getCookie</button>
    <button @click="del()">delCookie</button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      token: null,
      // 可以自定义，必填项。
      value: 'http://lxchuan12.github.io/',
      // 二维码大小 默认 100
      size: 80,
      // 背景透明度，默认透明 0
      backgroundAlpha: 1
    }
  },
  methods: {
    add () {
      // a
      this.token = Cookies.set('token', '1111', {expires: 1})
      const a = 1
      console.log(a)
    },
    del () {
      // a
      this.token = Cookies.remove('token')
    },
    get () {
      // a
      this.token = Cookies.get('token')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
