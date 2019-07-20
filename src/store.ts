// from https://github.com/anoobbava/showcase/blob/5ae5052f0fb4967146d512e4e08ddf8e2c4154fc/src/store/index.js
// state management with vuex in store
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

// https://github.com/yariksav/vuetify-dialog
import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';
Vue.use(VuetifyDialog);

export default new Vuex.Store({
    state: {
        user: null,
        status: null,
        error: null
        // snack: ''
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        removeUser(state) {
            state.user = null;
        },
        setStatus(state, payload) {
            state.status = payload;
        },
        setError(state, payload) {
            state.error = payload;
        }
        // setSnack(state, snack) {
        //     state.snack = snack;
        // }
    },
    actions: {
        signUpAction({ commit }, payload) {
            return new Promise((resolve, reject) => {
                if (this.state.status == 'connected') {
                    reject('You are already logged in!');
                } else {
                    commit('setStatus', 'loading');
                    commit('setError', null); //reset every trial
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(
                            payload.email,
                            payload.password
                        )
                        .then(response => {
                            // response will have user
                            // user will have uid will be updated to the state
                            const _uid = -1;
                            if (response.user != undefined) {
                                const _uid = response.user.uid;
                            }
                            commit('setUser', _uid);
                            commit('setStatus', 'success');
                            commit('setError', null);
                            // commit('setSnack', 'sign up success');
                            console.log('signUpAction ok = ' + response);
                            resolve('signUpAction ok = ' + response);
                        })
                        .catch(error => {
                            commit('setStatus', 'failure');
                            commit('setError', error.message);
                            reject(error);
                        });
                }
            }); // end promise
        },

        signInAction({ commit }, payload) {
            return new Promise((resolve, reject) => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(payload.email, payload.password)
                    .then(response => {
                        const _uid = -1;
                        if (response.user != undefined) {
                            const _uid = response.user.uid;
                        }
                        commit('setUser', _uid);
                        commit('setStatus', 'connected');
                        commit('setError', null);
                        resolve('Successful sign-in');
                    })
                    .catch(error => {
                        commit('setStatus', 'failure');
                        commit('setError', error.message);
                        reject('Failed sign-in: ' + error);
                    });
            });
        },

        signOutAction({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(response => {
                    commit('setUser', null);
                    commit('setStatus', 'success');
                    commit('setError', null);
                })
                .catch(error => {
                    commit('setStatus', 'failure');
                    commit('setError', error.message);
                });
        }
    },

    getters: {
        status(state) {
            return state.status;
        },
        user(state) {
            return state.user;
        },
        error(state) {
            return state.error;
        }
    }
});
