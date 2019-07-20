//
https://github.com/anoobbava/showcase/blob/master/src/components/auth/Register.vue
//
https://medium.com/javascript-in-plain-english/how-to-implement-a-showcase-web-app-in-vue-js-with-firebase-and-register-functionality-part-1-992089d17828
<template>
    <v-container>
        <v-layout align-center justify-center app>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary" class="pr-3">
                        <v-toolbar-title>Sign up</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                prepend-icon="person"
                                label="E-mail"
                                required
                                value="test@test.com"
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
                                value="test@test.com"
                            ></v-text-field>

                            <v-text-field
                                v-model="confirmPassword"
                                label="Confirm the password"
                                required
                                prepend-icon="lock"
                                :error-messages="emailMatchError()"
                                :append-icon="
                                    confirmPasswordShow
                                        ? 'visibility'
                                        : 'visibility_off'
                                "
                                :type="
                                    confirmPasswordShow ? 'text' : 'password'
                                "
                                @click:append="
                                    confirmPasswordShow = !confirmPasswordShow
                                "
                            ></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    @click="validate"
                                >
                                    Register
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
// import { mapMutations } from 'vuex';

export default {
    name: 'Register',
    data: () => ({
        passwordShow: false,
        confirmPasswordShow: false,
        valid: true,
        email: 'test@test.com', //default values
        password: 'password',
        confirmPassword: 'password',
        emailRules: [
            v => !!v || 'E-mail is required',
            // email regex from https://stackoverflow.com/a/46181
            v =>
                //eslint-disable-next-line
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test( //eslint-disable-line
                    v
                ) || 'E-mail must be valid'
        ],
        passwordRules: [v => !!v || 'Password Required']
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.registerWithFirebase();
            }
        },

        reset() {
            this.$refs.form.reset();
        },

        emailMatchError() {
            //https://stackoverflow.com/a/51483271/4940084
            return this.password === this.confirmPassword
                ? ''
                : 'Email must match';
        },

        notification(
            type = 'info',
            text = 'Sample notification text',
            position = 'top-right',
            timeout = 5000
        ) {
            // fixme: change font, https://github.com/yariksav/vuetify-dialog/issues/12
            // text = '<span style="font-size: 24px">'+text+'</span>'
            // text = '<span>'+text+'</span>'
            this.$dialog.notify[type](text, {
                position: position,
                timeout: timeout
            });
        },

        registerWithFirebase() {
            const user = {
                email: this.email,
                password: this.password
            };
            var self = this;
            this.$store
                .dispatch('signUpAction', user)
                .then(function(result) {
                    //console.info(result); // "Stuff worked!"
                    self.notification('success', result);
                })
                .catch(function(err) {
                    //console.error('signUpAction-err = '+err); // Error: "It broke"
                    self.notification('error', err);
                });
        }
    }
};
</script>
