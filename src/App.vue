<template>
    <div id="app">
        <router-view name="header-top"></router-view>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
    </div>
</template>

<script>
    import AppHeader from './components/Header.vue';

    export default {
        components: {
            AppHeader
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .15s ease-in-out;
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity .15s ease-in-out;
    }
</style>