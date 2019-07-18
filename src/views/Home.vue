<template>
    <!-- https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/layouts/centered.vue -->
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-toolbar color="primary" dark fixed>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Inventory</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <!-- <v-btn flat>Link One</v-btn>
                        <v-btn flat>Link Two</v-btn>-->
                    </v-toolbar-items>
                </v-toolbar>
                <v-layout align-center justify-center app>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary" class="pr-3">
                                <v-toolbar-title prepend-icon="login"
                                    >Login</v-toolbar-title
                                >
                                <v-spacer></v-spacer>
                                <v-btn flat icon small @click="snack('bottom')"
                                    >Sign Up</v-btn
                                >
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        prepend-icon="person"
                                        name="login"
                                        label="Login"
                                        type="text"
                                    ></v-text-field>
                                    <v-text-field
                                        id="password"
                                        prepend-icon="lock"
                                        name="password"
                                        label="Password"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-snackbar
            :color="color"
            :bottom="bottom"
            :top="top"
            :left="left"
            :right="right"
            v-model="snackbar"
            dark
        >
            <v-icon color="white" class="mr-3">error</v-icon>
            <div style="text-align:center">
                <b>Sign up<br />disabled !</b>
            </div>
            <v-icon size="22" @click="snackbar = false">
                mdi-close-circle
            </v-icon>
        </v-snackbar>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        color: null,
        colors: ['purple', 'info', 'success', 'warning', 'error'],
        top: true,
        bottom: false,
        left: false,
        right: false,
        snackbar: false
    }),

    props: {
        source: String
    },

    methods: {
        snack(...args) {
            this.top = false;
            this.bottom = false;
            this.left = false;
            this.right = false;

            for (const loc of args) {
                this[loc] = true;
            }

            this.color = 'error'; //this.colors[Math.floor(Math.random() * this.colors.length)]

            this.snackbar = true;
        }
    }
};
</script>
