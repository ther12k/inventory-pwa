//
https://github.com/anoobbava/showcase/blob/master/src/components/auth/Signin.vue
//
https://medium.com/javascript-in-plain-english/how-to-implement-a-showcase-web-app-in-vue-js-with-firebase-and-register-functionality-part-1-992089d17828
<template>
    <v-container>
        <v-layout align-center justify-center app>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary" class="pr-3">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                prepend-icon="person"
                                label="E-mail"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                label="Password"
                                required
                                prepend-icon="lock"
                                :append-icon="
                                    passwordShow
                                        ? 'visibility'
                                        : 'visibility_off'
                                "
                                :type="passwordShow ? 'text' : 'password'"
                                @click:append="passwordShow = !passwordShow"
                            ></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    @click="validate"
                                >
                                    Login
                                </v-btn>

                                <v-btn color="error" @click="reset">
                                    Reset
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        passwordShow: false,
        valid: true,
        email: 'test@test.com', //default values
        password: 'password',
        emailRules: [
            v => !!v || 'E-mail is required',
            // email regex from https://stackoverflow.com/a/46181
            v =>
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                    v
                ) || 'E-mail must be valid'
        ],
        passwordRules: [v => !!v || 'Password is Required']
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.loginWithFirebase();
            }
        },

        reset() {
            this.$refs.form.reset();
        },

        loginWithFirebase() {
            const user = {
                email: this.email,
                password: this.password
            };
            this.$store.dispatch('signInAction', user);
        }
    }
};
</script>
