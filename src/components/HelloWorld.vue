<!-- 用来管理状态，共享数据，在各个组件之间管理外部状态
1.引入vuex并通过use方法使用它
2.创建状态仓库
3.通过this.$store.state.XXX直接拿到需要的数据 -->

<!-- vuex状态管理流程
view----action----mutation------stae------view -->
<template>
  <div class="hello">
    <parent></parent>
    <hr>
    <outter></outter>
  </div>
</template>

<script>
import parent from './parent.vue'
import outter from './outter.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    parent,
    outter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
