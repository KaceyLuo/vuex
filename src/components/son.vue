<template>
    <div>
        <span>我是子组件</span>-------{{ msg }}<br>
        ------我是全局状态{{ getNum }}
        <button @click="sendMsgToFather">向父组件传递数据</button>
        <button @click="sadd">我是子组件----改变状态按钮</button>
        <button @click="saddAction">我是子组件----改变状态按钮(action)</button>

    </div>

</template>

<script>
export default {
    name: "son",
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            toFatherMsg: '我是你的son'
        }
    },
    methods: {
        sendMsgToFather: function () {
            this.$emit('handle', this.toFatherMsg)
        },
        sadd() {
            this.$store.commit('increase');
        },
        saddAction() {
            this.$store.dispatch('decreaseAction');
        }
    },
    computed: {
        getNum: function () {
            return this.$store.state.num;
        }
    }
}

</script>

<style scoped>
</style>