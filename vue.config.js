
// see https://forum.vuejs.org/t/vue-cli-3-where-i-change-theme-color-for-address-bar/29951/6
var manifestJSON = require("./public/manifest.json");
pwaArgs = {
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color
};


// https://github.com/gbih/sample-vue.config.js/blob/master/vue.config.js
module.exports = {
    lintOnSave: false,
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {
        themeColor: '#1976D2',
        msTileColor: '#1976D2',
    },
    chainWebpack: config => {
        config.plugin("pwa").tap(args => {
            return [pwaArgs];
        });
    }
}