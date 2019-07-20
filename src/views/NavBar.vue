// source:
https://github.com/anoobbava/showcase/blob/master/src/views/NavBar.vue
<template>
    <!-- FIXME: https://bootstrap-vue.js.org/docs/components/navbar/ responsive on small screens??  or remove texts on overflow -->
    <!-- display the navigation bar -->
    <v-toolbar color="primary" class="navbar" app dark>
        <v-spacer></v-spacer>
        <!-- navigation bar links -->
        <v-toolbar-items class="hidden-xs-only,navbar" v-if="!userLogedIn">
            <v-btn
                flat
                v-for="item in items"
                :key="item.title"
                :to="item.link"
                :disabled="item.disabled"
            >
                <v-icon right class="pr-2">{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar-items>
        <!-- sign out button -->
        <v-toolbar-items class="hidden-xs-only,navbar" v-else>
            <v-btn flat @click="logoutFromFirebase">
                <v-icon right>delete_sweep</v-icon>Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    computed: {
        // set links of buttons to components
        items() {
            let menuItems = [
                {
                    title: 'Register',
                    icon: 'person_add', //person account_circle
                    link: '/register',
                    disabled: false //true
                },
                {
                    title: 'Login',
                    icon: 'person', //exit_to_app no_encryption
                    link: '/login',
                    disabled: false
                }
            ];
            return menuItems;
        },

        userLogedIn() {
            return this.$store.getters.user;
        }
    },
    methods: {
        logoutFromFirebase() {
            this.$store.dispatch('signOutAction');
        }
    }
};
</script>
