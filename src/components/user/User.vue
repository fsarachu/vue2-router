<template>
    <section class="hero is-light is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">The User Component</h1>
                <h2 class="subtitle">ID: {{ userId }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                userId: this.$route.params.id
            };
        },
        watch: {
            $route(to, from) {
                this.userId = to.params.id;
            }
        }
    }
</script>