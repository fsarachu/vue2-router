<template>
    <div class="menu">
        <p class="menu-label">
            Users
        </p>
        <ul class="menu-list">
            <li>
                <router-link :to="{name: 'userShow', params: {id: 1}}">User 1</router-link>
            </li>
            <li>
                <router-link :to="{name: 'userShow', params: {id: 2}}">User 2</router-link>
            </li>
            <li>
                <router-link :to="{name: 'userShow', params: {id: 3}}">User 3</router-link>
            </li>
        </ul>
    </div>
</template>