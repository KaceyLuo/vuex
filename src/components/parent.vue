<template>
    <div>
        <span>我是父组件</span>-----{{ fromSonMsg }}<br>
        ---------我是父组件全局状态{{ getcount }}
        <button @click="padd">父组件-改变状态按钮</button>
        <button @click="paddAction">父组件-改变状态按钮(action)</button>

        <hr>
        <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    </div>

</template>

<script>
import son from './son'

export default {
    name: "parent",
    data: function () {
        return {
            toSonMsg: '我是你的爸爸',
            fromSonMsg: ''
        }
    },
    components: {
        son
    },
    methods: {
        getMsgFromSon: function (value) {
            this.fromSonMsg = value
        },
        padd() {
            this.$store.commit('increase')
        },
        paddAction() {
            this.$store.dispatch('decreaseAction');

        }
    },
    computed: {
        getcount: function () {
            return this.$store.state.num;
        }
    }
}

</script>

<style scoped>
</style>