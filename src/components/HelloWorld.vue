<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <qriously :value="value" :size="size" :backgroundAlpha="backgroundAlpha"/>
    <el-button @click='handleCopy(inputData,$event)'>copy1</el-button>
    <el-button v-clipboard:copy='inputData' v-clipboard:success='clipboardSuccess'>copy</el-button>
    <div>{{token}}</div>
    <button @click="add()">addCookie</button>
    <button @click="get()">getCookie</button>
    <button @click="del()">delCookie</button>
  </div>
</template>

<script>
// 直接使用
import clip from '@/utils/clipboard'
// 指令形式使用
import clipboard from '@/directive/clipboard/index.js'
export default {
  directives: {
    clipboard
  },
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
      backgroundAlpha: 1,
      inputData: 'copy123456'
    }
  },
  methods: {
    handleCopy (text, event) {
      clip(text, event)
    },
    clipboardSuccess () {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      })
    },
    add () {
      // a
      this.token = this.$Cookies.set('token', '1111', {expires: 1})
      const a = 1
      console.log(a)
    },
    del () {
      // a
      this.token = this.$Cookies.remove('token')
    },
    get () {
      // a
      this.token = this.$Cookies.get('token')
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
