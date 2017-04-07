<template>
    <nav class="nav has-shadow">
        <div class="container">

            <div class="nav-left">
                <div class="nav-item">
                    <button @click="navigateToHome" class="button is-primary">
                        <span class="icon">
                            <i class="fa fa-random"></i>
                        </span>
                    </button>
                </div>
                <router-link :to="{name: 'home'}" class="nav-item is-tab" activeClass="is-active" exact>Home</router-link>
                <router-link :to="{name: 'users'}" class="nav-item is-tab" activeClass="is-active">User</router-link>
            </div>

        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>