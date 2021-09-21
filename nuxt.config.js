export default {
    srcDir: 'src/',
    buildModules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: ['@/assets/scss/variables.scss'],
    },
    build: {
        extractCSS: true,
    },
};
