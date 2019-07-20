<template>
    <v-app>
        <!-- display the nav bar -->
        <nav-bar></nav-bar>

        <v-container fluid fill-height>
            <!-- Display the component using router-view -->
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import NavBar from '@/views/NavBar.vue';

// import { mapGetters } from 'vuex'
export default {
    name: 'App',
    components: {
        NavBar
    },
    data() {
        return {
            title: process.env.VUE_APP_TITLE
        };
    },
    // Computed properties
    computed: {},
    methods: {}
};
</script>

<style></style>
