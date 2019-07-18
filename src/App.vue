<template>
    <v-app>
        <!-- display the nav bar -->
        <nav-bar></nav-bar>
        <!-- <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content> -->

        <v-container fluid fill-height>
            <!-- Display the component using router-view -->
            <router-view></router-view>
            <!-- Use v-dialog  -->
            <!-- <v-snackbar v-model="show" dark :top=true :multi-line=true :auto-height=true :timeout="timeout" color='error'>
                <v-icon color="white" class="mr-3">error</v-icon>
                <div style="text-align:center"> -->
            <!-- <span>{{ message }}</span> -->
            <!-- <span>{{ message }}</span>
                    <span><b>Sign up Error</b></span>
                </div> -->
            <!-- <v-icon size="22" @click="snackbar = false">
                    mdi-close-circle
                </v-icon> -->
            <!-- <v-btn flat color="accent" @click.native="show = false"
                    >Close</v-btn
                >
            </v-snackbar> -->
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
            //show: false,\
            // timeout: 10000
        };
    },
    // Computed properties
    computed: {
        // show: function(){return this.$store.getters.getSnack !== ''},
        // show: {
        //     // getter
        //     get: function(){ return this.message !== '' },
        //     // setter
        //     set: function(newValue:boolean) {this.$store.commit('setSnack', newValue) },
        // },
        // ...mapGetters({
        //     // map `this.message` to `this.$store.getters.getSnack`
        //     message: 'getSnack'
        // })
    },
    methods: {}
};
</script>

<style></style>
