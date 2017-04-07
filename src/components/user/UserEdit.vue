<template>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">The UserEdit Component</h1>
                <ul>
                    <li>UserId: {{ userId }}</li>
                    <li>Locale: {{ locale }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            userId() {
                return this.$route.params.id;
            },
            locale() {
                return this.$route.query.locale;
            }
        }
    }
</script>