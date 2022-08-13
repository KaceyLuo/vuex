<template>
    <div>
        我是outter里面拿到的全局状态{{ getOutterCount }}
        <button @click="oadd">outter组件---改变状态按钮</button>
        <button @click="oaddAction">outter组件---改变状态按钮(action)</button>

    </div>


</template>
<script>
export default {
    name: "outter",
    computed: {
        getOutterCount: function () {
            // return this.$store.state.num;
            return this.$store.getters.getNum;
        }
    },
    methods: {
        oadd() {
            this.$store.commit('increase');
        },
        oaddAction() {
            this.$store.dispatch('decreaseAction');
        }
    }
}







</script>
<style scoped>
</style>