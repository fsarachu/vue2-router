<template>
    <div id="app">
        <router-view name="header-top"></router-view>
        <router-view></router-view>
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

