import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 88
  },
  //改变所定义的状态
  mutations: {
    // increase:function(state){

    // }
    increase(state) {
      state.num++;

    },
    decrease(state) {
      state.num = state.num - 20;
    }
  },
  //action提交的是mutation而不是直接变更状态 action可以包含异步操作 但mutation只能包含同步操作
  actions: {
    //context为上下文对象
    //action中只能对mutation进行操作
    decreaseAction(context) {
      // setTimeout(function () {
      //   context.commit('decrease')

      // }, 1000)
      context.commit('decrease')

    }
  },
  getters: {
    getNum(state) {
      return state.num > 0 ? state.num : 0
    }
  },
  modules: {
  }
})
//创建状态仓库 注意Store,state不能改
