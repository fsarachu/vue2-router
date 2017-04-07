<template>
        <section class="section">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-item has-text-centered">
                        <p class="title is-4">The User Component</p>
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                <router-view></router-view>
                </transition>
            </div>
        </section>
</template>

<script>
    export default {}
</script>