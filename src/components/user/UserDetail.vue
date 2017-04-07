<template>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-4">The UserDetail Component</h1>
                <h2 class="subtitle">UserId: {{ userId }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            userId() {
                return this.$route.params.id;
            }
        }
    }
</script>