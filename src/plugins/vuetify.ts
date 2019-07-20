import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// https://github.com/yariksav/vuetify-dialog
import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';

Vue.use(Vuetify, {
    iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
    theme: { // https://lobotuerto.com/thingies/vuetify-color-theme-builder/
        "primary": "#1976D2",
        "secondary": "#424242",
        "accent": "#82B1FF",
        "error": "#FF5252",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FB8C00"
    }
});

Vue.use(VuetifyDialog);
